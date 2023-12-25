<template>
	<view class="">
		<view class="container"></view>
		<view class="guide">
			<scroll-view scroll-y="true" class="scroll-view" @scrolltolower="touchBottom">
				<u-grid :border="false" @click="choose" col="2">
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<view class="guide-item">
							<img :src="baseListItem.name" alt="" width="100%">
							<!-- <u-icon :customStyle="{marginBottom:5+'rpx'}" :name="baseListItem.name" :size="120"></u-icon> -->
							<text class="guide-item-content">{{baseListItem.title}}</text>
							<view class="guide-item-bottom flex-row">
								<img :src="baseListItem.name" alt="" width="16rpx" class="guide-item-bottom-avater">
								<text class="guide-item-bottom-name">万达利</text>
							</view>
						</view>
					</u-grid-item>
				</u-grid>
			</scroll-view>
		</view>
		<firstAid />
		<tabbar :currentTab='1' />
	</view>
</template>

<script>
	import {getGuideList} from '@/api/guide.js'
	export default {
		data() {
			return {
				baseList: [{
						name: '/static/edit/pic.svg',
						title: '巴厘岛 | 总有一个假日要属于bali'
					},
					{
						name: '/static/edit/pic.svg',
						title: '成都在做，幸福在右，人间烟火，理想生活...'
					},
					{
						name: '/static/edit/pic.svg',
						title: '湾区超美风景线,一起感受至美南沙'
					},
					{
						name: '/static/edit/pic.svg',
						title: '雨季的大理，没有风花雪月，却依旧惊艳...'
					},
					{
						name: '/static/edit/pic.svg',
						title: '巴厘岛 | 总有一个假日要属于bali'
					},
					{
						name: '/static/edit/pic.svg',
						title: '巴厘岛 | 总有一个假日要属于bali'
					},
				],
				pageNum:1,
				totalPage:1,
				pageSize:6
			}
		},
		methods: {
			choose() {
				uni.navigateTo({
					url: '/pages/guide/guide'
				})
			},
			touchBottom(){
				if (this.pageNum >= this.totalPage) {
					uni.showToast({
						title:"没有更多",
						icon:'none'
					})
				} else {
					this.getGuide()
				}
			},
			getGuide(){
				let page = {
					page:this.pageNum,
					perPage:this.pageSize
				}
				getGuideList(page).then(res=>{
					console.log(res)
				})
			}
		},
		mounted() {
			uni.hideTabBar()
		}
	}
</script>

<style lang="scss">
	.guide {
		padding: 40rpx;
		background-color: #F8F8F8;
		margin-bottom: 100rpx;
		&-item {
			background-color: #fff;
			width: 270rpx;
			margin: 16rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			// align-items: center;
			border-radius: 16rpx;
			padding: 16rpx;

			&-content {
				font-size: 28rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				/* 限制显示的行数 */
				margin: 16rpx 0;

			}

			&-bottom {
				&-name {
					font-size: 24rpx;
				}

				&-avater {
					border-radius: 50%;
				}
			}
		}
	}

	.scroll-view {
		width: 100%;
		height: 90vh;
	}
</style>