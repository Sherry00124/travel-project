<template>
	<view class="content" >
		
		<u-tabbar :value="currentTab" :placeholder="false" :safeAreaInsetBottom="true" class="tab-bar"
			activeColor="#55aaff" :border="false" >
			<u-tabbar-item @click="click1" v-if="switchTab[0].name=='商城'">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/shop_act.svg"></image>
					<text class="active-text">商城</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/shop_in.svg"></image>
					<text class="inactive-text">商城</text>
				</div>

			</u-tabbar-item>
			<u-tabbar-item @click="click1" v-else-if="switchTab[0].name=='攻略'">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/edit_act.svg"></image>
					<text class="active-text">攻略</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/edit_in.svg"></image>
					<text class="inactive-text">攻略</text>
				</div>

			</u-tabbar-item>
			<u-tabbar-item @click="click1" v-else-if="switchTab[0].name=='我的'">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/user_act.svg"></image>
					<text class="active-text">我的</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/user_in.svg"></image>
					<text class="inactive-text">我的</text>
				</div>

			</u-tabbar-item>
			<u-tabbar-item @click="click1" v-if="switchTab[1].name=='商城'">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/shop_act.svg"></image>
					<text class="active-text">商城</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/shop_in.svg"></image>
					<text class="inactive-text">商城</text>
				</div>
			
			</u-tabbar-item>
			<u-tabbar-item @click="click1" v-else-if="switchTab[1].name=='攻略'">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/edit_act.svg"></image>
					<text class="active-text">攻略</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/edit_in.svg"></image>
					<text class="inactive-text">攻略</text>
				</div>
			
			</u-tabbar-item>
			<u-tabbar-item @click="click1" v-else-if="switchTab[1].name=='我的'">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/user_act.svg"></image>
					<text class="active-text">我的</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/user_in.svg"></image>
					<text class="inactive-text">我的</text>
				</div>
			
			</u-tabbar-item>
			<u-tabbar-item @click="click1" v-if="switchTab[2].name=='商城'">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/shop_act.svg"></image>
					<text class="active-text">商城</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/shop_in.svg"></image>
					<text class="inactive-text">商城</text>
				</div>
			
			</u-tabbar-item>
			<u-tabbar-item @click="click1" v-else-if="switchTab[2].name=='攻略'">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/edit_act.svg"></image>
					<text class="active-text">攻略</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/edit_in.svg"></image>
					<text class="inactive-text">攻略</text>
				</div>
			
			</u-tabbar-item>
			<u-tabbar-item @click="click1" v-else-if="switchTab[2].name=='我的'">
				<div class="tabbar-icon flex-column" slot="active-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/user_act.svg"></image>
					<text class="active-text">我的</text>
				</div>
				<div class="tabbar-icon flex-column" slot="inactive-icon">
					<image class="u-page__item__slot-icon" src="/static/tabbar/user_in.svg"></image>
					<text class="inactive-text">我的</text>
				</div>
			
			</u-tabbar-item>
		</u-tabbar>
		
	</view>
</template>

<script>
	import {
		getNavList
	} from '@/api/nav.js'
	export default {
		name: 'tabbar',
		props: ['currentTab'],
		data() {
			return {
				title: 'Hello',
				value1: 0,
				switchTab: [{
            "id": 1,
            "name": "商城",
            "orderby": 1,
            "created_at": "2023-12-25 08:07:05",
            "link": "pages/index/shop"
        },
        {
            "id": 2,
            "name": "攻略",
            "orderby": 2,
            "created_at": "2023-12-25 08:07:19",
            "link": "pages/index/guide"
        },
        {
            "id": 3,
            "name": "我的",
            "orderby": 3,
            "created_at": "2023-12-25 08:07:37",
            "link": "pages/index/user"
        }]
			}
		},
		mounted() {
			this.getTabbarList()
		},
		methods: {
			click1(e) {
				uni.switchTab({
					url: '/' + this.switchTab[e].link
				})
			},
			getTabbarList() {
				getNavList().then(res => {
					console.log(res)
					this.switchTab = res
				})
			}
		}
	}
</script>

<style>
	.u-page__item__slot-icon {
		width: 60rpx;
	}

	.tabbar-icon {
		height: 100rpx;
		font-size: 24rpx;
		align-items: center;
	}

	.active-text {
		color: #FACC15
	}

	.inactive-text {
		color: #C7C7CC;
	}
</style>