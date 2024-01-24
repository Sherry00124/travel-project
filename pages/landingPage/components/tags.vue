<template>
	<view class="grid-container">
		<view class="tags" v-for="(baseListItem,index) in tags">
			<text class="tags-text">{{baseListItem}}</text>
		</view>
	</view>
</template>

<script>
	import {
		shopDetail
	} from "@/api/shop.js";
	export default {
		name: "Tags",
		props: ['data'],
		data() {
			return {
				tags: []
			};
		},
		mounted() {
			this.tags = this.data.intro.split("\n");
		},
		
		methods: {
			getShopDetail() {
				shopDetail(this.id).then(res => {
					this.tags = res.data.intro.split("\n");
				})

			}
		}
	}
</script>

<style lang="scss">
	.grid-container {
	    display: grid;
	    grid-template-columns: repeat(2, 1fr); /* 将容器分为两列，每列宽度相等 */
	    grid-gap: 5rpx; /* 设置列之间的间隔，根据需要进行调整 */
	    /* 其他样式，如边距等，可以根据需要进行调整 */
	}
	.tags {
		// width: 60%;
		background-image: url("../../../static/landingPage/bg_label.png");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10rpx 0;
		
		&-text {
			font-size: 24rpx;
			font-weight: 600;
			color: #FFFFFF;
			text-shadow: 4px 0px 3px #FF9638;
		}
	}
</style>