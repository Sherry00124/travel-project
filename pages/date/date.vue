<template>
	<view>
		<u-navbar :title="title" :autoBack="true" bgColor="transparent"></u-navbar>
		<view class="date">
			<view class="date-top flex-column">
				<text class="date-title">日期选择</text>
				<view class="date-top-tabs flex-row">
					<view
						:class="{ 'flex-column': true,'date-top-tabs-item':true ,'selected': item.ifChoose,'disabled':item.disabled }"
						v-for="(item,index) in dayList" @click="chooseMonth(item)">
						<text class="date-top-tabs-item-month">{{item.month}}月</text>
						<view class="date-top-tabs-item-price flex-row">
							<text>￥</text>
							<text>{{item.price}}</text>
							<text>起</text>
						</view>
						<view class="line-y" v-show="item.ifChoose"></view>
					</view>
				</view>
				<view style="width: 750rpx;margin-left: -40rpx;margin-top: 16rpx;">
					<uni-calendar :insert="true" :lunar="false" @change="change" />
				</view>
			</view>
			<view class="date-packages">
				<text class="date-title">套餐</text>
				<view class="flex-row" style="margin-top: 16rpx;">
					<view class="date-packages-item" v-for="(item,index) in packages" >
						<u-tag :text="item.name" :type="item.ifChoose?'warning':'info'" plain plainFill :color="item.ifChoose?'#FACC15':'#2C2C2E'" :borderColor="item.ifChoose?'#FACC15':'#2C2C2E'" @click="choosePackage(item)"></u-tag>
					</view>
				</view>
			</view>
			<view class="" style="margin-top: 16rpx;">
				<text class="date-title">数量</text>
			</view>
		</view>
		<view class="date-tabbar flex-between">
			<view class="date-tabbar-text flex-column">
				<text>共{{tabbar.total}}人</text>
				<view class="flex-row" style="margin-top: 12rpx;">
					<text>总计</text>
					<text style="color: #FF4747;margin-right: 10rpx;">￥{{tabbar.price}}</text>
				</view>
			</view>
			<button class="date-tabbar-button" @click="buyNow">立即购买</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '[春节区期] 斯里兰卡全景6到0天跟团荡·拥子老/康提/南部海流/尼甘布(胎的江树林·海上火车+佛牙奇+加勒古堡+米内日亚公因)',
				info: {
					lunar: true,
					range: true,
					insert: false,
					selected: [],
				},
				tabbar: {
					total: 2,
					price: 6500,
				},
				packages: [
				{
					name: '成都直飞',
					ifChoose:true,
				}, {
					name: '厦门直飞',
					ifChoose:false,
				}],
				dayList: [{
						month: '12',
						price: '2000',
						disabled: false,
						ifChoose: true
					}, {
						month: '01',
						price: '2000',
						disabled: false,
						ifChoose: false
					}, {
						month: '02',
						price: '2000',
						disabled: false,
						ifChoose: false
					}, {
						month: '03',
						price: '2000',
						disabled: true,
						ifChoose: false
					}, {
						month: '04',
						price: '2000',
						disabled: false,
						ifChoose: false
					}, {
						month: '05',
						price: '2000',
						disabled: false,
						ifChoose: false
					},
					{
						month: '06',
						price: '2000',
						disabled: false,
						ifChoose: false
					}
				]
			};
		},
		methods: {
			change() {

			},
			chooseMonth(item) {
				if (!item.disabled) {
					this.dayList.forEach(date => {
						date.ifChoose = false
					})
					item.ifChoose = true
				}
			},
			choosePackage(item) {
				this.packages.forEach(item=>{
					item.ifChoose = false
				})
				item.ifChoose = true
			},
			buyNow(){
				uni.navigateTo({
					url:'/pages/order/order-confirm'
				})
			}
		}
	}
</script>

<style lang="scss">
	.date {
		padding: 40rpx;
		background-color: #fff;

		&-title {
			font-size: 30rpx;
			font-weight: bold;
		}

		&-top {
			margin-top: 80rpx;
			position: relative;
			z-index: 1;
			font-size: 30rpx;

			&-tabs {
				width: 98%;
				margin-top: 16rpx;
				overflow: hidden;
				overflow-x: auto;

				&-item {
					font-size: 24rpx;
					align-items: center;
					margin-right: 25rpx;

					&-month {
						font-size: 28rpx;
						font-weight: bold;
					}

					&-price {
						margin-top: 16rpx;
					}
				}
			}
		}
		&-packages{
			&-item{
				margin-right: 16rpx;
			}
		}
		&-tabbar {
			position: fixed;
			bottom: 0;
			height: 120rpx;
			width: 750rpx;
			background-color: #fff;
			padding: 0 40rpx;

			&-text {
				font-size: 26rpx;
				font-weight: 600;
				color: #2C2C2E;
				line-height: 26rpx;
				margin-top: 40rpx;
				width: 40%;
			}

			&-button {
				background-color: #FACC15;
				height: 80rpx;
				width: 40%;
				border-radius: 20rpx;
				margin-top: 20rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: #1C1C1E;
			}
		}
	}

	.line-y {
		height: 2rpx;
		width: 100%;
		background-color: #FACC15;
		margin-top: 16rpx;
	}

	.selected {
		color: #FACC15;
	}

	.disabled {
		color: #C7C7CC;
	}
</style>