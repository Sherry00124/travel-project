<!-- <template>
	<view class="">
		<view class="container"></view>
		<view class="user flex-column">
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="user-item" v-for="(item,index) in list" @click="toOrderDetail">
					<view class="flex-between">
						<view class="user-item-order flex-row">
							<text>订单编号</text>
							<text>{{item.orderNo}}</text>
						</view>
						<text class="user-item-status">{{item.status}}</text>
					</view>
					<u-line></u-line>
					<view class="flex-column">
						<text class="user-item-title">{{item.title}}</text>
						<view class="flex-between" style="align-items: center;">
							<view class="user-item-date flex-row">
								<text>出行日期</text>
								<text>{{item.date}}</text>
							</view>
							<text class="user-item-price">￥{{item.price}}</text>
						</view>
					</view>
					<u-line></u-line>
					<view class="flex-row user-item-type">
						<u-icon name="/static/shop/customs.svg"></u-icon>
						<text>{{item.type}}</text>
					</view>
				</view>
			</scroll-view>

		</view>
		<firstAid />
		<tabbar :currentTab='2' />
		<ICP/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						orderNo: '1234567890',
						title: "[春节团期] 斯里兰卡全景6到9天跟团游·狮子岩/康提/南部海滨/尼甘布(船游红树林+海上火车+佛牙寺+加...",
						date: "2023-01-21",
						status: "进行中",
						price: 4500,
						type: "跟团游"
					},
					{
						orderNo: '1234567890',
						title: "[春节团期] 斯里兰卡全景6到9天跟团游·狮子岩/康提/南部海滨/尼甘布(船游红树林+海上火车+佛牙寺+加...",
						date: "2023-01-21",
						status: "进行中",
						price: 4500,
						type: "跟团游"
					},
					{
						orderNo: '1234567890',
						title: "[春节团期] 斯里兰卡全景6到9天跟团游·狮子岩/康提/南部海滨/尼甘布(船游红树林+海上火车+佛牙寺+加...",
						date: "2023-01-21",
						status: "进行中",
						price: 4500,
						type: "跟团游"
					},
					{
						orderNo: '1234567890',
						title: "[春节团期] 斯里兰卡全景6到9天跟团游·狮子岩/康提/南部海滨/尼甘布(船游红树林+海上火车+佛牙寺+加...",
						date: "2023-01-21",
						status: "进行中",
						price: 4500,
						type: "跟团游"
					},
				]
			}
		},
		methods: {
			toOrderDetail() {
				uni.navigateTo({
					url: '/pages/order/order-detail'
				})
			}
		},
		mounted() {
			uni.hideTabBar()
		}
	}
</script>

<style lang="scss">
	.user {
		padding: 40rpx;
		background-color: #F8F8F8;
		margin-bottom: 120rpx;

		&-item {
			background-color: #fff;
			border-radius: 16rpx;
			padding: 16rpx;
			margin-bottom: 20rpx;

			&-order {
				font-size: 26rpx;
				color: #8E8E93;
				margin-bottom: 16rpx;
			}

			&-status {
				font-size: 26rpx;

				color: #00C566;
			}

			&-type {
				margin: 16rpx 0;
				font-size: 26rpx;
				font-weight: 500;
			}

			&-date {
				font-weight: 500;
				font-size: 26rpx;
				margin: 20rpx 0;
				color: #8E8E93;
			}

			&-price {

				color: #FF4747;
				font-size: 20rpx;
				font-weight: bold;
			}

			&-title {
				font-size: 28rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				/* 限制显示的行数 */
				margin: 16rpx 0;

				font-weight: bold;
			}
		}
	}

	.scroll-view {
		height: 90vh;
	}
</style> -->

<template>
	<view class="">
		<view class="container"></view>
		<view class="shop flex-column">
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="flex-row shop-body-item" v-for="(item,index) in list" @click="toDetails(item.id)">
					<view class="shop-body-img">
						<img :src="item.images[0]" alt="" class="shop-body-item-img">
						<view class="shop-body-departures">
							{{item.diqu_tags}}
						</view>
						<view class="shop-body-tourType">{{item.type_tags}}</view>
					</view>
					<view class="flex-column">
						<text class="shop-body-item-title">{{item.name}}</text>
						<text class="shop-body-item-price">￥{{item.product_price}}起</text>
						<view class="shop-body-item-bottom">
							<view class="flex-between" style="width: 400rpx;">
								<view class="flex-row">
									<u-icon name="/static/shop/shop.svg" :size="18"></u-icon>
									<text class="shop-body-item-ins">{{item.title}}</text>
								</view>
								<view class="flex-row" style="font-size: 28rpx;">
									<text style="margin-right: 5rpx;">评分</text>
									<text class="shop-body-item-num">{{item.scores}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<firstAid />
		<tabbar :currentTab='tabIndex' />
		<ICP />
	</view>
</template>

<script>
	import {
		getShopList,shopNewList
	} from '@/api/shop.js'
	import {
		getNavList
	} from '@/api/nav.js'
	export default {
		data() {
			return {
				baseList: [],
				list: [],
				pageNum: 1,
				totalPage: 1,
				pageSize: 10,
				type_id: 1,
				tabIndex:2
			}
		},
		watch: {
			type_id(newValue, oldValue) {
				this.getShopList()
			}
		},
		methods: {
			chooseType(params) {
				this.type_id = params.id
			},
			toDetails(id) {
				uni.navigateTo({
					url: '/pages/shop/shop?id=' + id
				})
			},
			touchBottom() {
				if (this.pageNum >= this.totalPage) {
					uni.showToast({
						title: "没有更多",
						icon: 'none'
					})
				} else {
					this.pageNum++;
					uni.showLoading({
						mask: true,
						title: '刷新中'
					})
					this.getShopList()
				}
			},
			getShopList() {
				let page = {
					page: this.pageNum,
					perPage: this.pageSize,
				}
				shopNewList(page).then(res => {
					res.list.data.forEach(item=>{
						this.list.push(item)
					})
					uni.hideLoading()
					this.totalPage = res.list.last_page
				})
			},
			getNavList() {
				getNavList().then(res => {
					res.forEach((item, index) => {
						if (item.id === 3) {
							this.tabIndex = index // 如果你仍然想在找到后终止循环，可以在这里加上 return
						}
					});
				
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
				width: 100rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 1;
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
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 1;
			}

			&-item {
				background-color: #fff;
				// height: 228rpx;
				padding: 16rpx;
				margin-bottom: 28rpx;
				border-radius: 16rpx;

				&-price {
					color: #EC1C00;
					font-size: 30rpx;
					font-weight: 600;
				}

				&-img {
					border-radius: 16rpx 16rpx 16rpx 16rpx;
					width: 200rpx;
					height: 200rpx;
				}

				&-ins {
					color: #8E8E93;
					font-size: 28rpx;
				}

				&-title {
					font-size: 30rpx;
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
					font-size: 28rpx;
					color: #FACC15;
				}

				&-bottom {
					width: 100%;
					margin-top: 16rpx;
				}
			}
		}
	}

	.grid-text {
		font-size: 24rpx
	}

	.scroll-view {
		width: 100%;
		height: 90vh;
		margin-bottom: 120rpx;
	}
</style>