<template>
	<view class=" ">
		<view class="container"></view>
		<view class="shop flex-column">
			<u-navbar :title="title" :autoBack="true" bgColor="transparent">
			</u-navbar>
			<view class="shop-body">
				<u-swiper :list="list" height="300" :autoplay="true" :indicator="true" indicatorMode="dot">
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
					<text style="font-weight: 500;" @click="toCalendar">更改出发地></text>
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
					<view class="flex-column shop-date-right" @click="toCalendar">
						<u-icon name="/static/details/date.svg" size="23"></u-icon>
						<text>更多日期</text>
					</view>
				</view>


			</view>
			<view class="shop-content">
				<view class="">产品详情</view>
				<u-parse :content="content"></u-parse>
			</view>
		</view>
		<view class="shop-tabbar flex-row">
			<view class="shop-tabbar-icon flex-between">
				<u-icon name="/static/details/firstAid.svg" size="30"></u-icon>
				<u-icon name="/static/details/share.svg" size="30"></u-icon>
			</view>
			<button class="shop-tabbar-button" @click="buyNow">立即预约</button>
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
				],
				content: "<div>1、私家小团，升级服务，1单1团，专车专导，微信管家服务。2、鼓浪屿特别体验1晚地标住宿，更多时间留给您，留给鼓浪屿，Feeling倍儿爽3、行程涵盖福建全线精华景点，一次出游，不留任何遗憾，无购物无自费4、走法设计舒适合理，符合人体运动技能，深度畅玩福建，拒绝常规旅游弊病“走马观花旅游模式</div>"
			}
		},
		methods: {
			buyNow() {
				uni.navigateTo({
					url: '/pages/date/date'
				})
			},
			toCalendar(){
				uni.navigateTo({
					url: '/pages/date/date'
				})
			},
			getShopDetail(id){
				shopDetail(id).then(res=>{
					console.log(res)
				})
			}
		},
		onLoad(option) {
			this.getShopDetail(option.id)
		}
	}
</script>

<style lang="scss">
	.shop {
		padding: 40rpx;
		background-color: #F8F8F8;

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

		&-content {
			background-color: #fff;
			border-radius: 16rpx;
			height: 200rpx;
			margin-top: 30rpx;
			font-weight: bold;
			font-size: 30rpx;
			padding: 40rpx;
			width: 750rpx;
			margin-left: -40rpx;
		}

		&-date {
			background-color: #ffffff;
			border-radius: 16rpx;
			margin-top: 30rpx;
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

		&-tabbar {
			position: fixed;
			bottom: 0;
			height: 120rpx;
			width: 750rpx;
			background-color: #fff;
			padding: 0 40rpx;

			&-icon {
				width: 20%
			}

			&-button {
				background-color: #FACC15;
				height: 90rpx;
				width: 60%;
				margin-top: 15rpx;
				border-radius: 20rpx;
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