<template>
	<view>
		<view class="container"></view>
		<view class="guide">
			<u-navbar title="攻略" :autoBack="true" bgColor="transparent">
			</u-navbar>
			<view class="guide-body flex-column">
				<text class="guide-body-title">{{title}}</text>
				<view class="flex-between" style="margin: 30rpx 0;">
					<view class="flex-row" style="align-items: center;">
						<view class="guide-body-avatar">
							<u-avatar text="北" fontSize="15" size="30" randomBgColor></u-avatar>
						</view>
						<text class="guide-body-author">{{author}}</text>
					</view>
					<text class="guide-body-time">{{time}}</text>
				</view>
			</view>
			<view class="guide-content flex-column">
				<u-parse :content="content"></u-parse>
			<text class="guide-content-disclaimer">免责声明：本文来自平台创作者，不代表平台立场，如有侵权请联系平台删除</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {guideDetail} from '@/api/guide.js'
	export default {
		data() {
			return {
				title: "成都在做，幸福在右，人间烟火，理想生活 | 2020成都最新版游记",
				author: 'Kreloan',
				time: '2021-11-21',
				content: "<div>1、私家小团，升级服务，1单1团，专车专导，微信管家服务。2、鼓浪屿特别体验1晚地标住宿，更多时间留给您，留给鼓浪屿，Feeling倍儿爽3、行程涵盖福建全线精华景点，一次出游，不留任何遗憾，无购物无自费4、走法设计舒适合理，符合人体运动技能，深度畅玩福建，拒绝常规旅游弊病“走马观花旅游模式</div>"
			};
		},
		methods:{
			getGuideDetail(id){
				guideDetail(id).then(res=>{
					console.log(res)
				})
			}
		},
		onLoad(option) {
			this.getGuideDetail(option.id)
		}
	}
</script>

<style lang="scss">
	.guide {

		background-color: #F8F8F8;
		
		&-body {
			position: relative;
			z-index: 2;
			margin:0 40rpx;
			margin-top: 100rpx;

			&-title {
				font-weight: bold;
				color: #1C1C1E;
				font-size: 36rpx;
			}

			&-avatar {
				margin-right: 10rpx;
			}

			&-author {
				font-weight: 500;

				color: #3A3A3C;
				font-size: 28rpx;
			}

			&-time {
				font-size: 28rpx;
				font-weight: 500;
				color: #3A3A3C;
			}
		}

		&-content {
			background-color: #fff;
			border-radius: 24rpx;
			padding: 40rpx;
			position: relative;
			z-index: 2;
			font-size: 28rpx;
			color: #48484A;
			&-disclaimer{
				font-size: 28rpx;
				font-weight: 500;
				color: #AEAEB2;
				margin: 20rpx 0;
			}
		}
	}
</style>