<template>
	<view class="content" @click="redirectToExternalUrl">
		<text>京ICP备2024042182号-1</text>
	</view>
</template>

<script>
	export default {
		name:"ICP",
		data() {
			return {
				
			};
		},
		 methods: {
		    redirectToExternalUrl() {
		      // 使用 window.location.href 进行外部URL跳转
			   window.open('https://beian.miit.gov.cn/', '_blank');
		    }
		  }
	}
</script>

<style lang="scss">
.content{
	position: fixed;
	z-index: 999999;
	bottom: 0rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 20rpx;
	background-color: #adadad;
	width: 750rpx;
}
</style>