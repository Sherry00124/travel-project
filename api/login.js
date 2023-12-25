import request from '../utils/request.js'

export function register(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/register`,
			method: 'POST',
			data:JSON.stringify(data),
			loading:true,
		}).then(res=>{
			console.log(res)
			resolve(res.data)
			// if (res.data.success) {
			// 	resolve(res.data)
			// } else {
			// 	uni.showToast({
			// 		title:res.data.message,
			// 		icon:"none",
			// 		duration:2000
			// 	})
			// 	reject(res.data.message)
			// }
		})
	});
}