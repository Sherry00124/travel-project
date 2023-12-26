<template>
	<view class="">
		<view class="container"></view>
		<view class="shop flex-column">
			<view class="shop-top">
				<u-grid :border="false" col="5">
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex"
						@click="chooseType(baseListItem)">
						<u-icon :customStyle="{marginBottom:5+'rpx'}" :name="baseListItem.icon" :size="25"></u-icon>
						<text class="grid-text">{{baseListItem.name}}</text>
					</u-grid-item>
				</u-grid>
			</view>
			<view class="shop-body">
				<scroll-view scroll-y="true" class="scroll-view" @scrolltolower="touchBottom">
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
		</view>
		<firstAid />
		<tabbar :currentTab='0' />
		<ICP />
	</view>
</template>

<script>
	import {
		getShopList
	} from '@/api/shop.js'
	import {
		getNav
	} from '@/api/nav.js'
	export default {
		data() {
			return {
				baseList: [],
				list: [],
				pageNum: 1,
				totalPage: 2,
				pageSize: 10,
				type_id: 1
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
					this.getShopList()
				}
			},
			getShopList() {
				let page = {
					page: this.pageNum,
					perPage: this.pageSize,
					type_id: this.type_id
				}
				getShopList(page).then(res => {
					this.list = res.list.data
				})
			},
			getNavList() {
				getNav().then(res => {
					this.baseList = res.data
					console.log(this.baseList)
				})
			}
		},
		mounted() {
			uni.hideTabBar()
			this.getShopList()
			this.getNavList()
			// uni.setNavigationBarTitle({
			// 	title: '首页',
			// 	success: () => {
			// 		console.log('修改标题成功')
			// 	},

			// })
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
		height: 70vh;
	}
</style>