<template>
	<view class=" ">
		<view class="container"></view>
		<view class="shop flex-column">
			<view class="navbar-bg" >
				<u-navbar :title="title" :autoBack="true" @leftClick="leftClick" bgColor="transparent">
				</u-navbar>
			</view>
			<view class="shop-body">
				<u-swiper :list="list" height="300" :autoplay="true" :indicator="true" indicatorMode="dot">
				</u-swiper>
			</view>
			<view class="shop-details flex-column">
				<view class="shop-details-price flex-row">
					<text>￥</text>
					<text>{{minPrice}}</text>
					<!-- <text>-</text> -->
					<!-- <text>{{maxPrice}}</text> -->
				</view>
				<text class="shop-details-title">{{title}}</text>
				<view class="flex-row">
					<view class="shop-details-tags" v-for="(item,index) in tags">{{item}}</view>
					<!-- <view class="shop-details-tags">{{tags}}</view> -->
				</view>
			</view>
			<!-- <view class="shop-date flex-column">
				<view class="flex-between">
					<view class="flex-row">
						<view class="" style="margin-right: 5rpx;">
							<u-icon name="/static/shop/location.svg" size="23"></u-icon>
						</view>
						<text>{{info.diqu_tags}}</text>
					</view>
					<text style="font-weight: 500;" @click="toCalendar">更改出发地></text>
				</view>
				<view class="flex-between">
					<view class="shop-date-left flex-row">
						<view class="flex-column shop-date-item" v-for="(item,index) in dates" @click="chooseDate(item)">
							<text>{{item.week}}</text>
							<text>{{item.date}}</text>
							<view class="flex-row">
								<text style="
							color: #FF4747;
							font-size: 28rpx;">￥{{minPrice}}</text>
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
			</view> -->
			<view class="shop-content">
				<view class="">产品详情</view>
				<view class="shop-content-body">
					<u-parse :content="content"></u-parse>
				</view>
			</view>
		</view>
		<view class="shop-tabbar flex-row">
			<view class="shop-tabbar-icon flex-between">
				<u-icon name="/static/details/firstAid.svg" size="30" @click="show=true"></u-icon>
				<u-icon name="/static/details/share.svg" size="30"></u-icon>
			</view>
			<button class="shop-tabbar-button" @click="buyNow">立即预约</button>
		</view>
		<qrCode :show="show" @close="close"/>
	</view>
</template>

<script>
	import {shopDetail} from '@/api/shop.js'
	export default {
		data() {
			return {
				title: '',
				list: [],
				minPrice: 4500,
				maxPrice: 17600,
				tags: [],
				content: "",
				info:{},
				show:false,
				bgColor: 'linear-gradient(to right, #FCE2CB, #FED772)'
			}
		},
		methods: {
			buyNow() {
				// uni.navigateTo({
				// 	url: '/pages/date/date'
				// })
				this.show = true
			},
			close(){
				this.show = false
			},
			leftClick(){
				uni.switchTab({
					url:'/pages/index/shop'
				})
			},
			toCalendar(){
				uni.navigateTo({
					url: '/pages/date/date?price='+this.minPrice+'&title='+this.title
				})
			},
			getShopDetail(id){
				shopDetail(id).then(res=>{
					this.list = res.data.images
					this.title = res.data.name
					this.content = res.data.content
					this.minPrice = res.data.product_price
					this.tags = res.data.intro.split('\n');
					this.info = res.data
				})
			},
			generateWeekDates() {
			  const today = new Date();
			  const weekDates = [];
			
			  // 生成当前日期及其后一周的日期
			  for (let i = 0; i < 7; i++) {
			    const date = new Date(today);
			    date.setDate(today.getDate() + i);
			
			    const weekDay = this.getWeekday(date.getDay());
			    const formattedDate = this.formatDate(date);
			
			    const dayInfo = {
			      week: weekDay,
			      date: formattedDate,
			      price: this.minPrice,
				  year: date.getFullYear(),
			    };
			    weekDates.push(dayInfo);
			  }
			
			  return weekDates;
			},
			getWeekday(dayNumber) {
			  const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
			  return weekdays[dayNumber];
			},
			formatDate(date) {
			  const month = (date.getMonth() + 1).toString().padStart(2, '0');
			  const day = date.getDate().toString().padStart(2, '0');
			  return `${month}-${day}`;
			},
			chooseDate(params){
				uni.navigateTo({
					url:'/pages/date/date?price='+this.minPrice+'&title='+this.title+'&dayInfo='+JSON.stringify(params)
				})
			}
		},
		computed:{
			dates(){
				return this.generateWeekDates()
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
		// width: 710rpx;
		overflow-x: hidden; /* 禁止左右滚动 */
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
			&-body{
				font-weight: 500;
				width: 88%;
			}
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