<template>
	<view class="">
		<view class="container"></view>
		<view class="shop flex-column">
			<view class="shop-top">
				<u-grid :border="false" @click="chooseType" col="5">
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<u-icon :customStyle="{marginBottom:5+'rpx'}" :name="baseListItem.name" :size="25"></u-icon>
						<text class="grid-text">{{baseListItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
			<view class="shop-body">
				<scroll-view scroll-y="true" class="scroll-view" @scrolltolower="touchBottom">
					<view class="flex-row shop-body-item" v-for="(item,index) in list" @click="toDetails(item.id)">
						<view class="shop-body-img">
							<img :src="item.images" alt="" class="shop-body-item-img">
							<view class="shop-body-departures">
								成都直飞
							</view>
							<view class="shop-body-tourType">出境跟团游</view>
						</view>
						<view class="flex-column">
							<text class="shop-body-item-title">{{item.name}}</text>
							<text class="shop-body-item-price">￥{{item.product_price}}起</text>
							<view class="flex-between shop-body-item-bottom">
								<view class="flex-row">
									<u-icon name="/static/shop/shop.svg" :size="16"></u-icon>
									<text class="shop-body-item-ins">世界风情假期</text>
								</view>
								<view class="flex-row" style="font-size: 24rpx;margin-left: 50rpx;">
									<!-- <text class="shop-body-item-n'um">{{item.scores}}</text> -->
									<text style="margin-right: 5rpx;">评分</text>
									<text class="shop-body-item-num">{{item.scores}}</text>
									<!-- <text>已售</text> -->
								</view>
							</view>

						</view>

					</view>
				</scroll-view>
			</view>
		</view>
		<firstAid />
		<tabbar :currentTab='0' />
		<ICP/>
	</view>
</template>

<script>
	import {getShopList} from '@/api/shop.js'
	import {getNav}from '@/api/nav.js'
	export default {
		data() {
			return {
				baseList: [{
						name: '/static/shop/ticket.svg',
						title: '门票'

					},
					{
						name: '/static/shop/current.svg',
						title: '当前游'
					},
					{
						name: '/static/shop/hotel.svg',
						title: '旅店'
					},
					{
						name: '/static/shop/customs.svg',
						title: '跟团游'
					},
					{
						name: '/static/shop/free.svg',
						title: '自由行'

					},
				],
				list: [],
				pageNum:1,
				totalPage:2,
				pageSize:10,
				type_id:1
			}
		},
		methods: {
			chooseType() {

			},
			toDetails(id) {
				uni.navigateTo({
					url: '/pages/shop/shop?id='+id
				})
			},
			touchBottom(){
				if (this.pageNum >= this.totalPage) {
					uni.showToast({
						title:"没有更多",
						icon:'none'
					})
				} else {
					this.getShopList()
				}
			},
			getShopList(){
				let page = {
					page:this.pageNum,
					perPage:this.pageSize,
					type_id:this.type_id
				}
				getShopList(page).then(res=>{
					this.list  = res.list.data
				})
			},
			getNavList(){
				getNav().then(res=>{
					console.log(res)
					// this.baseList = res
				})
			}
		},
		mounted() {
			uni.hideTabBar()
			this.getShopList()
			this.getNavList()
		}
	}
</script>

<style lang="scss">
	.shop {
		padding: 40rpx;
		align-items: center;
		background-color: #F8F8F8;

		&-top {
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			padding: 38rpx 46rpx;
			width: 88%;
			background-color: #fff;
			z-index: 2;
		}

		&-body {
			margin-top: 28rpx;
			width: 100%;
			&-img {
				position: relative;
				border-radius: 16rpx 16rpx 16rpx 16rpx;
				
				margin-right: 20rpx;
			}
			&-departures {
				position: absolute;
				top: 0;
				left: 0;
				background: rgba(0, 0, 0, 0.5);
				border-radius: 16rpx 0rpx 16rpx 0rpx;
				color: #fff;
				font-size: 22rpx;
				padding: 8rpx;
			}

			&-tourType {
				position: absolute;
				bottom: 5rpx;
				background: rgba(0, 0, 0, 0.5);
				border-radius: 0rpx 0rpx 16rpx 16rpx;
				color: #fff;
				width: 100%;
				font-size: 22rpx;
				padding: 8rpx 0;
				text-align: center;
			}

			&-item {
				background-color: #fff;
				// height: 228rpx;
				padding: 16rpx;
				margin-bottom: 28rpx;
				border-radius: 16rpx;

				&-price {
					color: #EC1C00;
					font-size: 25rpx;
					font-weight: 600;
				}

				&-img {
					border-radius: 16rpx 16rpx 16rpx 16rpx;
					width: 200rpx;
					height: 200rpx;
				}

				&-ins {
					color: #8E8E93;
					font-size: 24rpx;
				}

				&-title {
					font-size: 26rpx;
					color: #212936;
					font-weight: bold;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
					-webkit-line-clamp: 2;
					/* 限制显示的行数 */
					margin: 16rpx 0;
				}

				&-num {
					font-size: 24rpx;
					color: #FACC15;
				}

				&-bottom {
					margin-top: 16rpx;
				}
			}
		}
	}

	.grid-text {
		font-size: 24rpx
	}

	.scroll-view {
		height: 70vh;
	}
</style>