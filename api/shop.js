import request from "../utils/request.js";

export function getShopList(data) {
  return new Promise((resolve, reject) => {
    request({
      url: `/user/shopList`,
      method: "POST",
      data: data,
    }).then((res) => {
      resolve(res.data);
    });
  });
}

export function shopDetail(data) {
  return new Promise((resolve, reject) => {
    request({
      url: `/user/shopDetail?id=` + data,
      params: data,
    }).then((res) => {
      resolve(res.data);
    });
  });
}

export function shopNewList(data) {
  return new Promise((resolve, reject) => {
    request({
      url: `/user/shopNewList`,
      params: data,
    }).then((res) => {
      resolve(res.data);
    });
  });
}

export function getShopTgList() {
  return new Promise((resolve, reject) => {
    request({
      url: `/user/shopTgList`,
    }).then((res) => {
      console.log(res);
      resolve(res);
    });
  });
}
