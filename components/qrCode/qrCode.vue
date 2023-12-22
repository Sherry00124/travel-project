<template>
	<view>
		<u-popup :show="showQRCode" @close="close" mode="center" round="16">
			<view style="height: 400rpx;width: 400rpx;padding: 16rpx;">
				<text>二维码</text>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name:"qrCode",
		props:['show'],
		data() {
			return {
				showQRCode:false
			};
		},
		watch:{
			show(newValue,oldValue){
				this.showQRCode = newValue
			},
			
		},
		methods:{
			close(){
				this.showQRCode = false
				this.$emit('close',false)
			}
		}
	}
</script>

<style lang="scss">

</style>