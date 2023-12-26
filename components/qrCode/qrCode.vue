<template>
	<view>
		<u-popup :show="showQRCode" @close="close" mode="center" round="16">
			<view style="height: 400rpx;width: 400rpx;padding: 16rpx;display: flex;justify-content: center;align-items: center;">
				<u-icon :name="qrCode" size="180"></u-icon>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {getConfig} from '@/api/config.js'
	export default {
		name:"qrCode",
		props:['show'],
		data() {
			return {
				showQRCode:false,
				qrCode:''
			};
		},
		watch:{
			show(newValue,oldValue){
				this.showQRCode = newValue
				if(newValue){
					this.getConfigInfo()
				}
			},
			
		},
		methods:{
			close(){
				this.showQRCode = false
				this.$emit('close',false)
			},
			getConfigInfo(){
				getConfig().then(res=>{
					console.log(res)
					this.qrCode = res.data[0].qrcode
				})
			}
		}
	}
</script>

<style lang="scss">

</style>