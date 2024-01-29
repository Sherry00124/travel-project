# lime-barrage 弹幕
- 基于uniapp vue3 弹幕
- 目前只是初版，可能存在BUG，只在H5和微信小程序上测试过

## 使用
- 导入插件后直接使用

```html
<view style="height:750rpx">
	<l-barrage 
		:data="barrageData">
		<!-- 自定义每条弹幕样式 content 为你传入的数据-->
		<template #default="{content}">
			<view class="bullet">{{content.text}}</view>
		</template>
	</l-barrage>
</view>
<view class="inputs">
	<input v-model="value" />
	<button @click="onFire">发射</button>
</view>
```
```js
const value = ref('')
const barrageData = ref([])
const onFire = () => {
	if (value.value) {
		barrageData.value.push({
			text: value.value
		})
		value.value = ''
	}
}
```

### 关于vue2的使用方式
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可,官方是把它单独成了一个文件.
```js
// main.js vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

- 另外插件也用到了TS，vue2可能会遇过官方的TS版本过低的问题,找到HX目录下的`compile-typescript`目录
```cmd
// \HBuilderX\plugins\compile-typescript
yarn add typescript -D
 - or - 
npm install typescript -D
```

- 微信小程序必须使用HX 3.7.12+，并且在`manifest.json`里设置 `slotMultipleInstance`
```json
 "mp-weixin" : {
    "slotMultipleInstance" : true
 },
```

```js
export default {
	data() {
		return {
			value: '',
			barrageData: []
		}
	},
	methods: {
		onFire() {
			if (this.value) {
				this.barrageData.push({
					text: this.value
				})
				this.value = ''
			}
		}
	}
}
```



### 查看示例
导入后直接使用这个标签查看演示效果，
```html
// 代码位于 uni_modules/lime-barrage/compoents/lime-barrage
<lime-barrage />
```


### 插件标签
- 默认 l-barrage 为 component
- 默认 lime-barrage 为 demo



## API

### Props

| 参数                       | 说明                                                         | 类型             | 默认值       |
| --------------------------| ------------------------------------------------------------ | ---------------- | ------------ |
| pause                   | 暂停                                                    | <em>boolean</em>  | `false`        |
| touchPause               | 触摸某条弹幕会暂停                                       | <em>boolean</em>  | `false`        |
| showArea               | 弹幕显示区域`all`、`top`、`middle`、`bottom`                  | <em>string</em>  | `all`        |
| trackHeight              | 每条弹幕高度                                              | <em>number</em>  | `20`        |
| speed                   | 弹幕速度                                              | <em>number</em>  | `5`        |
| defer                   | 弹幕延时                                              | <em>number</em>  | `0.5`        |
| data                   | 弹幕数据                                             | <em>array</em>  | `[]`        |
| loopCount                   | 播放次数                                             | <em>number</em>  | `1`        |


## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)