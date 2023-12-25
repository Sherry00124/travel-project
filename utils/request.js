import config from '../common/config.js'
// import {getToken} from '@/utils/auth.js'
export default function request(options) {
	return new Promise((resolve, reject) => {
		// if(options.loading){
		// 	uni.showLoading({
		// 		mask:true,
		// 	})
		// }

		uni.request({
			...options,
			url: config.baseURL + options.url,
			sslVerify:  false,
			success: (res) => {
				uni.hideLoading()
				// if (res.statusCode == '401') {
				// 	uni.showToast({
				// 		title: res.data.message,
				// 		icon: 'none',
				// 		duration:2000,
				// 		complete: () => {
				// 			uni.redirectTo({
				// 				url:"/pages/login/login"
				// 			})
				// 		}
				// 	});
				// }
				resolve(res)
			},
			fail: (err) => {
				uni.hideLoading()
				reject(err)
			}
		})
	})
}


