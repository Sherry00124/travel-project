// @ts-nocheck
import {PropType} from 'vue';

export default {
	/**使用canvas渲染 暂不实现*/
	useCanvas: Boolean,
	pause: Boolean,
	touchPause: Boolean,
	/**弹幕展示区域*/
	showArea:{
		type: String as PropType<'all'|'top'|'middle'|'bottom'>,
		default: 'all'
	},
	/**每条轨道高度*/
	trackHeight: {
		type: Number,
		default: 20
	},
	/**速度*/
	speed: {
		type: Number,
		default: 5//10
	},
	/**延时*/
	defer: {
		type: Number,
		default: 0.5
	},
	data: {
		type: Array,
		default: []
	},
	lStyle: {
		type: String,
		default: ''
	},
	/**次数*/
	loopCount: {
		type: [Number, String],
		default: 1
	}
}