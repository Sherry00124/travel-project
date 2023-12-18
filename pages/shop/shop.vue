<template>
	<view class="container ">
		<view class="shop flex-column">
			<u-navbar :title="title" @rightClick="rightClick" :autoBack="true" bgColor="transparent">
			</u-navbar>
			<view class="shop-body">
				<u-swiper :list="list" height="300" :autoplay="false">
			
				</u-swiper>
			
			</view>
			<view class="shop-details flex-column">
				<view class="shop-details-price flex-row">
					<text>￥</text>
					<text>{{minPrice}}</text>
					<text>-</text>
					<text>{{maxPrice}}</text>
				</view>
				<text class="shop-details-title">{{title}}</text>
				<view class="flex-row">
					<view class="shop-details-tags" v-for="(item,index) in tags">{{item}}</view>
				</view>
			</view>
			<view class="shop-date flex-column">
				<view class="flex-between">
					<view class="flex-row">
						<view class="" style="margin-right: 5rpx;">
							<u-icon name="/static/shop/location.svg" size="23"></u-icon>
						</view>
			
						<text>成都出发</text>
					</view>
					<text style="font-weight: 600;">更改出发地></text>
				</view>
				<view class="flex-between">
					<view class="shop-date-left flex-row">
						<view class="flex-column shop-date-item" v-for="(item,index) in dates">
							<text>{{item.week}}</text>
							<text>{{item.date}}</text>
							<view class="flex-row">
								<text style="
							color: #FF4747;
							font-size: 28rpx;">￥{{item.price}}</text>
								<text style="color:#8E8E93;
						font-size: 28rpx;">起</text>
							</view>
						</view>
					</view>
					<view class="flex-column shop-date-right">
						<u-icon name="/static/details/date.svg" size="23"></u-icon>
						<text>更多日期</text>
					</view>
				</view>
			
			
			</view>
			
		</view>
		<view class="shop-tabbar flex-row">
			<view class="shop-tabbar-icon flex-between">
				<u-icon name="/static/details/firstAid.svg" size="30"></u-icon>
				<u-icon name="/static/details/share.svg" size="30"></u-icon>
			</view>
			<button style="background-color: #FACC15;height: 80rpx;width: 60%;border-radius: 20rpx;border: none;">立即购买</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '[春节区期] 斯里兰卡全景6到0天跟团荡·拥子老/康提/南部海流/尼甘布(胎的江树林·海上火车+佛牙奇+加勒古堡+米内日亚公因)',
				list: [
					'/static/details/display.png',
					'/static/details/display.png',
					'/static/details/display.png',
				],
				minPrice: 4500,
				maxPrice: 17600,
				tags: ["行程可调", "性价比出众"],
				dates: [{
						week: "周一",
						date: "12-21",
						price: 4500
					},
					{
						week: "周一",
						date: "12-21",
						price: 4500
					},
					{
						week: "周一",
						date: "12-21",
						price: 4500
					}, {
						week: "周一",
						date: "12-21",
						price: 4500
					},
					{
						week: "周一",
						date: "12-21",
						price: 4500
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.shop {
		padding: 40rpx;

		&-body {
			margin-top: 100rpx;
			// width: 90%;

		}

		&-details {

			background-color: #ffffff;
			border-radius: 16rpx;
			margin-top: 30rpx;
			// width: 90%;
			padding: 16rpx;

			&-price {

				font-weight: bold;
				color: #FF4747;
				;
			}

			&-tags {
				margin-right: 8rpx;

				background: #F2F2F7;
				padding: 8rpx;
				font-size: 24rpx;
				margin-top: 16rpx;
				border-radius: 8rpx;
			}

			&-title {
				margin-top: 16rpx;

				font-weight: bold;
				font-size: 30rpx;
			}
		}

		&-date {
			background-color: #ffffff;
			border-radius: 16rpx;
			margin-top: 30rpx;
			// width: 90%;
			font-weight: bold;
			padding: 16rpx;

			&-left {
				width: 90%;
				overflow: hidden;
				margin: 30rpx 0;
				overflow-x: auto;
			}

			&-right {
				width: 8%;
				font-weight: 600;
				color: #2C2C2E;
				background-color: #fff;
				font-size: 20rpx;
				padding: 10rpx 0 10rpx 20rpx;
				// align-items: center;
				justify-content: center;
			}

			&-item {

				background: #F8F8F8;
				border-radius: 16rpx;
				margin-right: 10rpx;
				font-size: 24rpx;
				align-items: center;
				font-weight: 600;
				padding: 16rpx;
			}
		}
		&-tabbar{
			position: fixed;
			bottom: 0;
			height: 100rpx;
			width: 750rpx;
			background-color: #fff;
			padding: 0 40rpx;
			&-icon{
				width: 20%
			}
		}
	}

	.indicator {
		@include flex(row);
		justify-content: center;
		height: 670rpx;

		&__dot {
			height: 6px;
			width: 6px;
			border-radius: 100px;
			background-color: rgba(255, 255, 255, 0.35);
			margin: 0 5px;
			transition: background-color 0.3s;

			&--active {
				background-color: #ffffff;
			}
		}
	}
</style>