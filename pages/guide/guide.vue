<template>
	<view>
		<view class="container"></view>
		<view class="navbar-bg" >
			<u-navbar title="攻略" :autoBack="true" bgColor="transparent" >
			</u-navbar>
		</view>
		<view class="guide">
			<view class="guide-body flex-column">
				<text class="guide-body-title">{{title}}</text>
				<view class="flex-between guide-body-subtitle" style="margin: 30rpx 0;">
					<view class="flex-row" style="align-items: center;">
						<view class="guide-body-avatar">
							<u-avatar :src="avatar" fontSize="15" size="30" randomBgColor></u-avatar>
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
		<firstAid />
	</view>
</template>

<script>
	import {guideDetail} from '@/api/guide.js'
	export default {
		data() {
			return {
				title: "",
				author: '',
				time: '',
				content: "",
				avatar:''
			};
		},
		methods:{
			getGuideDetail(id){
				guideDetail(id).then(res=>{
					this.title = res.data.name
					this.author = res.data.author
					this.time = res.data.fabu_at
					this.content=res.data.content
					this.avatar = res.data.face
				})
			},
			leftClick(){
				// uni.switchTab({
				// 	url:'/pages/index/guide'
				// })
				uni.navigateBack()
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
			&-title {
				font-weight: bold;
				color: #1C1C1E;
				font-size: 36rpx;
				margin-top: 90rpx;
			}
			&-subtitle{
				align-items: center;
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