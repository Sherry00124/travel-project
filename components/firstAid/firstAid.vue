<template>
	<view class="firstAid">
		<u-icon name="/static/shop/customer.svg" size="35" @click="showQRCode=true"></u-icon>
		<u-popup :show="showQRCode" @close="close" mode="center" round="16">
		            <view style="height: 400rpx;width: 400rpx;padding: 16rpx;">
		                <text>二维码</text>
		            </view>
				</u-popup>
	</view>
</template>

<script>
	export default {
		name:"firstAid",
		data() {
			return {
				showQRCode:false
			};
		},
		methods:{
			close(){
				this.showQRCode = false
			}
		}
	}
</script>

<style>
.firstAid{
	position: absolute;
	right: 0;
	top: 800rpx;
}
</style>