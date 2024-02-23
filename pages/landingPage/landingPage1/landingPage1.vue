<template>
	<view class="bg">
		<view class="top flex-column">
			<view class="flex-row top-left">
				<span style="font-size: 45rpx;font-weight: bold;color: #FFFFFF;margin-right: 10rpx;">奇异泰国</span>
				<span style="font-size: 45rpx;font-size: 22rpx;font-weight: 400;color: #FFFFFF;">Strange <br>
					Thai</span>
			</view>
			<view class="flex-row top-right" style="align-items: center;">
				<u-icon name="/static/landingPage/1/icon-plane.png" size="20"></u-icon>
				<span style="font-size: 30rpx;font-weight: 400;color: #444444;">泰国 — Thailand</span>
			</view>
		</view>
		<view class="body-1 flex-column">
			<view class="flex-column">
				<view class="flex-row" style="align-items: center;justify-content: center;">
					<span style="font-size: 43rpx;font-weight: 400;margin-right: 10rpx;">美 景 绚 丽 |</span>

					<span style="font-weight: 400;font-size: 28rpx;color: #FFFFFF;letter-spacing: 2px;">
						BEAUTIFUL&nbsp;SECENERY</span>
				</view>
				<span
					style="font-weight: 800;font-size: 136rpx;color: #FFFFFF;text-shadow: 0rpx 1rpx 8rpx rgba(13,48,90,0.67);">奇趣泰国旅</span>
			</view>
			<view class="body-1-btn flex-between">
				<span style="font-weight: 500;font-size: 28rpx;color: #313131;">普吉岛·芭提雅·曼谷</span>
				<span style="font-weight: 800;font-size: 30rpx;color: #2F85E8;">6天5晚纯玩超低团</span>
			</view>

		</view>

		<view class="body-2">
			<view class="flex-column">
				<view class="flex-between" style="align-items: center;">
					<view class="flex-row" style="align-items: center;">
						<span class="vertical-text">首<br>发<br>价</span>

						<span class="current-price">999</span>
						<span class="per"><span
								style="background: #B52B22;border-radius: 50rpx;padding: 5rpx;">元</span><br>/<br>人</span>
					</view>
					<view class="start">上海出发 — 曼谷落地</view>
				</view>
				<view class="flex-between" style="align-items: center;">
					<view class="original-price">
						<span class="original-price-text">
							原会员价2980元/人
						</span>
						<div class="original-price-line"></div>
					</view>
					<view class="flex-row service">
						<div class="circle"></div>
						<span style="margin-right: 20rpx;">地接服务</span>
						<div class="circle"></div>
						<span>夜游服务</span>
					</view>
				</view>
			</view>
			<view class="flex-column" style="margin-top: 20rpx;">
				<view class="line"></view>
				<span
					style="font-weight: 500;font-size: 25rpx;color: #FFFFFF;margin: 10rpx 0;">每周一、周四出发,与所爱的人观潮听海、享受美食，春暖花开</span>
				<view class="line"></view>
			</view>
			<view class="body-2-content">
				<u-grid :border="false" col="2">
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<view class="flex-row" style="margin-top: 30rpx;">
							<!-- <u-icon :name="baseListItem.img" size="80"></u-icon> -->
							<img :src="baseListItem.img" width="80" alt="" style="margin-right: 10rpx;">
							<view class="flex-column">
								<view class="flex-row">
									<u-icon :name="baseListItem.order" size="15" style="margin-right: 5rpx;"></u-icon>
									<span
										style="font-weight: bold;font-size: 28rpx;color: #F9DF5A;">{{baseListItem.title}}</span>
								</view>
								<span
									style="font-weight: 400;color: #FFFFFF;font-size: 18rpx;">{{baseListItem.content}}</span>
							</view>
						</view>
					</u-grid-item>
				</u-grid>
			</view>
			<view class="line-2"></view>
			<view class="btn-1 flex-between">
				<view class="flex-row">
					<u-icon name="/static/landingPage/1/gift.png" size="15" style="margin-right: 10rpx;"></u-icon>
					<view class="flex-column">
						<span>赠送寺庙礼品</span>
						<span style="font-weight: 400;font-size: 6rpx;color: #2062B2;">Gifts to temples</span>
					</view>
				</view>
				<view class="flex-row">
					<u-icon name="/static/landingPage/1/protect.png" size="15" style="margin-right: 10rpx;"></u-icon>
					<view class="flex-column">
						<span>全程星级品质酒店住宿</span>
						<span style="font-weight: 400;font-size: 6rpx;color: #2062B2;">All-round star quality hotel
							accommodation</span>
					</view>
				</view>
				<view class="flex-row">
					<u-icon name="/static/landingPage/1/like.png" size="15" style="margin-right: 10rpx;"></u-icon>
					<view class="flex-column">
						<span>特色专车专时服务</span>
						<span style="font-weight: 400;font-size: 6rpx;color: #2062B2;">Special special car service</span>
					</view>
				</view>
			
			</view>
			<view class="body-3 flex-between">
				<view class="flex-column" style="width: 40%;">
					<span style="font-weight: bold;font-size: 23rpx;color: #FFFFFF;">南航：7月20/27/30/31日 8月13/15/17日</span>
					<view class="btn-2 flex-row" @click="toDetails">
						<span style="margin-right: 10rpx;">去官网逛逛</span>
						<u-icon name="/static/landingPage/1/arraw.png" size="13"></u-icon>
					</view>
				</view>
				<view class="flex-column" style="align-items: center;">
					<img src="/static/landingPage/1/qrcode1.png" width="60" height="60"/>
					<span class="qrcode-content"> 导游微信</span>
				</view>
				<view class="flex-column" style="align-items: center;">
					<img name="/static/landingPage/1/qrcode2.png" width="60" height="60"/>
					<span class="qrcode-content"> 定制师微信</span>
				</view>
				<view class="flex-column" style="align-items: center;">
					<img name="/static/landingPage/1/qrcode3.png" width="60" height="60"/>
					<span class="qrcode-content"> 地接团队</span>
				</view>
			</view>
		</view>

		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseList: [{
						id: 0,
						order: '/static/landingPage/1/order1.png',
						title: '泰佛殿',
						content: '泰国著名泰佛殿火车头夜市 四周奇异之景观 ',
						img: '/static/landingPage/1/pic1.png'
					},
					{
						id: 1,
						order: '/static/landingPage/1/order2.png',
						title: '浪漫海边',
						content: '特级游玩区 它酷似无边天际 清澈见底',
						img: '/static/landingPage/1/pic2.png'
					},
					{
						id: 2,
						order: '/static/landingPage/1/order3.png',
						title: '特色酒店',
						content: '富贵黄金屋 海鲜大拼盘 那诵水上音乐餐厅',
						img: '/static/landingPage/1/pic3.png'
					},
					{
						id: 3,
						order: '/static/landingPage/1/order4.png',
						title: '古寺庙',
						content: '虔诚之地礼数周到 历史悠久 必游玩之神圣地',
						img: '/static/landingPage/1/pic4.png'
					}
				]
			};
		},
		methods:{
			toDetails() {
				uni.switchTab({
					url: "/pages/index/shop",
				});
			},
		}
	};
</script>

<style lang="scss">
	.bg {
		background-image: url("../../../static/landingPage/1/bg.jpg");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 750rpx;
		height: 1918.48rpx;
		position: relative;
	}

	.top {
		background-image: url("../../../static/landingPage/1/top.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 750rpx;
		height: 80rpx;
		position: relative;
		justify-content: center;
		align-items: center;

		&-left {
			position: absolute;
			left: 30rpx;
			top: 10rpx;
		}

		&-right {
			position: absolute;
			right: 30rpx;
			top: 10rpx;
		}
	}

	.body {
		&-1 {
			margin-top: 100rpx;
			color: #fff;
			justify-content: center;
			align-items: center;

			&-btn {
				background-image: url("../../../static/landingPage/1/top-btn.png");
				background-repeat: no-repeat;
				background-size: 100% 100%;
				padding: 20rpx 30rpx;
				width: 550rpx;
				margin-top: 40rpx;
			}


		}

		&-2 {
			justify-content: center;
			align-items: center;
			margin: 0 30rpx;
			margin-top: 460rpx;
			position: absolute;
			bottom: 20rpx;
		}

		&-3 {
			
			
		}
	}

	.line {
		
		height: 2rpx;
		background: #FFFFFF;

		&-2 {
			// width: 687rpx;
			height: 1rpx;
			background: #FFFFFF;
			margin-top: 30rpx;
		}
	}

	.btn-1 {
		background-image: url("../../../static/landingPage/1/btn-1.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		font-weight: bold;
		font-size: 20rpx;
		color: #2162B2;
		margin: 30rpx 0rpx;
		
		padding: 20rpx;
	}

	.btn-2 {
		background-image: url("../../../static/landingPage/1/btn-2.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		font-weight: bold;
		font-size: 23rpx;
		color: #1F61B3;
		padding: 30rpx 20rpx;
		align-items: center;
		justify-content: center;
	}

	.qrcode-content {
		font-weight: bold;
		font-size: 23rpx;
		color: #FFFFFF;
	}

	.original-price {
		border-radius: 50rpx;
		border: 3rpx solid #E1CB90;
		padding: 10rpx;
		position: relative;
		&-text {
			font-weight: 400;
			font-size: 30rpx;
			color: #FBF6D4;
			background: linear-gradient(268deg, #E1C785 0%, #E8D499 18.505859375%, #F9F7D2 48.779296875%, #E8D499 89.599609375%, #BFA773 100%);
			-webkit-background-clip: text;
			/* 设置文本为背景的裁剪区域 */
			-webkit-text-fill-color: transparent;
			/* 将文本颜色设为透明，以显示背景的渐变效果 */

		}
		&-line{
			position: absolute;
			top: 30rpx;
			right: 80rpx;
			width: 70rpx;
			height: 2rpx;
			background: #E1CB90;
		}
	}

	.start {
		font-weight: 400;
		font-size: 33rpx;
		color: #FFFFFF;
		border: 3rpx solid #FFFFFF;
		border-radius: 50rpx;
		padding: 10rpx;
	}

	.service {
		font-weight: bold;
		font-size: 30rpx;
		color: #FFFFFE;
	}

	.vertical-text {
		font-weight: 400;
		font-size: 23rpx;
		color: #FFFFFE;
		margin-right: 10rpx;
	}

	.current-price {
		font-weight: 800;
		font-size: 134rpx;
		color: #FFFFFF;
		background: linear-gradient(268deg, #E1C785 0%, #E8D499 23.92578125%, #F9F7D2 48.779296875%, #E8D499 76.611328125%, #BFA773 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-right: 10rpx;
	}

	.per {
		font-weight: 400;
		font-size: 23rpx;
		color: #FFFFFE;
	}

	.circle {
		width: 30rpx;
		height: 30rpx;
		border: 6rpx solid #F9DF5A;
		/* 圆环的颜色 */
		border-radius: 50%;
		margin-right: 10rpx;
	}
</style>