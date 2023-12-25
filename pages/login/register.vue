<template>
	<view>
		<view class="container"></view>
		<view class="login flex-column">
			<view class="login-body">
				<text style="align-items: center;font-size: 40rpx;font-weight: bold;margin-left: 230rpx;">注册</text>
				<u--form :model="form" :rules="rules" ref="uForm" labelPosition="top" labelWidth="100">
					<u-form-item label="用户名" prop="name">
						<u-input v-model="form.name">
							<template slot="prefix">
								<u-icon name="account-fill" size="20"></u-icon>
							</template>
						</u-input>
					</u-form-item>
					<u-form-item label="密码" prop="password">
						<u-input v-model="form.password" :password="password">
							<template slot="prefix">
								<u-icon name="lock-fill" size="20"></u-icon>
							</template>
							<template slot="suffix">
								<u-icon name="eye-fill" size="20" v-if="!password" @click="password=!password"></u-icon>
								<u-icon name="eye-off" size="20" v-else @click="password=!password"></u-icon>
							</template>
						</u-input>
					</u-form-item>
				</u--form>
				<view class="flex-column">
					<u-button @click="login"
						style="background-color: #FACC15;border-radius: 50rpx;margin-top: 40rpx;">注册</u-button>
					<view class="login-text">
						<view class="flex-row" width="10rpx">
							<view class="" style="margin-right: 10rpx;">
								<u-icon name="/static/order/check.svg" v-if="!ifCheck" @click="ifCheck=!ifCheck"></u-icon>
								<u-icon name="/static/order/checked.svg" v-else @click="ifCheck=!ifCheck"></u-icon>
							</view>
							我已阅读并同意
							<text style="color: #55aaff; text-decoration: none;" @click="toProtocol"><<用户注册协议>></text>
							并授权该
						</view>
						账户信息(如昵称、头像)进行统一管理
					</view>
					<view style="margin: 20rpx 0;">
						<u-line></u-line>
					</view>
					<u-button @click="register" style="border-radius: 50rpx;">登录</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {register} from '@/api/login'
	export default {
		data() {
			return {
				form: {
					name: '',
					password: ''
				},
				password:true,
				rules: {
					name: [{
						required: true,
						message: '请输入用户名',
						trigger: ['blur', 'change']
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: ['blur', 'change']
					}]
				},
				ifCheck: false,
			};
		},
		methods: {
			register() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
				
			},
			login() {
				this.$refs.uForm.validate().then(res => {
					if (this.ifCheck) {
						// uni.switchTab({
						// 	url: '/pages/index/shop'
						// })
						// register(this.form).then(res=>{
						// 	console.log(res)
						// })
						uni.request({
							url: "http://111.229.146.166/api/register",
							method: 'POST',
							data:this.form,
							success: (res) => {
								uni.hideLoading()
								console.log(res)
								// resolve(res)
							}
						})
					} else {
						uni.$u.toast('请勾选用户协议')
					}

				}).catch(errors => {
					uni.$u.toast('请输入用户名和密码')
				})
			},
			toProtocol() {
				uni.navigateTo({
					url: '/pages/protocols/protocols'
				})
			}
		}
	}
</script>

<style lang="scss">
	.login {
		padding: 40rpx;
		background-color: #F8F8F8;
		align-items: center;
		height: 100vh;

		&-body {
			margin-top: 200rpx;
			position: relative;
			z-index: 2;
			background-color: #fff;
			border-radius: 16rpx;
			padding: 40rpx;
			width: 80%;
		}

		&-text {
			font-size: 25rpx;
			color: #d3d3d3;
			margin-top: 20rpx;
		}
	}
</style>