<template>
	<view class="container">
		个人中心
		<tabbar :currentTab='2'/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted() {
			uni.hideTabBar()
		}
	}
</script>

<style>

</style>
