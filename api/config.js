import request from '../utils/request.js'

export function getConfig() {
	return new Promise((resolve, reject) => {
		request({
			url: `/user/systemConfig`,
		}).then(res=>{
			resolve(res.data)
		})
	});
}