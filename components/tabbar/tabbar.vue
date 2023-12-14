<template>
	<view class="content">
		<u-tabbar :value="currentTab" :placeholder="false" :safeAreaInsetBottom="true" class="tab-bar"
			activeColor="#55aaff">
			<u-tabbar-item @click="click1">
				<div class="tabbar-icon" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/shop_act.svg"></image>
				</div>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/tabbar/shop_in.svg"></image>
			</u-tabbar-item>
			<u-tabbar-item @click="click1">
				<div class="tabbar-icon" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/edit_act.svg"></image>
				</div>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/tabbar/edit_in.svg"></image>
			</u-tabbar-item>
			<u-tabbar-item @click="click1">
				<div class="tabbar-icon" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/user_act.svg"></image>
				</div>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/tabbar/user_in.svg"></image>
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
</style>