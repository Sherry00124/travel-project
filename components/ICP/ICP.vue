<template>
	<view class="">
		<view class="content flex-between" >
			<text @click="showBusinessLicense=true" style="margin-right: 20px;">营业执照</text>
			<text @click="redirectToExternalUrl" style="margin-right: 20px;">京ICP备2024042182号-1</text>
			<text @click="showTravelAgency=true">旅行社资质</text>
		</view>
		<view>
			<u-popup :show="showBusinessLicense" @close="showBusinessLicense=false" mode="center">
				<view>
					<img src="/static/liscence/business.jfif" width="320" alt="">
				</view>
			</u-popup>
			<u-popup :show="showTravelAgency" @close="showTravelAgency=false" mode="center">
				<view>
					<img src="/static/liscence/agency.jfif" width="320" alt="">
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	export default {
		name: "ICP",
		data() {
			return {
				showBusinessLicense: false,
				showTravelAgency: false
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
	.content {
		position: fixed;
		z-index: 999999;
		bottom: 0rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 22rpx;
		background-color: #adadad;
		width: 750rpx;

	}
</style>