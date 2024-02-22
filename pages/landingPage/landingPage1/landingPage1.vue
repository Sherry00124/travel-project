<template>
	<view class="bg">
		<view class="top">
			<view class="flex-row top-left">
				<span style="font-size: 45rpx;font-weight: bold;color: #FFFFFF;margin-right: 10rpx;">奇异泰国</span>
				<span style="font-size: 45rpx;font-size: 22rpx;font-weight: 400;color: #FFFFFF;">Strange <br> Thai</span>
			</view>
			<view class="flex-row top-right" style="align-items: center;">
				<u-icon name="/static/landingPage/1/icon-plane.png" size="20"></u-icon>
				<span style="font-size: 30rpx;font-weight: 400;color: #444444;">泰国 — Thailand</span>
			</view>
		</view>
		<view class="body-1 flex-column">
			<span style="font-size: 43rpx;">123456 |</span>
			<span>789654</span>
			<view class="body-1-btn flex-row">
				<span style="color: #fff;">123456</span>
				<span style="color: #2F85E8;">123456</span>
			</view>
			
		</view>
		<view class="flex-column">
			<view class="line"></view>
			<span style="color: #fff;">123456</span>
			<view class="line"></view>
		</view>
		<view class="body-2">
			<u-grid :border="false" col="2">
				<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex"
					@click="chooseType(baseListItem)">
					<view class="flex-row">
						<u-icon :name="baseListItem.img" size="80"></u-icon>
						<view class="flex-column">
							<view class="flex-row">
								<u-icon :name="baseListItem.order" size="20"></u-icon>
								<span style="color: yellow;">{{baseListItem.title}}</span>
							</view>
							
							<span style="color: #fff;">{{baseListItem.content}}</span>
						</view>
					</view>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="line-2"></view>
		<view class="btn-1 flex-row">
			<u-icon name="/static/landingPage/1/gift.png" size="20"></u-icon>
			<u-icon name="/static/landingPage/1/protect.png" size="20"></u-icon>
			<u-icon name="/static/landingPage/1/like.png" size="20"></u-icon>
		</view>
		<view class="flex-row">
			<view class="">
				<span style="color: #2F85E8;">123456</span>
				<view class="btn-2">
					<u-icon name="/static/landingPage/1/arraw.png" size="20"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseList:[{
					id:0,
					order:'/static/landingPage/1/order1.png',
					title:'111',
					content:'123456',
					img:'/static/landingPage/1/pic1.png'
				},
				{
					id:1,
					order:'/static/landingPage/1/order2.png',
					title:'111',
					content:'',
					img:'/static/landingPage/1/pic2.png'
				},
				{
					id:2,
					order:'/static/landingPage/1/order3.png',
					title:'111',
					content:'123456',
					img:'/static/landingPage/1/pic3.png'
				},
				{
					id:3,
					order:'/static/landingPage/1/order4.png',
					title:'111',
					content:'',
					img:'/static/landingPage/1/pic4.png'
				}]
			};
		},
	};
</script>

<style lang="scss">
	.bg {
		background-image: url("../../../static/landingPage/1/bg.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 750rpx;
		height: 100vh;
	}

	.top {
		background-image: url("../../../static/landingPage/1/top.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: relative;
		&-left{
			position: absolute;
			left: 10rpx;
			top: 0;
		}
		&-right{
			position: absolute;
			right: 10rpx;
			top: 0;
		}
	}
	.body{
		&-1{
			
			color: #fff;
			justify-content: center;
			align-items: center;
			&-btn{
				background-image: url("../../../static/landingPage/1/top-btn.png");
				background-repeat: no-repeat;
				background-size: 100% 100%;
			}
		}
		&-2{
			justify-content: center;
			align-items: center;
		}
	}
	.line{
		color: #fff;
		width: 700rpx;
		border: #fff 1rpx solid;
		height: 1rpx;
		&-2{
			color: #fff;
			width: 700rpx;
			border: #fff 1rpx solid;
			height: 1rpx;
		}
	}
	.btn-1{
		background-image: url("../../../static/landingPage/1/btn-1.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		color: #2162B2;
	}
	.btn-2{
		background-image: url("../../../static/landingPage/1/btn-2.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		color: #2162B2;
	}
</style>