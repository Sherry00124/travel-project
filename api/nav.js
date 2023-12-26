import request from '../utils/request.js'

export function getNavList(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/user/navList`,
		}).then(res=>{
			resolve(res.data.data)
		})
	});
}

export function getNav(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/user/shopType`,
		}).then(res=>{
			resolve(res.data)
		})
	});
}