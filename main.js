import App from './App'
// main.js
import config from './common/config.js'
import uView from "uview-ui";
Vue.use(uView);

if (process.env.NODE_ENV === 'development') {
	config.baseURL = "http://111.229.146.166/api"
} else {
	config.baseURL = "http://8.134.210.121/api"
}

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif