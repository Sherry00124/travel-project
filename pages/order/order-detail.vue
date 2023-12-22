<template>
	<view>
		<view class="container"></view>
		<view class="order">
			<u-navbar title="订单详情" :autoBack="true" bgColor="transparent">></u-navbar>
			<view class="order-top flex-column">
				<view class="flex-between" style="align-items: center;">
					<text class="order-top-status">{{status}}</text>
					<view class="flex-row order-top-price">
						<text>￥{{price}}</text>
						<u-icon name="/static/order/arrow-right.svg" size="8"></u-icon>
					</view>
				</view>
				<view class="order-top-lastTime">
					<text>剩余{{lastTime}},逾期未支付将自动关闭</text>
				</view>
				<view class="flex-row order-top-warning">
					<u-icon name="volume" size="15"></u-icon>
					<text>应国家旅游主管单位要求，您购买的订单需要签署...</text>
				</view>
			</view>
			<view class="order-cell flex-column">
				<text>商品信息</text>
				<view class="flex-between">
					<text class="order-cell-title">{{object.title}}</text>
					<u-icon name="/static/order/arrow-right.svg" size="8"></u-icon>
				</view>
				<view class="flex-row order-cell-item">
					<text class="order-cell-left">套餐类型</text>
					<text class="order-cell-right">{{object.type}}</text>
				</view>
				<view class="flex-row order-cell-item">
					<text class="order-cell-left">出行日期</text>
					<text class="order-cell-right" style="color: #FF4747;">{{object.date}}</text>
				</view>
				<view class="flex-row order-cell-item">
					<text class="order-cell-left">成人</text>
					<text class="order-cell-right">￥{{object.adultPrice}}x{{object.adultNum}}</text>
				</view>
				<view class="order-cell-item">
					<u-line></u-line>
				</view>
				<view class="flex-column" style="margin: 16rpx 0;">
					<text>取消政策</text>
					<view class="flex-between order-cell-item">
						<view class="flex-row">
							<u-icon name="/static/order/checked-circle.svg" size="20"></u-icon>
							<text class="order-cell-refund">按规则退</text>
						</view>
						<u-icon name="/static/order/arrow-right.svg" size="8"></u-icon>
					</view>
				</view>
				<u-line></u-line>
				<view class="flex-between order-cell-item" style="font-weight: 500;font-size: 28rpx;">
					<view class="flex-row" @click="show=true">
						<u-icon name="/static/order/msg.svg" size="20"></u-icon>
						<text>在线咨询</text>
					</view>
					<view class="line"></view>
					<view class="flex-row" @click="show=true">
						<u-icon name="/static/order/phone.svg" size="20"></u-icon>
						<text>商家电话</text>
					</view>
					<view class="line"></view>
					<view class="flex-row" @click="show=true">
						<u-icon name="/static/order/consult.svg" size="20"></u-icon>
						<text>在线咨询</text>
					</view>
				</view>
			</view>
			<view class="order-cell flex-column">
				<text>预订人信息</text>
				<view class="flex-row order-cell-item">
					<text class="order-cell-left">联系人</text>
					<text class="order-cell-right">{{user.associates}}</text>
				</view>
				<view class="flex-row order-cell-item">
					<text class="order-cell-left">手机号</text>
					<text class="order-cell-right">{{user.phone}}</text>
				</view>
				<view class="flex-row order-cell-item">
					<text class="order-cell-left">邮箱</text>
					<text class="order-cell-right">{{user.email}}</text>
				</view>
			</view>
			<view class="order-cell flex-column" style="margin-bottom: 100rpx;">
				<text>其他信息</text>
				<view class="flex-row" style="margin-top: 16rpx;">
					<text class="order-cell-left">供应商</text>
					<text class="order-cell-right">{{other.provider}}</text>
				</view>
				<view class="flex-row" style="margin-top: 16rpx;">
					<text class="order-cell-left">订单号</text>
					<text class="order-cell-right">{{other.orderNum}}</text>
				</view>
				<view class="flex-row" style="margin-top: 16rpx;">
					<text class="order-cell-left">创建时间</text>
					<text class="order-cell-right">{{other.creatTime}}</text>
				</view>
			</view>
		</view>
		<view class="order-tabbar">
			<view style="justify-content:flex-end;margin-right: 60rpx;" class="flex-between">
				<button class="order-tabbar-button" @click="payNow">去支付</button>
				<button class="order-tabbar-button" style="background-color: #F2F2F7;"
					@click="cancelOrder">取消订单</button>
			</view>
		</view>
		<qrCode :show="show" @close="close"/>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				status: "待支付",
				price: 4500,
				lastTime: '00:47:44',
				show:false,
				object: {
					title: '[春节区期] 斯里兰卡全景6到0天跟团荡·拥子...',
					type: '成都 成都直飞',
					date: '2023-12-21 周一',
					adultPrice: 4500,
					adultNum: 1
				},
				user: {
					associates: '王大力',
					phone: '+86 174****4871',
					email: '4549*****684@qq.com'
				},
				other: {
					provider: '杭秋国际旅游',
					orderNum: '564648984168138434864',
					creatTime: '2023-01-14 22:14:54'
				}
			};
		},
		methods: {
			payNow() {

			},
			cancelOrder() {

			},
			close(params) {
				this.show = params
			}
		}
	}
</script>

<style lang="scss">
	.order {
		padding: 40rpx;
		background-color: #F8F8F8;

		&-top {
			position: relative;
			z-index: 2;
			margin-top: 100rpx;

			&-warning {
				margin-top: 28rpx;
				padding: 10rpx;
				background: rgba(255, 255, 255, 0.4);
				border-radius: 8rpx;
				font-size: 24rpx;
				color: #636366;
			}

			&-status {
				font-size: 36rpx;
				font-weight: bold;
				color: #1C1C1E;
			}

			&-price {
				font-size: 28rpx;
				font-weight: bold;
				color: #1C1C1E;
			}

			&-lastTime {
				margin-top: 28rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #3A3A3C;
			}
		}

		&-cell {
			position: relative;
			z-index: 1;
			margin-top: 28rpx;
			background: #FFFFFF;
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			padding: 32rpx;
			font-size: 30rpx;
			font-weight: 600;
			color: #09080D;

			&-refund {
				font-size: 28rpx;
				font-weight: 500;
				color: #1C1C1E;
				line-height: 40rpx;
			}

			&-item {
				margin-top: 16rpx;
			}

			&-title {
				font-size: 28rpx;
				color: #1C1C1E;
				font-weight: 500;
				margin-top: 16rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			&-left {
				font-size: 28rpx;
				color: #8E8E93;
				font-weight: 500;
				width: 35%;
			}
			&-right{
				font-size: 28rpx;
				font-weight: 500;
				color: #1C1C1E;
			}
		}

		&-tabbar {
			position: fixed;
			bottom: 0;
			height: 100rpx;
			width: 750rpx;
			background-color: #fff;
			padding: 0 40rpx;
			z-index: 3;

			&-button {
				background-color: #FACC15;
				font-size: 28rpx;
				border-radius: 50rpx;
				margin: 20rpx 0;
				margin-right: 20rpx;
			}
		}
	}
</style>