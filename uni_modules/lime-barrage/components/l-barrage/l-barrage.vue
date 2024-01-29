<template>
	<view class="l-barrage" :style="[styles, props.lStyle]">
		<!-- #ifdef VUE3 -->
		<template v-for="item in list" :key="item.id">
			<!-- IOS不能动态offset -->
			<view 
				class="l-barrage-item" 
				v-if="item && item.style.opacity && !item.style['--l-barrage-offset']" 
				:id="item.id">
				<slot :content="item.content" />
			</view>
			<view
				class="l-barrage-item" 
				v-if="item && item.style.opacity && item.style['--l-barrage-offset']" 
				:id="item.id"
				:count="item.count"
				:style="[item.style]"
				@animationend="animationend(item)"
				@animationstart="animationstart(item)"
				@touchcancel="touchend(item)"
				@touchstart="touchstart(item)"
				@touchend="touchend(item)">
				<slot :content="item.content" />
			</view>
		</template>
		<!-- #endif -->	
		<!-- #ifndef VUE3 -->
		<!-- 微信小程序在vue2删除会闪 IOS不能动态offset -->
		<block v-for="item in list" :key="item.id">
			<view 
				class="l-barrage-item" 
				v-if="item && !item.style['--l-barrage-offset']" 
				:id="item.id">
				<slot :content="item.content" />
			</view>
			<view
				class="l-barrage-item" 
				v-if="item && item.style['--l-barrage-offset']" 
				:id="item.id"
				:count="item.count"
				:style="[item.style]"
				@animationend="animationend(item)"
				@animationstart="animationstart(item)"
				@touchcancel="touchend(item)"
				@touchstart="touchstart(item)"
				@touchend="touchend(item)">
				<slot :content="item.content" />
			</view>
		</block>
		<!-- #endif -->	
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	import { defineComponent, onMounted, getCurrentInstance, watch, reactive, onBeforeUnmount, ref } from '@/uni_modules/lime-shared/vue';
	import BarrageProps from './props';
	import { Barrage } from './barrage';
	import { getRect } from '@/uni_modules/lime-shared/getRect';
	const PLAY_STATE = '--l-barrage-play-state'
	const LOOP_COUNT = '--l-barrage-loop-count'
	const ANI_STATE = 'animation-play-state'
	// const OFFSET = '--l-barrage-offset'
	// const TIME = '--l-barrage-time'
	
	export default defineComponent({
		props: BarrageProps,
		emits: ['end', 'progress'],
		setup(props, {emit}) {
			const app = getCurrentInstance()
			let barrage = null
			const styles = reactive({[PLAY_STATE]:'running', [LOOP_COUNT]: props.loopCount})
			const touchend = (item: any) => {
				if(props.touchPause) {
					item.style[ANI_STATE] = ''
				}
			}
			const touchstart = (item: any) => {
				if(props.touchPause) {
					item.style[ANI_STATE] = 'paused'
					item.style['z-index'] = '1'
				}
			}
			const animationstart = (item: any) => {
				if(!item) return
				item.time = +new Date()
			}
			let timer = null
			const animationend = (item: any) => {
				if(!item) return
				const endTime = +new Date() - item.time
				if(endTime > 100) {
					item.style.opacity = 0;
					clearTimeout(timer)
					timer = setTimeout(() => {
						let count = 0
						const flag = list.value.every((item) => {
							if(item.style && !item.style.opacity) {
								count++
								return !0
							}
							 return !1
						})
						emit('progress', count / props.data.length * 100)
						if(flag) {
							list.value = []
							emit('end')
						}
					}, 200)
				}
			}
			let stopWatchPause = null
			let stopWatchData = null
			let stopWatchArea = null
			let list = ref([])
			
			const append = (node: any) => {
				list.value.push(node)
			}
			onMounted(() => {
				getRect('.l-barrage', { context: app.proxy }).then(container => {
					if (container) {
						barrage = new Barrage({
							config: Object.assign({}, props) as any,
							container,
							reactive,
							getBoundingClientRect: (selector : string):Promise<any> => {
								return getRect('#'+selector, { context: app.proxy })
							}
						}, append)
						stopWatchPause = watch(() => props.pause, (v) => {
							if (v) {
								barrage.pause()
							} else {
								barrage.start()
							}
							styles[PLAY_STATE] = barrage.playState
						})
						let count = 0
						let isVue3 = true
						//#ifndef VUE3
						isVue3 = false
						// #endif
						stopWatchData = watch(isVue3 ? props.data : () => props.data, (v) => {
							if (barrage && v && v.length && v.length > count) {
								const bullets = v.slice(count, v.length)
								barrage.setBullet(bullets)
								count = v.length
							}
						}, {immediate: true})
						
						stopWatchArea = watch(()=> props.showArea, (v) => {
							barrage.showTracks(v)
						})
						
					}
				})
			})
			onBeforeUnmount(() => {
				stopWatchPause && stopWatchPause()
				stopWatchData && stopWatchData()
				stopWatchArea && stopWatchArea()
				barrage && (barrage = null)
			})
			return {
				styles,
				touchend,
				touchstart,
				animationend,
				animationstart,
				props,
				list
			}
		}
	})
</script>
<style lang="scss">
	$playState: var(--l-barrage-play-state);
	$time: var(--l-barrage-time);
	$offset: var(--l-barrage-offset);
	$loopCount: var(--l-barrage-loop-count, 1);
	.l-barrage {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;

		&-item {
			position: absolute;
			display: inline-block;
			height: 20px;
			top: 0;
			left: 100%;
			white-space: nowrap;
			animation-name: barrageMove;
			animation-timing-function: linear;
			animation-play-state: $playState;
			animation-duration: $time;
			animation-iteration-count: $loopCount;
			display: inline-block;
		}

		// &.l-is-touch {
		// 	.l-barrage-item:hover {
		// 		cursor: pointer;
		// 		animation-play-state: paused;
		// 		z-index: 1;
		// 	}
		// }
	}

	@keyframes barrageMove {
		to {
			transform: translateX($offset);
		}
	}
</style>