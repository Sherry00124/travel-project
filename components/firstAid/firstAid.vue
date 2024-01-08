<template>
	<view class="firstAid">
		<u-icon name="/static/shop/customer.svg" size="35" @click="show=true"></u-icon>
		<qrCode :show="show" @close="close"/>
	</view>
</template>

<script>
	export default {
		name: "firstAid",
		data() {
			return {
				show: false
			};
		},
		methods: {
			close(params) {
				this.show = params
			}
		}
	}
</script>

<style>
	.firstAid {
		position: fixed;
		right: 0;
		top: 800rpx;
		z-index: 5;
	}
</style>