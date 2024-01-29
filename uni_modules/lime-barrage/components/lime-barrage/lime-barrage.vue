<template>
	<demo-block title="弹幕">
		<view class="barrage">
			<l-barrage 
				:data="barrageData" 
				:pause="pause" 
				:trackHeight="36" 
				:showArea="showArea"
				@progress="progress"
				touchPause >
				<template #default="{content}">
					<view class="bullet">{{content.text}}</view>
				</template>
			</l-barrage>
		</view>
		<view class="inputs">
			<input v-model="value" confirm-type="send"  @confirm="onFire"/>
			<button @click="onFire">发射</button>
		</view>
		<view class="buttons">
			<button @click="onPause">{{!pause ? '暂停': '播放'}}</button>
			<button @click="onShowArea('all')">all</button>
			<button @click="onShowArea('top')">top</button>
			<button @click="onShowArea('middle')">middle</button>
			<button @click="onShowArea('bottom')">bottom</button>
		</view>
	</demo-block>
</template>
<script>
	import {onMounted,ref,watch, defineComponent} from '@/uni_modules/lime-shared/vue';
	export default defineComponent({
		setup() {
			const value = ref('')
			const showArea = ref('all')
			const pause = ref(false)
			const barrageData = ref([])
			const onFire = () => {
				if (value.value) {
					barrageData.value.push({
						text: value.value
					})
					value.value = ''
				}
			}
			const onPause = () => {
				pause.value = !pause.value
			}
			const onShowArea = (type) => {
				showArea.value = type
			}
			const createBarrageData = () => {
				const data = []
				for (let i = 0; i < 50; i++) {
					const random = Math.floor(Math.random() * 10)
					data.push({
						text: `${new Array(random).fill('~').join('🤩')}我是测试弹幕 🥰`
					})
				}
				barrageData.value.push(...data)
			}
			let count = 0
			const progress = (v) => {
				console.log('progress', v, count)
				if(v > 85 && count < 5) {
					count++
					createBarrageData()
				}
			}
			onMounted(createBarrageData)
			
			return {
				value,
				showArea,
				pause,
				barrageData,
				onFire,
				onPause,
				onShowArea,
				progress
			}
		}
	})
	
</script>
<style lang="scss">
	.barrage {
		background-color: rgba(0, 139, 139, 0.14);
		height: 550rpx;
		margin-bottom: 2px;
	}
	.inputs {
		display: flex;
		align-items: center;
		padding: 10px;
		background-color: rgba(0, 139, 139, 0.54);

		input {
			flex: 1;
			margin-right: 5px;
			padding: 10px;
			background-color: #fff;
		}
	}
	.buttons {
		display: flex;
		button {
			font-size: 32rpx;
		}
	}
	.bullet {
		background-color: rgba(0, 0, 0, 60%);
		padding: 5px 8px;
		color: #fff;
		border-radius: 999px;
	}
</style>