import request from '../utils/request.js'

export function register(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/register`,
			method: 'POST',
			data:JSON.stringify(data),
		}).then(res=>{
			console.log(res)
			resolve(res.data)
		})
	});
}

export function login(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/auth/login`,
			method: 'POST',
			data:JSON.stringify(data),
			loading:true,
		}).then(res=>{
			resolve(res.data)
		})
	});
}