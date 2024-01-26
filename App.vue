<script>
import { createCollection, updateStayTime } from '@/api/infoCollection.js';
export default {
	globalData: {
		referrer: '',
		id: '',
		starTime: ''
	},
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		this.globalData.starTime = new Date().getTime();
		this.setUsername();
		window.addEventListener('beforeunload', this.handleBeforeUnload);
	},
	onHide: function() {
		if (this.globalData.id != '') {
			const endTime = new Date().getTime();
			// 计算停留时间
			const timeSpentOnPage = endTime - this.globalData.startTime;
			updateStayTime({
				id: this.globalData.id,
				stop_time: timeSpentOnPage
			}).then(res => {
				console.log(res);
			});
		}
	},
	methods: {
		getReferrerFromRoute(uname) {
			const key = 'referrer';
			const url = window.location.href;
			if (url.indexOf('/pc/') !== -1) {
				window.location.href = 'https://exotictravelvip.com';
			}
			// 使用正则表达式匹配 "referrer" 参数的值
			const match = url.match(new RegExp(`[?&]${key}=([^&]+)`));
			// 判断是否匹配到参数
			const currentUrl = new URL(window.location.href);
			// 获取主机部分
			const host = currentUrl.hostname;
			const referrerValue = match ? match[1] : null;
			if (referrerValue) {
				createCollection({ resouce_url: referrerValue, uname: uname, domain_url: host }).then(res => {
					this.id = res.id;
				});
			}
		},
		generateRandomString(length) {
			const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			let result = '';

			for (let i = 0; i < length; i++) {
				const randomIndex = Math.floor(Math.random() * chars.length);
				result += chars.charAt(randomIndex);
			}
			localStorage.setItem('visit', result);
			return result;
		},
		setUsername() {
			this.globalData.ifVisit = localStorage.getItem('visit');
			if (this.globalData.ifVisit != null) {
				this.getReferrerFromRoute(this.globalData.ifVisit);
			} else {
				const username = this.generateRandomString(16);
				this.getReferrerFromRoute(username);
			}
		}
	}
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-ui/index.scss';
</style>
