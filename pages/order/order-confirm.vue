<template>
	<view>
		<view class="order flex-column">
			<u-navbar title="订单确认" :autoBack="true"></u-navbar>
			<view class="order-info flex-column">
				<text class="order-info-title">{{title}}</text>
				<view class="order-info-detail flex-row" style="margin-top: 16rpx;">
					<text>{{location}}</text>
					<text>{{travelMode}}</text>
				</view>
				<view class="order-info-detail flex-row">
					<text>出行日期：</text>
					<text>{{date}}</text>
				</view>
				<view class="order-info-detail flex-row">
					<text>数量：</text>
					<text>成人×{{adultsNum}}</text>
					<text>儿童×{{childNum}}</text>
				</view>
				<view class="order-info-warning">
					<u-icon name="checkmark-circle"
						color="#AEAEB2"></u-icon>二次确认：此订单支付后还需要二次确认，商家将4个工作小时内（工作日9:00-18:00）确认是否预订成功
				</view>
				<u-line></u-line>
				<view class="order-info-refund flex-between">
					<view class="flex-row">
						<u-icon name="info-circle" color="#AEAEB2"></u-icon>
						<text>订单支持有条件退</text>
					</view>
					<u-icon name="arrow-right" color="#AEAEB2" size="15"></u-icon>

				</view>
			</view>
			<view class="order-cell flex-between">
				<text>下单之后在填写出行信息</text>
				<u-icon name="/static/order/check.svg" size="20" @click="showCheck=true" v-if="!showCheck"></u-icon>
				<u-icon name="/static/order/checked.svg" size="20" @click="showCheck=false" v-else></u-icon>
			</view>
			<view class="order-cell flex-column">
				<text>出行信息</text>
				<view class="flex-between" style="margin-top: 36rpx;">
					<view class="flex-row">
						<text style="font-weight: 500;font-size: 28rpx;margin-right: 10rpx;">出行人</text>
						<text style="color: #AEAEB2;font-weight: 500;font-size: 28rpx;">请添加一个出行人</text>
					</view>
					<u-icon name="/static/order/add.svg" size="20"></u-icon>
				</view>
			</view>

			<view class="order-cell flex-column" style="margin-bottom: 150rpx;">
				<text>预定人信息</text>
				<view style="width: 100%;font-weight: 500;font-size: 28rpx;">
					<u--form labelPosition="left" :model="schedule" ref="uForm" labelWidth="60">
						<u-form-item label="联系人" prop="name" borderBottom ref="item1">
							<u--input v-model="schedule.name" border="none" placeholder="请填写订单联系人姓名"></u--input>
						</u-form-item>
						<u-form-item label="手机号" prop="mobile" borderBottom ref="item1">
							<u--input v-model="schedule.mobile" border="none" placeholder="请填写订单联系人手机号">
								<template slot="prefix">
									<view class="flex-row">
										<text style="margin-right: 7rpx;">+86</text>
										<view style="height: 32rpx;border:solid 2rpx #D9D9D9"></view>
									</view>
								</template>
							</u--input>
						</u-form-item>
						<u-form-item label="邮箱" prop="email" borderBottom ref="item1">
							<u--input v-model="schedule.email" border="none" placeholder="便于接收订单通知"></u--input>
						</u-form-item>
						<u-form-item label="微信" prop="weChat" borderBottom ref="item1">
							<u--input v-model="schedule.weChat" border="none" placeholder="请填写微信号"></u--input>
						</u-form-item>
						<u-form-item label="备注" prop="note" borderBottom ref="item1">
							<u--input v-model="schedule.note" border="none" placeholder="如有特殊需求请备注"></u--input>
						</u-form-item>
					</u--form>
				</view>
			</view>
		</view>
		<view class="order-tabbar flex-between">
			<view class="order-tabbar-text flex-column">
				<text>共{{total}}人</text>
				<view class="flex-row" style="margin-top: 12rpx;">
					<text>总计</text>
					<text style="color: #FF4747;margin-right: 10rpx;">￥{{price}}</text>
					<view class="flex-row">
						<text style="color: #FACC15;margin-right: 5rpx;">明细</text>
						<u-icon name="/static/order/arrow-down.svg" size="10"></u-icon>
					</view>
				</view>

			</view>
			<button class="order-tabbar-button" @click="buyNow">立即购买</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '[春节区期] 斯里兰卡全景6到0天跟团荡·拥子老/康提/南部海流/尼甘布(胎的江树林·海上火车+佛牙奇+加勒古堡+米内日亚公因)',
				date: "2023-10-28",
				location: '成都',
				travelMode: "成都直飞",
				childNum: 1,
				adultsNum: 1,
				total: 2,
				price: 6500,
				showCheck: false,
				schedule: {
					name: '',
					mobile: '',
					email: '',
					weChat: '',
					note: ''
				}
			};
		}
	}
</script>

<style lang="scss">
	.order {
		padding: 40rpx;
		background-color: #F8F8F8;

		&-info {
			margin-top: 100rpx;
			background: #FFFFFF;
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			padding: 16rpx;

			&-title {
				font-size: 30rpx;
				font-weight: bold;
				color: #1C1C1E;
			}

			&-detail {
				font-size: 28rpx;
				color: #2C2C2E;
				line-height: 42rpx;
			}

			&-warning {
				font-size: 24rpx;
				color: #AEAEB2;
				line-height: 36rpx;
				margin: 16rpx 0;
			}

			&-refund {
				font-size: 24rpx;
				color: #AEAEB2;
				line-height: 36rpx;
				margin: 16rpx 0;
			}
		}

		&-cell {
			margin-top: 28rpx;
			background: #FFFFFF;
			border-radius: 16rpx 16rpx 16rpx 16rpx;
			padding: 32rpx;
			font-size: 28rpx;
			font-weight: 600;
			color: #09080D;
			line-height: 45rpx;

		}

		&-tabbar {
			position: fixed;
			bottom: 0;
			height: 150rpx;
			width: 750rpx;
			background-color: #fff;
			padding: 0 40rpx;

			&-text {
				font-size: 26rpx;
				font-weight: 600;
				color: #2C2C2E;
				line-height: 26rpx;
				margin-top: 40rpx;
			}

			&-button {
				background-color: #FACC15;
				height: 100rpx;
				width: 288rpx;
				border-radius: 20rpx;
				margin-top: 20rpx;
			}
		}
	}
</style>