<template>
	<view>
		<view class="container"></view>
		<view class="login flex-column">
			<view class="login-body">
				<text style="align-items: center;font-size: 40rpx;font-weight: bold;margin-left: 230rpx;">注册</text>
				<u--form :model="form" :rules="rules" ref="uForm" labelPosition="top" labelWidth="100">
					<u-form-item label="用户名" prop="username">
						<u-input v-model="form.username">
							<template slot="prefix">
								<u-icon name="account-fill" size="20"></u-icon>
							</template>
						</u-input>
					</u-form-item>
					<u-form-item label="密码" prop="password">
						<u-input v-model="form.password">
							<template slot="prefix">
								<u-icon name="lock-fill" size="20"></u-icon>
							</template>
						</u-input>
					</u-form-item>
				</u--form>
				<view class="flex-column">
					<u-button @click="login"
						style="background-color: #FACC15;border-radius: 50rpx;margin-top: 40rpx;">注册</u-button>
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
	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				},
				rules: {
					username: [{
						required: true,
						message: '请输入用户名',
						trigger: ['blur', 'change']
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: ['blur', 'change']
					}]
				}
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
					uni.switchTab({
						url:'/pages/index/shop'
					})
				}).catch(errors => {
					uni.$u.toast('请输入用户名和密码')
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
	}
</style>