<template>
	<view class="content">
		<u-tabbar :value="currentTab" :placeholder="false" :safeAreaInsetBottom="true" class="tab-bar"
			activeColor="#55aaff" :border="false">
			<u-tabbar-item @click="click1">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/shop_act.svg"></image>
					<text class="active-text">商城</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon"  src="/static/tabbar/shop_in.svg"></image>
					<text class="inactive-text">商城</text>
				</div>
				
			</u-tabbar-item>
			<u-tabbar-item @click="click1">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/edit_act.svg"></image>
					<text class="active-text">攻略</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon"  src="/static/tabbar/edit_in.svg"></image>
					<text class="inactive-text">攻略</text>
				</div>
				
			</u-tabbar-item>
			<u-tabbar-item @click="click1">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/user_act.svg"></image>
					<text class="active-text">我的</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon"  src="/static/tabbar/user_in.svg"></image>
					<text class="inactive-text">我的</text>
				</div>
				
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		name:'tabbar',
		props:['currentTab'],
		data() {
			return {
				title: 'Hello',
				value1: 0,
				switchTab: [
					"/pages/index/shop",
					"/pages/index/guide",
					"/pages/index/user",
				]
			}
		},
		onLoad() {

		},
		methods: {
			click1(e) {
				uni.switchTab({
					url: this.switchTab[e]
				})

			}
		}
	}
</script>

<style>
	.u-page__item__slot-icon {
		width: 60rpx;
	}
	.tabbar-icon{
		height: 100rpx;
		font-size: 24rpx;
		align-items: center;
	}
	.active-text{
		color:#FACC15
	}
	.inactive-text{
		color: #C7C7CC;
	}

</style>