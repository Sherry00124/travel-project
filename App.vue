<script>
	import { createCollection, updateStayTime } from "@/api/infoCollection.js";
	export default {
		globalData:{
			referrer: "",
			id: "",
			starTime: "",
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			this.globalData.starTime = new Date().getTime();
			console.log(this.globalData.starTime)
			this.getReferrerFromRoute();
		},
		onHide: function() {
			if(this.globalData.id != ""){
				const endTime = new Date().getTime();
				// 计算停留时间
				const timeSpentOnPage = endTime - this.globalData.startTime;
				updateStayTime({
					id: this.globalData.id,
					stop_time: timeSpentOnPage
				}).then(
					(res) => {
						console.log(res);
					}
				);
			}
		},
		methods: {
			getReferrerFromRoute() {
				const key = "referrer";
				const url = window.location.href;
				// 使用正则表达式匹配 "referrer" 参数的值
				const match = url.match(new RegExp(`[?&]${key}=([^&]+)`));
				// 判断是否匹配到参数
				const referrerValue = match ? match[1] : null;
				if (referrerValue) {
					createCollection({
						resouce_url: referrerValue
					}).then((res) => {
						app.globalData.id = res.id;
					});
				}
			},
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>