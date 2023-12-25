import request from '../utils/request.js'

export function getGuideList(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/user/guideList`,
		}).then(res=>{
			resolve(res.data)
		})
	});
}

export function guideDetail(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/user/guideDetail`,
			params:data
		}).then(res=>{
			resolve(res.data)
		})
	});
}