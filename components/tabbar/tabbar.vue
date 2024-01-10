<template>
	<view class="content" >
		<u-tabbar :value="currentTab" :placeholder="false" :safeAreaInsetBottom="true" class="tab-bar"
			activeColor="#55aaff" :border="false" >
			<u-tabbar-item @click="click1(item)" v-for="(item,index) in switchTab">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" :src="'/static/tabbar/' + getPath(item) + '_act.svg'"></image>
					<text class="active-text">{{item.name}}</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon" :src="'/static/tabbar/' + getPath(item) + '_in.svg'"></image>
					<text class="inactive-text">{{item.name}}</text>
				</div>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	import {
		getNavList
	} from '@/api/nav.js'
	export default {
		name: 'tabbar',
		props: ['currentTab'],
		data() {
			return {
				title: 'Hello',
				value1: 0,
				switchTab: []
			}
		},
		mounted() {
			this.getTabbarList()
		},
		methods: {
			click1(params) {
				uni.switchTab({
					url: '/' + params.link
				})
			},
			getTabbarList() {
				getNavList().then(res => {
					this.switchTab = res
				})
			},
			getPath(params){
				const segments = params.link.split('/');
				
				// 获取最后一个字段
				const lastSegment = segments[segments.length - 1];
				return lastSegment
			},
			
		}
	}
</script>

<style>
	.u-page__item__slot-icon {
		width: 60rpx;
	}

	.tabbar-icon {
		height: 100rpx;
		font-size: 24rpx;
		align-items: center;
	}

	.active-text {
		color: #FACC15
	}

	.inactive-text {
		color: #C7C7CC;
	}
</style>