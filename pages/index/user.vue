<template>
	<view class="">
		<view class="container"></view>
		<view class="user flex-column">
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="user-item" v-for="(item,index) in list">
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
		<firstAid/>
		<tabbar :currentTab='2' />
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
			&-type{
				margin: 16rpx 0;
				font-size: 26rpx;
font-weight: 500;
			}
			&-date{
				font-weight: 500;
				font-size: 26rpx;
				margin: 20rpx 0;
color: #8E8E93;
			}
			&-price{
				
color: #FF4747;
font-size: 20rpx;
font-weight: bold;
			}
			&-title{
				font-size: 28rpx;
				display: -webkit-box;
				  -webkit-box-orient: vertical;
				  overflow: hidden;
				  text-overflow: ellipsis;
				  -webkit-line-clamp: 2; /* 限制显示的行数 */
				  margin: 16rpx 0;
				  
font-weight: bold;
			}
		}
	}
	.scroll-view{
		height: 90vh;
	}
</style>