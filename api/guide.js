import request from '../utils/request.js'

export function getGuideList(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/user/guideList`,
			method: 'POST',
			data:JSON.stringify(data),
		}).then(res=>{
			resolve(res.data)
		})
	});
}

export function guideDetail(data) {
	console.log(data)
	return new Promise((resolve, reject) => {
		request({
			url: `/user/guideDetail?id=`+data,
			params:data
		}).then(res=>{
			resolve(res.data)
		})
	});
}