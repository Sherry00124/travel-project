import request from '../utils/request.js'

export function getShopList(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/user/shopList`,
		}).then(res=>{
			resolve(res.data)
		})
	});
}

export function shopDetail(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/user/shopDetail`,
		}).then(res=>{
			resolve(res.data)
		})
	});
}