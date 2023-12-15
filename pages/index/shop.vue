<template>
	<view class="container shop">
		<view class="shop-top">
			<u-grid :border="false" @click="chooseType" col="5">
				<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
					<u-icon :customStyle="{marginBottom:5+'rpx'}" :name="baseListItem.name" :size="25"></u-icon>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<tabbar :currentTab='0' />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseList: [{
						name: '/static/shop/ticket.svg',
						title: '门票'
					},
					{
						name: '/static/shop/current.svg',
						title: '当前游'
					},
					{
						name: '/static/shop/hotel.svg',
						title: '旅店'
					},
					{
						name: '/static/shop/customs.svg',
						title: '跟团游'
					},
					{
						name: '/static/shop/free.svg',
						title: '自由行'
					},
				]
			}
		},
		methods: {
			chooseType(){
				
			}
		},
		mounted() {
			uni.hideTabBar()
		}
	}
</script>

<style lang="scss">
.shop{
	padding: 40rpx;
	&-top{
		border-radius: 16rpx 16rpx 16rpx 16rpx;
		padding: 38rpx 46rpx;
		background-color: #fff;
	}
}
.grid-text{
	font-size: 24rpx
}
</style>