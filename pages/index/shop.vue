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
				<scroll-view scroll-y="true" class="scroll-view">
					<view class="flex-row shop-body-item" v-for="(item,index) in list" @click="toDetails">
						<img :src="item.src" alt="" width="100rpx" class=" shop-body-item-img">
						<view class="flex-column">
							<text class="shop-body-item-title">{{item.title}}</text>
							<text class="shop-body-item-price">￥<text
									style="font-size: 24rpx;">{{item.price}}</text>起</text>
							<view class="flex-between shop-body-item-bottom">
								<view class="flex-row">
									<u-icon name="/static/shop/shop.svg" :size="16"></u-icon>
									<text class="shop-body-item-ins">{{item.institute}}</text>
								</view>
								<view class="flex-row" style="font-size: 24rpx;">
									<text class="shop-body-item-num">{{item.comments}}</text>
									评价
									<text class="shop-body-item-num">{{item.sold}}</text>
									已售
								</view>
							</view>

						</view>

					</view>
				</scroll-view>
			</view>
		</view>
		<firstAid />
		<tabbar :currentTab='0' />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseList: [{
						name: '/static/shop/ticket.svg',
						title: '门票',


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
				list: [{
					src: '/static/edit/pic.svg',
					title: '【春节旅游】斯里兰卡全景6-9天跟团游·狮子岩/康提/南部海域等10个...',
					institute: '世界风情假期',
					price: '2500',
					comments: 23,
					sold: 12

				}, {
					src: '/static/edit/pic.svg',
					title: '【春节旅游】斯里兰卡全景6-9天跟团游·狮子岩/康提/南部海域等10个...',
					institute: '世界风情假期',
					price: '2500',
					comments: 23,
					sold: 12

				}, {
					src: '/static/edit/pic.svg',
					title: '【春节旅游】斯里兰卡全景6-9天跟团游·狮子岩/康提/南部海域等10个...',
					institute: '世界风情假期',
					price: '2500',
					comments: 23,
					sold: 12

				}, {
					src: '/static/edit/pic.svg',
					title: '【春节旅游】斯里兰卡全景6-9天跟团游·狮子岩/康提/南部海域等10个...',
					institute: '世界风情假期',
					price: '2500',
					comments: 23,
					sold: 12

				}]
			}
		},
		methods: {
			chooseType() {

			},
			toDetails() {
				uni.navigateTo({
					url: '/pages/shop/shop'
				})
			}
		},
		mounted() {
			uni.hideTabBar()
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

			&-item {
				background-color: #fff;
				// height: 228rpx;
				padding: 16rpx;
				margin-bottom: 28rpx;
				border-radius: 16rpx;

				&-img {
					margin-right: 16rpx;
				}

				&-price {
					color: #EC1C00;
					font-size: 20rpx;
					font-weight: 600;
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