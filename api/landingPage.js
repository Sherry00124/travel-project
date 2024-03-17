import request from "../utils/request.js";

export function getList() {
  return new Promise((resolve, reject) => {
    request({
      url: `/user/shopTgList`,
    }).then((res) => {
      resolve(res);
    });
  });
}

export function getbullet() {
  return new Promise((resolve, reject) => {
    request({
      url: `/user/bannerText`,
    }).then((res) => {
      resolve(res.data);
    });
  });
}

export function contactAdd(data) {
  return new Promise((resolve, reject) => {
    request({
      url: `/user/ContactAdd`,
	  method: 'POST',
	  data:JSON.stringify(data),
    }).then((res) => {
      resolve(res.data);
    });
  });
}