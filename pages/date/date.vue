<template>
	<view>
		<u-navbar :title="title" :autoBack="true"></u-navbar>
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
					<uni-calendar :insert="true" :lunar="false" @change="change" ref="calender" />
				</view>
			</view>
			<view class="date-packages">
				<text class="date-title">套餐</text>
				<view class="flex-row" style="margin-top: 16rpx;">
					<view class="date-packages-item" v-for="(item,index) in packages">
						<u-tag :text="item.name" :type="item.ifChoose?'warning':'info'" plain plainFill
							:color="item.ifChoose?'#FACC15':'#2C2C2E'" :borderColor="item.ifChoose?'#FACC15':'#2C2C2E'"
							@click="choosePackage(item)"></u-tag>
					</view>
				</view>
			</view>
			<view class="flex-column" style="margin-top: 16rpx;margin-bottom: 150rpx;">
				<text class="date-title">数量</text>
				<view class="flex-between" style="margin-top: 16rpx;font-size: 28rpx;">
					<view class="flex-row">
						<text>成人</text>
						<text style="color: #FF4747;">￥{{price.adultPrice}}</text>
					</view>
					<u-number-box v-model="adultNum" min="0">
						<view slot="minus" class="minus">
							<u-icon name="minus-circle" size="25" :color="adultNum>0?'#FACC15':'#E9EBED'"></u-icon>
						</view>
						<text slot="input" style="width: 50rpx;text-align: center;" class="input">{{adultNum}}</text>
						<view slot="plus" class="plus">
							<u-icon name="plus-circle" color="#FACC15" size="25"></u-icon>
						</view>
					</u-number-box>
				</view>
				<view class="flex-between" style="margin-top: 16rpx;">
					<view class="flex-row">
						<text>儿童</text>
						<text style="color: #FF4747;">￥{{price.childPrice}}</text>
					</view>
					<u-number-box v-model="childNum" min="0">
						<view slot="minus" class="minus">
							<u-icon name="minus-circle" size="25" :color="childNum>1?'#FACC15':'#E9EBED'"></u-icon>
						</view>
						<text slot="input" style="width: 50rpx;text-align: center;" class="input">{{childNum}}</text>
						<view slot="plus" class="plus">
							<u-icon name="plus-circle" color="#FACC15" size="25"></u-icon>
						</view>
					</u-number-box>
				</view>
			</view>
		</view>
		<view class="date-tabbar flex-between">
			<view class="date-tabbar-text flex-column">
				<text>共{{adultNum+childNum}}人</text>
				<view class="flex-row" style="margin-top: 12rpx;">
					<text>总计</text>
					<text
						style="color: #FF4747;margin-right: 10rpx;">￥{{price.childPrice*childNum+price.adultPrice*adultNum}}</text>
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
				adultNum: 0,
				childNum: 0,
				price: {
					childPrice: 2500,
					adultPrice: 4500
				},
				tabbar: {
					total: 0,
					price: 0,
				},
				packages: [{
					name: '成都直飞',
					ifChoose: true,
				}, {
					name: '厦门直飞',
					ifChoose: false,
				}],
				location:'成都',
				dayList: [{
						year: 2023,
						month: '12',
						price: '2000',
						disabled: false,
						ifChoose: true
					}, {
						year: 2024,
						month: '01',
						price: '2000',
						disabled: false,
						ifChoose: false
					}, {
						year: 2024,
						month: '02',
						price: '2000',
						disabled: false,
						ifChoose: false
					}, {
						year: 2024,
						month: '03',
						price: '2000',
						disabled: true,
						ifChoose: false
					}, {
						year: 2024,
						month: '04',
						price: '2000',
						disabled: false,
						ifChoose: false
					}, {
						year: 2024,
						month: '05',
						price: '2000',
						disabled: false,
						ifChoose: false
					},
					{
						year: 2024,
						month: '06',
						price: '2000',
						disabled: false,
						ifChoose: false
					}
				],
				value: 1,
				chooseDate:''
			};
		},
		mounted(){
			var today = new Date();
			var year = today.getFullYear();
			var month = today.getMonth() + 1; 
			var day = today.getDate();
			this.chooseDate=year+'-'+month+'-'+day
		},
		methods: {
			change(params) {
				this.chooseDate = params.fulldate
			},
			chooseMonth(item) {
				if (!item.disabled) {
					this.dayList.forEach(date => {
						date.ifChoose = false
					})
					item.ifChoose = true
					this.$refs.calender.monthSwitch(item.year, item.month)
				}
			},
			choosePackage(item) {
				this.packages.forEach(item => {
					item.ifChoose = false
				})
				item.ifChoose = true
			},
			buyNow() {
				if(this.adultNum+this.childNum>0){
					let travelMode = ''
					this.packages.forEach((item)=>{
						if(item.ifChoose){
							travelMode = item.name
						}
					})
					let orderInfo = {
						total:this.price.childPrice*this.childNum+this.price.adultPrice*this.adultNum,
						adultNum:this.adultNum,
						childNum:this.childNum,
						title:this.title,
						date:this.chooseDate,
						travelMode:travelMode,
						location:this.location
					}
					uni.navigateTo({
						url: '/pages/order/order-confirm?orderInfo='+JSON.stringify(orderInfo)
					})
				}else{
					uni.showToast({
						title:"请添加出行人数",
						icon:'none'
					})
				}
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

		&-packages {
			&-item {
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