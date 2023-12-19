<template>
	<view>
		<view class="container"></view>
		<view class="order">
			<u-navbar title="订单详情" :autoBack="true" bgColor="transparent">></u-navbar>
			<view class="order-top flex-column">
				<view class="flex-between">
					<text>{{status}}</text>
					<view class="flex-row">
						<text>￥{{price}}</text>
						<u-icon name="/static/order/arrow-right.svg" size="10"></u-icon>
					</view>
				</view>
				<view class="">
					<text>剩余{{lastTime}},逾期未支付将自动关闭</text>
				</view>
				<view class="flex-row order-top-warning">
					<u-icon name="volume" size="15"></u-icon>
					<text>应国家旅游主管单位要求，您购买的订单需要签署...</text>
				</view>
			</view>
			<view class="order-cell flex-column">
				<text>商品信息</text>
				<view class="flex-row">
					<text>{{object.title}}</text>
					<u-icon name="/static/order/arrow-right.svg" size="10"></u-icon>
				</view>
				<view class="flex-row">
					<text>套餐类型</text>
					<text>{{object.type}}</text>
				</view>
				<view class="flex-row">
					<text>出行日期</text>
					<text>{{object.date}}</text>
				</view>
				<view class="flex-row">
					<text>成人</text>
					<text>￥{{object.adultPrice}}x{{object.adultNum}}</text>
				</view>
				<u-line></u-line>
				<view class="flex-column">
					<text>取消政策</text>
					<view class="flex-between">
						<view class="flex-row">
							<u-icon name="/static/order/checked-circle.svg" size="15"></u-icon>
							<text>按规则退</text>
						</view>
						<u-icon name="/static/order/arrow-right.svg" size="10"></u-icon>
					</view>
				</view>
				<u-line></u-line>
				<view class="flex-between">
					<view class="flex-row">
						<u-icon name="/static/order/msg.svg" size="20"></u-icon>
						<text>在线咨询</text>
					</view>
					<view class="line"></view>
					<view class="flex-row">
						<u-icon name="/static/order/phone.svg" size="20"></u-icon>
						<text>商家电话</text>
					</view>
					<view class="line"></view>
					<view class="flex-row">
						<u-icon name="/static/order/consult.svg" size="20"></u-icon>
						<text>在线咨询</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: "待支付",
				price: 4500,
				lastTime: '00:47:44',
				object:{
					title:'[春节区期] 斯里兰卡全景6到0天跟团荡·拥子...',
					type:'成都 成都直飞',
					date:'2023-12-21 周一',
					adultPrice:4500,
					adultNum:1
				}
			};
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
				padding: 10rpx;
				background: rgba(255, 255, 255, 0.4);
				border-radius: 8rpx;
			}
		}
		
		&-cell{
			position: relative;
			z-index: 2;
			margin-top: 28rpx;
			background: #FFFFFF;
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			padding: 32rpx;
			font-size: 28rpx;
			font-weight: 600;
			color: #09080D;
			line-height: 45rpx;
		}
	}
</style>