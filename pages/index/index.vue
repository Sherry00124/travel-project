<template>
	<view class="content">
		
		<u-tabbar :value="value1" @change="change1" :fixed="false" :placeholder="false" :safeAreaInsetBottom="true"
			class="tab-bar" activeColor="#55aaff">
			<u-tabbar-item @click="click12">
				<div class="tabbar-icon" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/shop.svg"></image>
				</div>
				<!-- <u-icon slot="inactive-icon" name="home" size="35"></u-icon> -->
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/tabbar/in_home.svg"></image>
			</u-tabbar-item>
			<u-tabbar-item @click="click12">
				<div class="tabbar-icon" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/ac_transfer.svg"></image>
				</div>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/tabbar/in_transfer.svg"></image>
			</u-tabbar-item>
			<u-tabbar-item @click="click12">
				<div class="tabbar-icon" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/ac_gift.svg"></image>
				</div>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/tabbar/in_gift.svg"></image>
			</u-tabbar-item>
			<u-tabbar-item @click="click12" class="mine">
				<div class="tabbar-icon" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/ac_mine.svg"></image>
				</div>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/tabbar/in_mine.svg"></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
