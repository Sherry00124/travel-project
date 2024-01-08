<template>
	<view class="">
		<view class="container"></view>
		<view class="guide">
			<scroll-view scroll-y="true" class="scroll-view" @scrolltolower="touchBottom">
				<u-grid :border="false" col="2" >
					<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<view class="guide-item" @click="choose(baseListItem.id)">
							<img :src="baseListItem.face" alt="" width="100%" height="130">
							<!-- <u-icon :customStyle="{marginBottom:5+'rpx'}" :name="baseListItem.name" :size="120"></u-icon> -->
							<text class="guide-item-content">{{baseListItem.name}}</text>
							<view class="guide-item-bottom flex-row">
								<img :src="baseListItem.face" alt="" width="16rpx" height="16rpx"
									class="guide-item-bottom-avater">
								<text class="guide-item-bottom-name">{{baseListItem.author}}</text>
							</view>
						</view>
					</u-grid-item>
				</u-grid>
			</scroll-view>
		</view>
		<firstAid />
		<tabbar :currentTab='1' />
		<ICP />
	</view>
</template>

<script>
	import {
		getGuideList
	} from '@/api/guide.js'
	export default {
		data() {
			return {
				baseList: [],
				pageNum: 1,
				totalPage: 1,
				pageSize: 6
			}
		},
		methods: {
			choose(id) {
				uni.navigateTo({
					url: '/pages/guide/guide?id=' + id
				})
			},
			touchBottom() {
				if (this.pageNum >= this.totalPage) {
					uni.showToast({
						title: "没有更多",
						icon: 'none'
					})
				} else {
					this.pageNum++;
					this.getGuide()
					uni.showLoading({
						mask:true,
						title:'刷新中'
					})
				}
			},
			getGuide() {
				let page = {
					page: this.pageNum,
					perPage: this.pageSize
				}
				getGuideList(page).then(res => {
					uni.hideLoading()
					this.totalPage = res.list.last_page
					res.list.data.forEach(item => {
						this.baseList.push(item)
					})
				})
			}
		},
		mounted() {
			uni.hideTabBar()
			this.getGuide();
		}
	}
</script>

<style lang="scss">
	.guide {
		padding: 40rpx;
		background-color: #F8F8F8;

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
				margin: 16rpx 0;
				min-height: 40px;
			}

			&-bottom {
				&-name {
					font-size: 24rpx;
				}

				&-avater {
					border-radius: 50%;
					margin-right: 10rpx;
				}
			}
		}
	}

	.scroll-view {
		width: 100%;
		height: 90vh;
		margin-bottom: 100rpx;
	}
</style>