import request from "../utils/request.js";

export function createCollection(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/user/ViewLogAdd`,
			method: "POST",
			header:{
				'Content-Type':'application/x-www-form-urlencoded'
			},
			data: data,
		}).then((res) => {
			resolve(res);
		});
	});
}

export function updateStayTime(data) {
	return new Promise((resolve, reject) => {
		request({
			url: `/user/ViewUpdate`,
			data: data,
		}).then((res) => {
			resolve(res);
		});
	});
}