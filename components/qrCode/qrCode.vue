<template>
	<view>
		<u-popup :show="showQRCode" @close="close" mode="center" round="16">
			<view class="img">
				<canvas style="width: 100%;height: 100%;" class="content-showMakeImg-canvas">
					<image show-menu-by-longpress="true" :src="qrCode" class="img-image"></image>
				</canvas>

				<!-- <u-icon :name="qrCode" size="190"  @click="openimg"></u-icon> -->
				<!-- <image show-menu-by-longpress="true" :src="qrCode" class="img-image"></image> -->
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		getConfig
	} from '@/api/config.js'
	export default {
		name: "qrCode",
		props: ['show'],
		data() {
			return {
				showQRCode: false,
				qrCode: ''
			};
		},
		watch: {
			show(newValue, oldValue) {
				this.showQRCode = newValue
				if (newValue) {
					this.getConfigInfo()
				}
			},

		},
		methods: {
			close() {
				this.showQRCode = false
				this.$emit('close', false)
			},
			getConfigInfo() {
				getConfig().then(res => {
					console.log(res)
					this.qrCode = res.data[0].qrcode
				})
			},
			openimg() {
				uni.previewImage({
					url: this.qrCode,
					current: this.qrCode,
					// 图片指示器样式	
					indicator: 'default',
					// 是否可循环预览
					loop: false,
					success: res => {
						console.log('res', res);
					},
					fail: err => {
						console.log('err', err);
					}
				});

			}
		}
	}
</script>

<style lang="scss">
	.img {
		height: 400rpx;
		width: 400rpx;
		padding: 16rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		&-image{
			width: 98%;
			height:98%;
			-webkit-touch-callout: default;
		}
	}
</style>