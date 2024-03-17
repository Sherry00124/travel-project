<template>
	<view class="page flex-col">
		<view class="group_1 flex-col">
			<view class="image-wrapper_1 flex-col">
				<image class="image_1" src="/static/landingPage/2/text1.png" mode="aspectFit" />
				<image class="image_2" src="/static/landingPage/2/text2.png" mode="aspectFit" />
				<video class="video"
					src="https://video.wixstatic.com/video/c338c6_3d6beaeabf3645ca802ca11b40030e61/1080p/mp4/file.mp4"
					controls autoplay loop muted style="display: none;"></video>
			</view>

			<view class="group_2 flex-col">
				<text class="paragraph_1">TRAVEL CHOICE</text>
				<text class="text_1">亮点产品介绍</text>
				<text class="text_2">泰国夜生活 特色街区</text>
				<text
					class="paragraph_2">曼谷最经典的夜生活线路，最好的泰浴MARIA，打开新世界的大门。最有名的GOGOBAR街区NANA，体验世界级景点的开放与激情；公开的地下选妃市场蛇美，感受市场交易。全都是最具代表性的点位。</text>
				<view class="grid_1 flex-row">
					<view class="text-wrapper_1 flex-col">
						<text class="text_3">曼谷夜生活</text>
					</view>
					<view class="text-wrapper_2 flex-col">
						<text class="text_4">泰浴MARIA</text>
					</view>
					<view class="text-wrapper_3 flex-col">
						<text class="text_5">GOGOBAR街区</text>
					</view>
					<view class="text-wrapper_4 flex-col">
						<text class="text_6">地下选妃市场</text>
					</view>
					<view class="group_3 flex-row" @click="book">
						<text class="text_7">立即订制</text>
						<image class="image_3" src="/static/landingPage/2/arrow.png" mode="widthFix" />
					</view>
					<view class="group_4 flex-row" @click="book">
						<text class="text_8">立即订制</text>
						<image class="image_4" src="/static/landingPage/2/arrow.png" mode="widthFix" />
					</view>
					<view class="group_5 flex-row" @click="book">
						<text class="text_9">立即订制</text>
						<image class="image_5" src="/static/landingPage/2/arrow.png" mode="widthFix" />
					</view>
					<view class="group_6 flex-row" @click="book">
						<text class="text_10">立即订制</text>
						<image class="image_6" src="/static/landingPage/2/arrow.png" mode="widthFix" />
					</view>
				</view>
				<view class="text-wrapper_5 flex-row">
					<text class="text_11">邂逅泰国</text>
					<text class="text_12">私人订制</text>
					<text class="text_13">品质服务</text>
				</view>
				<view class="block_1 flex-row">
					<view class="section_1 flex-col"></view>
					<view class="section_2 flex-col"></view>
					<view class="section_3 flex-col"></view>
				</view>
				<view class="text-wrapper_6 flex-row justify-between">
					<text class="paragraph_3">2024年走出去看世界 5折套餐随你挑</text>
					<text class="paragraph_4">尽享受多彩世界， 多样选择，为您量身定做</text>
					<text class="text_14">套系尊荣服务</text>
				</view>
				<view class="block_2 flex-col">
					<text class="paragraph_5">
					原来 
					我寻觅的远方 
					就在这里！</text>
					<text class="paragraph_6">住宿+美食+体验+CCO服务，沙美岛一日游</text>
					<view class="box_1 flex-row justify-between">
						<text class="text_15">198</text>
						<view class="text-wrapper_7 flex-col justify-between">
							<text class="text_16">RMB</text>
							<text class="text_17">元/人起</text>
						</view>
					</view>
				</view>
				<text class="text_18">SEX CENTER</text>
				<text class="text_19">GOGOBAR街区</text>
				<text class="text_20">芭提雅最经典夜生活线路</text>
				<text class="paragraph_7">芭提雅最经典夜生活线路。世界级景区步行街，也是规模惊人的GOGOBAR街区，这里的一切都诠释着SEX CENTER的意义。好莱坞，无敌打野酒吧，大胆搭讪，大胆喝酒，大胆蹦迪，大胆询价吧。</text>
				<view class="block_3 flex-row">
					<image class="image_7" src="/static/landingPage/2/pic5.png" mode="aspectFit" />
					<view class="group_7 flex-col">
						<text class="text_21">曼谷夜生活</text>
						<image class="image_8" src="/static/landingPage/2/line.png" mode="aspectFit" />
						<text class="text_22">推荐线路</text>
						<view class="text-wrapper_8 flex-row">
							<view class="" style="display: flex;width: 80%;justify-content: space-between;">
								<text class="text_23">119元/人起</text>
								<text class="text_24">点击查询</text>
							</view>

						</view>
					</view>
				</view>
				<view class="block_4 flex-row">
					<view class="box_2 flex-row">
						<view class="text-group_1 flex-col justify-between">
							<text class="text_25">泰浴MARIA</text>
							<text class="text_26">119元/人起</text>
						</view>
					</view>
					<view class="box_3 flex-row">
						<view class="text-group_2 flex-col justify-between">
							<text class="text_27">GOGOBAR街区</text>
							<text class="text_28">119元/人起</text>
						</view>
					</view>
					<view class="box_4 flex-row">
						<view class="text-group_3 flex-col justify-between">
							<text class="text_29">地下选妃市场</text>
							<text class="text_30">119元/人起</text>
						</view>
					</view>
				</view>
				<image class="image_9" src="/static/landingPage/2/banner3.png" mode="aspectFit" />
				<image class="image_10" src="/static/landingPage/2/border.png"
					mode="aspectFit" />
				<view class="block_5 flex-col"></view>
			</view>
		</view>
		<u-popup :show="show" @close="show=false" mode="center">
			<view style="padding: 2rem;width: 35rem;font-size: 3.2rem;">
				<u--form labelPosition="top" :model="model1" :rules="rules" ref="uForm"labelWidth="65">
					<u-form-item label="称呼" prop="userInfo.name" borderBottom ref="item1">
						<u--input v-model="model1.userInfo.name" border="none"></u--input>
					</u-form-item>
					<u-form-item label="联系方式" prop="userInfo.mobile" borderBottom ref="item1">
						<u--input v-model="model1.userInfo.mobile" border="none"></u--input>
					</u-form-item>
					<u-form-item label="目的地" prop="userInfo.destination" borderBottom ref="item1">
						<u--input v-model="model1.userInfo.destination" border="none"></u--input>
					</u-form-item>
					<button style="margin-top: 2rem;background-color: coral;color: #fff;font-size: 1rem;" @click="submit">提交</button>
				</u--form>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {contactAdd} from '@/api/landingPage.js'
	export default {
		data() {
			return {
				show: false,
				model1: {
					userInfo: {
						name: '',
						mobile: '',
						destination:''
					},
				},
				rules: {
					'userInfo.name': {
						type: 'string',
						required: true,
						message: '请填写姓名',
						trigger: ['blur', 'change']
					},
					'userInfo.mobile': {
						type: 'string',
						required: true,
						message: '请填写手机号',
						trigger: ['blur', 'change']
					},
					'userInfo.destination': {
						type: 'string',
						required: true,
						message: '请填写目的地',
						trigger: ['blur', 'change']
					},
				},
			}
		},
		onLaunch() {
			// this.setCustomViewport();
		},
		onShow() {
			const screenWidth = window.screen.width;
			let baseFontSize;

			baseFontSize = screenWidth / 1920 * 16

			document.documentElement.style.fontSize = baseFontSize + 'px';

			setTimeout(() => {
				var video = document.querySelector(".video");
				video.style.display = "block";
				// video.load(); // 手动触发视频加载
			}, 1500)
			
		},
		methods: {
			book() {
				this.show = true
			},submit(){
				contactAdd(this.model1.userInfo).then(res=>{
					this.show=false
				})
			}
		}
	}
</script>

<style scoped>
	:root {
		font-size: 16px;
		/* 设置基准字体大小 */
	}

	@media screen and (max-width: 768px) {
		:root {
			font-size: 14px;
			/* 假设小屏幕设备的基准字体大小为14px */
		}

	}

	/* 使用rem单位来表示尺寸 */
	.page {
		position: relative;
		width: 120rem;
		/* 1920px / 16px */
		height: 262.5rem;
		/* 4200px / 16px */
		overflow: hidden;
	}

	.group_1 {
		width: 120rem;
		height: 262.5rem;
		/* background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/3f8b0a7131dff8b9449c4af1bebf27a0) 100% no-repeat;
		background-size: 100% 100%; */
	}

	.image-wrapper_1 {
		width: 100vw;
		/* 设置宽度等于视口宽度 */
		height: 51.5rem;
		/* 设置高度为自适应 */

		background: url('/static/landingPage/2/banner1.png') 100% no-repeat;
		background-size: 100% 100%;
		/* 背景图像以包含的方式填充元素 */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
	}

	/* 使用rem单位来表示尺寸 */
	.image_1 {
		width: 71.31rem;
		/* 1141px / 16px */
		height: 8.94rem;
		/* 143px / 16px */
		/* margin: 13.25rem 0 0 24.81rem; /* 212px / 16px, 397px / 16px */

	}

	.image_2 {
		width: 53.69rem;
		/* 859px / 16px */
		height: 4.44rem;
		/* 71px / 16px */
		margin-top: 6.56rem;
		/* margin: 6.56rem 0 18.31rem 33.69rem; /* 105px / 16px, 293px / 16px, 539px / 16px */
	}

	.group_2 {
		position: relative;
		width: 100vw;
		/* height: 211rem; */
		/* margin-bottom: 1px; */
		justify-content: center;
		align-items: center;
	}

	.paragraph_1 {
		color: rgba(8, 1, 3, 1);
		font-size: 1.63rem;
		/* 26px / 16 ≈ 1.63rem */
		font-weight: normal;
		text-align: left;
		line-height: 0.625rem;
		/* 10px / 16 ≈ 0.625rem */
		margin-top: 5.69rem;
	}

	.text_1 {
		width: 19.06rem;
		/* 305px / 16 ≈ 19.06rem */
		height: 3.06rem;
		/* 49px / 16 ≈ 3.06rem */
		overflow-wrap: break-word;
		color: rgba(8, 1, 3, 1);
		font-size: 3.06rem;
		/* 49px / 16 ≈ 3.06rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		line-height: 0.625rem;
		/* 10px / 16 ≈ 0.625rem */
		margin: 1.75rem 0 0.25rem 0;
		/* 12px / 16 ≈ 0.75rem, 800px / 16 ≈ 50rem */
	}

	.text_2 {
		width: 15.25rem;
		/* 244px / 16 ≈ 15.25rem */
		height: 1.69rem;
		/* 27px / 16 ≈ 1.69rem */
		overflow-wrap: break-word;
		color: rgba(8, 1, 3, 1);
		font-size: 1.63rem;
		/* 26px / 16 ≈ 1.63rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: center;
		line-height: 0.625rem;
		/* 10px / 16 ≈ 0.625rem */
		margin-top: 0.88rem;
		/* 14px / 16 ≈ 0.88rem, 836px / 16 ≈ 52.25rem */
	}


	.paragraph_2 {
		width: 77.625rem;
		/* 1242px / 16 ≈ 77.625rem */
		color: rgba(43, 44, 48, 1);
		font-size: 1.875rem;
		/* 30px / 16 ≈ 1.875rem */
		font-family: SourceHanSansCN-Medium;
		font-weight: 500;
		text-align: center;
		line-height: 2.875rem;
		/* 30px / 16 ≈ 1.875rem */
		margin-top: 2.063rem;
		/* 33px / 16 ≈ 2.063rem, 338px / 16 ≈ 21.125rem */

	}



	.grid_1 {
		width: 65.688rem;
		/* 1035px / 16 ≈ 64.688rem */
		height: 28.75rem;
		/* 460px / 16 ≈ 28.75rem */
		flex-wrap: wrap;
		margin-top: 3.625rem;
	}

	.text-wrapper_1 {
		height: 23.625rem;
		/* 378px / 16 ≈ 23.625rem */
		background: url("/static/landingPage/2/pic1.png") 100% no-repeat;
		background-size: 100% 100%;
		width: 15.438rem;
		/* 247px / 16 ≈ 15.438rem */
		margin: 0 0.938rem 1rem 0;
		align-items: center;
	}

	.text_3 {
		width: 7rem;
		/* 112px / 16 ≈ 7rem */
		height: 1.438rem;
		/* 23px / 16 ≈ 1.438rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		margin-top: 20.375rem;
		/* 326px / 16 ≈ 20.375rem, 66px / 16 ≈ 4.125rem */
	}


	.text-wrapper_2 {
		height: 23.625rem;
		/* 378px / 16 ≈ 23.625rem */
		background: url("/static/landingPage/2/pic2.png") 100% no-repeat;
		background-size: 100% 100%;
		width: 15.438rem;
		/* 247px / 16 ≈ 15.438rem */
		margin: 0 0.938rem 1rem 0;
		/* 0 15px / 16 ≈ 0 0.938rem, 16px / 16 ≈ 1rem */
		align-items: center;
	}

	.text_4 {
		width: 7.563rem;
		/* 121px / 16 ≈ 7.563rem */
		height: 1.438rem;
		/* 23px / 16 ≈ 1.438rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.375rem;
		margin-top: 20.375rem;
		/* 326px / 16 ≈ 20.375rem, 58px / 16 ≈ 3.625rem */
	}

	.text-wrapper_3 {
		height: 23.625rem;
		/* 378px / 16 ≈ 23.625rem */
		background: url("../../../static/landingPage/2/pic3.png") 100% no-repeat;
		background-size: 100% 100%;
		width: 15.438rem;
		/* 247px / 16 ≈ 15.438rem */
		margin: 0 1.063rem 1rem 0;
		/* 0 17px / 16 ≈ 0 1.063rem, 16px / 16 ≈ 1rem */
		align-items: center;
	}

	.text_5 {
		width: 9.938rem;
		/* 159px / 16 ≈ 9.938rem */
		height: 1.438rem;
		/* 23px / 16 ≈ 1.438rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.375rem;
		margin-top: 20.313rem;
		/* 325px / 16 ≈ 20.313rem, 44px / 16 ≈ 2.75rem */
	}

	.text-wrapper_4 {
		height: 23.625rem;
		/* 378px / 16 ≈ 23.625rem */
		background: url("../../../static/landingPage/2/pic4.png") 100% no-repeat;
		background-size: 100% 100%;
		margin-bottom: 1rem;
		/* 16px / 16 ≈ 1rem */
		width: 15.438rem;
		/* 247px / 16 ≈ 15.438rem */
		align-items: center;
	}

	.text_6 {
		width: 8.438rem;
		/* 135px / 16 ≈ 8.438rem */
		height: 1.438rem;
		/* 23px / 16 ≈ 1.438rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.375rem;
		margin-top: 20.375rem;
		/* 326px / 16 ≈ 20.375rem, 54px / 16 ≈ 3.375rem */
	}

	.group_3 {
		width: 15.313rem;
		/* 245px / 16 ≈ 15.313rem */
		height: 4.125rem;
		/* 66px / 16 ≈ 4.125rem */
		background: url('../../../static/landingPage/2/btn1.png') 100% no-repeat;
		background-size: 100% 100%;
		margin: 1rem 0;
		/* 0 17px / 16 ≈ 0 1.063rem, 16px / 16 ≈ 1rem */
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.text_7 {
		color: rgba(255, 255, 255, 1);
		/* 不变 */
		font-size: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
	}

	.image_3 {
		width: 0.875rem;
		/* 14px / 16 ≈ 0.875rem */
		height: 1.5rem;
		/* 24px / 16 ≈ 1.5rem */
		/* margin: 21px 57px 0 0; */
	}

	.group_4 {
		width: 15.313rem;
		/* 245px / 16 ≈ 15.313rem */
		height: 4.125rem;
		/* 66px / 16 ≈ 4.125rem */
		background: url('../../../static/landingPage/2/btn2.png') 100% no-repeat;
		/* 不变 */
		background-size: 100% 100%;
		/* 不变 */
		margin: 1rem 1.063rem 1rem 1rem;
		/* 17px / 16 ≈ 1.063rem */
		display: flex;
		/* 不变 */
		align-items: center;
		/* 不变 */
		justify-content: center;
		/* 不变 */
		cursor: pointer;
	}

	.text_8 {
		color: rgba(255, 255, 255, 1);
		/* 不变 */
		font-size: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
	}

	.image_4 {
		width: 0.875rem;
		/* 14px / 16 ≈ 0.875rem */
		height: 1.5rem;
		/* 24px / 16 ≈ 1.5rem */
		/* margin: 21px 57px 0 0; */
	}

	.group_5 {
		width: 15.313rem;
		/* 245px / 16 ≈ 15.313rem */
		height: 4.125rem;
		/* 66px / 16 ≈ 4.125rem */
		background: url('../../../static/landingPage/2/btn3.png') 100% no-repeat;
		/* 不变 */
		background-size: 100% 100%;
		/* 不变 */
		margin: 1rem 1.063rem 0rem 0rem;
		/* 17px / 16 ≈ 1.063rem */
		display: flex;
		/* 不变 */
		align-items: center;
		/* 不变 */
		justify-content: center;
		/* 不变 */
		cursor: pointer;
	}

	.text_9 {
		color: rgba(255, 255, 255, 1);
		/* 不变 */
		font-size: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
	}


	.image_5 {
		width: 0.875rem;
		/* 14px / 16 ≈ 0.875rem */
		height: 1.5rem;
		/* 24px / 16 ≈ 1.5rem */
		/* margin: 21px 57px 0 0; */
	}

	.group_6 {
		width: 15.313rem;
		/* 245px / 16 ≈ 15.313rem */
		height: 4.125rem;
		/* 66px / 16 ≈ 4.125rem */
		background: url('../../../static/landingPage/2/btn4.png') 100% no-repeat;
		/* 不变 */
		background-size: 100% 100%;
		/* 不变 */
		margin: 1rem 0;
		/* 16px / 16 = 1rem */
		cursor: pointer;
	}

	.text_10 {
		width: 5.563rem;
		/* 89px / 16 ≈ 5.563rem */
		height: 1.438rem;
		/* 23px / 16 ≈ 1.438rem */
		overflow-wrap: break-word;
		/* 不变 */
		color: rgba(255, 255, 255, 1);
		/* 不变 */
		font-size: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		font-family: MicrosoftYaHei;
		/* 不变 */
		font-weight: normal;
		/* 不变 */
		text-align: left;
		/* 不变 */
		white-space: nowrap;
		/* 不变 */
		line-height: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		margin: 1.375rem 0 0 4.063rem;
		/* 22px / 16 ≈ 1.375rem, 65px / 16 ≈ 4.063rem */
	}


	.image_6 {
		width: 0.875rem;
		/* 14px / 16 ≈ 0.875rem */
		height: 1.5rem;
		/* 24px / 16 ≈ 1.5rem */
		margin-top: 1.313rem;
		/* 21px / 16 ≈ 1.313rem, 57px / 16 ≈ 3.563rem, 20px / 16 ≈ 1.25rem */
	}

	.text-wrapper_5 {
		width: 63.313rem;
		/* 1013px / 16 ≈ 63.313rem */
		height: 3.313rem;
		/* 53px / 16 ≈ 3.313rem */
		margin-top: 6.25rem;
	}

	.text_11,
	.text_12,
	.text_13 {
		width: 13.125rem;
		/* 210px / 16 ≈ 13.125rem */
		height: 3.313rem;
		/* 52px / 16 ≈ 3.313rem */
		overflow-wrap: break-word;
		/* 不变 */
		color: rgba(226, 6, 48, 1);
		/* 不变 */
		font-size: 3.313rem;
		/* 53px / 16 ≈ 3.313rem */
		font-family: MicrosoftYaHei;
		/* 不变 */
		font-weight: normal;
		/* 不变 */
		text-align: left;
		/* 不变 */
		white-space: nowrap;
		/* 不变 */
		line-height: 3.313rem;
		/* 53px / 16 ≈ 3.313rem */
	}

	.text_12 {
		margin: 0.063rem 0 0 11.063rem;
		/* 1px / 16 ≈ 0.063rem, 177px / 16 ≈ 11.063rem */
	}

	.text_13 {
		margin-left: 12.875rem;
		/* 206px / 16 ≈ 12.875rem */
	}


	.block_1 {
		width: 61.375rem;
		/* 982px / 16 ≈ 61.375rem */
		height: 0.375rem;
		/* 6px / 16 ≈ 0.375rem */
		margin: 1.688rem 0 0 -1.8rem;
		/* 27px / 16 ≈ 1.688rem, 420px / 16 ≈ 26.25rem */
	}

	.section_1 {
		background-color: rgba(225, 7, 49, 1);
		width: 11.188rem;
		/* 179px / 16 ≈ 11.188rem */
		height: 0.375rem;
		/* 6px / 16 ≈ 0.375rem */
	}

	.section_2 {
		background-color: rgba(225, 7, 49, 1);
		width: 11.188rem;
		/* 179px / 16 ≈ 11.188rem */
		height: 0.375rem;
		/* 6px / 16 ≈ 0.375rem */
		margin-left: 13rem;
		/* 208px / 16 ≈ 13rem */
	}

	.section_3 {
		background-color: rgba(225, 7, 49, 1);
		width: 11.188rem;
		/* 179px / 16 ≈ 11.188rem */
		height: 0.375rem;
		/* 6px / 16 ≈ 0.375rem */
		margin-left: 14.813rem;
		/* 237px / 16 ≈ 14.813rem */
	}


	.text-wrapper_6 {
		width: 57.75rem;
		/* 924px / 16 ≈ 57.75rem */
		height: 3.313rem;
		/* 53px / 16 ≈ 3.313rem */
		margin-top: 1.5rem;
		/* 24px / 16 ≈ 1.5rem */
	}


	.paragraph_3 {
		width: 11.875rem;
		/* 190px / 16 ≈ 11.875rem */
		height: 3.313rem;
		/* 53px / 16 ≈ 3.313rem */
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 1.25rem;
		/* 20px / 16 ≈ 1.25rem */
		font-family: SourceHanSansCN-Medium;
		font-weight: 500;
		text-align: left;
		line-height: 2.063rem;
		/* 33px / 16 ≈ 2.063rem */
		margin-left: -2.5rem;
	}


	.paragraph_4 {
		width: 13.688rem;
		/* 219px / 16 ≈ 13.688rem */
		height: 3.125rem;
		/* 50px / 16 ≈ 3.125rem */
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 1.25rem;
		/* 20px / 16 ≈ 1.25rem */
		font-family: SourceHanSansCN-Medium;
		font-weight: 500;
		text-align: left;
		line-height: 1.875rem;
		/* 30px / 16 ≈ 1.875rem */
		margin-left: 12.375rem;
		/* 198px / 16 ≈ 12.375rem */
	}

	.text_14 {
		width: 7.438rem;
		/* 119px / 16 ≈ 7.438rem */
		height: 1.25rem;
		/* 20px / 16 ≈ 1.25rem */
		overflow-wrap: break-word;
		color: rgba(0, 0, 0, 1);
		font-size: 1.25rem;
		/* 20px / 16 ≈ 1.25rem */
		font-family: SourceHanSansCN-Medium;
		font-weight: 500;
		text-align: left;
		white-space: nowrap;
		line-height: 1.25rem;
		/* 20px / 16 ≈ 1.25rem */
		margin-left: 12.375rem;
		/* 198px / 16 ≈ 12.375rem */
	}


	.block_2 {
		width: 120rem;
		/* 1920px / 16 ≈ 120rem */
		height: 28.563rem;
		/* 457px / 16 ≈ 28.563rem */
		background: url('../../../static/landingPage/2/banner2.png') 100% no-repeat;
		background-size: 100% 100%;
		margin-top: 2.75rem;
		/* 44px / 16 ≈ 2.75rem */

	}

	.paragraph_5 {
		/* width: 17.938rem; */
		/* 287px / 16 ≈ 17.938rem */
		height: 10.188rem;
		/* 163px / 16 ≈ 10.188rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 3rem;
		/* 48px / 16 ≈ 3rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		line-height: 3rem;
		/* 48px / 16 ≈ 3rem */
		margin: 7.438rem 0 0 77.938rem;
		/* 119px / 16 ≈ 7.438rem, 1247px / 16 ≈ 77.938rem */
	}

	.paragraph_6 {
		width: 17.813rem;
		/* 285px / 16 ≈ 17.813rem */
		height: 3.063rem;
		/* 49px / 16 ≈ 3.063rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		line-height: 1.575rem;
		/* 22px / 16 ≈ 1.375rem */
		margin: 1.688rem 0 0 78.313rem;
		/* 27px / 16 ≈ 1.688rem, 1253px / 16 ≈ 78.313rem */
	}

	.box_1 {
		width: 9.625rem;
		/* 154px / 16 ≈ 9.625rem */
		height: 2.75rem;
		/* 44px / 16 ≈ 2.75rem */
		margin: 1.5rem 0 0 85.438rem;
		/* 24px / 16 ≈ 1.5rem, 1367px / 16 ≈ 85.438rem */
	}

	.text_15 {
		width: 5.125rem;
		/* 82px / 16 ≈ 5.125rem */
		height: 2.75rem;
		/* 44px / 16 ≈ 2.75rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 3.375rem;
		/* 54px / 16 ≈ 3.375rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 3.375rem;
		/* 54px / 16 ≈ 3.375rem */
	}

	.text-wrapper_7 {
		width: 4rem;
		/* 64px / 16 ≈ 4rem */
		height: 2.5rem;
		/* 40px / 16 ≈ 2.5rem */
		margin: 0.188rem 0 0 1rem;
		/* 3px / 16 ≈ 0.188rem */
	}

	.text_16 {
		/* width: 3.063rem; */
		/* 49px / 16 ≈ 3.063rem */
		/* height: 1.188rem; */
		/* 19px / 16 ≈ 1.188rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		margin-left: 0.063rem;
		/* 1px / 16 ≈ 0.063rem */
	}

	.text_17 {
		width: 4rem;
		/* 64px / 16 ≈ 4rem */
		height: 1.125rem;
		/* 18px / 16 ≈ 1.125rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.125rem;
		/* 18px / 16 ≈ 1.125rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.125rem;
		/* 18px / 16 ≈ 1.125rem */
		margin-top: 0.188rem;
		/* 3px / 16 ≈ 0.188rem */
	}


	.text_18 {
		width: 9.563rem;
		/* 153px / 16 ≈ 9.563rem */
		height: 1.375rem;
		/* 22px / 16 ≈ 1.375rem */
		overflow-wrap: break-word;
		color: rgba(8, 1, 3, 1);
		font-size: 1.625rem;
		/* 26px / 16 ≈ 1.625rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		line-height: 0.625rem;
		/* 10px / 16 ≈ 0.625rem */
		margin: 4.125rem 0 0 0;
		/* 66px / 16 ≈ 4.125rem, 882px / 16 ≈ 55.125rem */
	}

	.text_19 {
		width: 22.375rem;
		/* 310px / 16 ≈ 19.375rem */
		height: 3rem;
		/* 48px / 16 ≈ 3rem */
		overflow-wrap: break-word;
		color: rgba(8, 1, 3, 1);
		font-size: 3.013rem;
		/* 49px / 16 ≈ 3.063rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		line-height: 0.625rem;
		/* 10px / 16 ≈ 0.625rem */
		margin: 2.35rem 0 0 0;
		/* 4px / 16 ≈ 0.25rem, 804px / 16 ≈ 50.25rem */
	}

	.text_20 {
		width: 18.125rem;
		/* 290px / 16 ≈ 18.125rem */
		height: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		overflow-wrap: break-word;
		color: rgba(8, 1, 3, 1);
		font-size: 1.625rem;
		/* 26px / 16 ≈ 1.625rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		line-height: 0.625rem;
		/* 10px / 16 ≈ 0.625rem */
		margin: 0.625rem 0 0 0;
		/* 10px / 16 ≈ 0.625rem, 814px / 16 ≈ 51.125rem */
	}

	.paragraph_7 {
		width: 74.875rem;
		/* 1198px / 16 ≈ 74.875rem */
		height: 5.188rem;
		/* 83px / 16 ≈ 5.188rem */
		overflow-wrap: break-word;
		color: rgba(43, 44, 48, 1);
		font-size: 1.875rem;
		/* 30px / 16 ≈ 1.875rem */
		font-family: SourceHanSansCN-Medium;
		font-weight: 500;
		text-align: center;
		line-height: 2.875rem;
		/* 30px / 16 ≈ 1.875rem */
		margin: 3.125rem 0 0 0;
		/* 50px / 16 ≈ 3.125rem, 360px / 16 ≈ 22.5rem */
	}


	.block_3 {
		width: 77.313rem;
		/* 1237px / 16 ≈ 77.313rem */
		height: 16.125rem;
		/* 258px / 16 ≈ 16.125rem */
		border: 0.188rem solid rgba(3, 145, 222, 1);
		/* 3px / 16 ≈ 0.188rem */
		margin: 5.438rem 0 0 0;
		/* 87px / 16 ≈ 5.438rem, 340px / 16 ≈ 21.25rem */
	}

	.image_7 {
		width: 45.375rem;
		/* 726px / 16 ≈ 45.375rem */
		height: 15.063rem;
		/* 241px / 16 ≈ 15.063rem */
		margin: 0.5rem 0 0 0;
		/* 8px / 16 ≈ 0.5rem, 10px / 16 ≈ 0.625rem */
	}

	.group_7 {
		width: 24.688rem;
		/* 395px / 16 ≈ 24.688rem */
		height: 12.75rem;
		/* 204px / 16 ≈ 12.75rem */
		margin: 2.063rem 0 0 2.375rem;
		/* 33px / 16 ≈ 2.063rem, 68px / 16 ≈ 4.25rem, 38px / 16 ≈ 2.375rem */

	}

	.text_21 {
		width: 16.063rem;
		/* 257px / 16 ≈ 16.063rem */
		height: 3.25rem;
		/* 52px / 16 ≈ 3.25rem */
		overflow-wrap: break-word;
		color: rgba(125, 125, 125, 1);
		font-size: 3.188rem;
		/* 51px / 16 ≈ 3.188rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 3.188rem;
		margin-left: 0.375rem;
		/* 6px / 16 ≈ 0.375rem */
	}

	.image_8 {
		width: 24.563rem;
		/* 393px / 16 ≈ 24.563rem */
		height: 0.625rem;
		/* 10px / 16 ≈ 0.625rem */
		margin: 0.313rem 0 0 0;
		/* 5px / 16 ≈ 0.313rem, 2px / 16 ≈ 0.125rem */
	}


	.text_22 {
		width: 7.25rem;
		/* 116px / 16 ≈ 7.25rem */
		height: 1.813rem;
		/* 29px / 16 ≈ 1.813rem */
		overflow-wrap: break-word;
		color: rgba(125, 125, 125, 1);
		font-size: 1.813rem;
		/* 29px / 16 ≈ 1.813rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.813rem;
		margin: 1.938rem 0 0 0;
		/* 31px / 16 ≈ 1.938rem, 5px / 16 ≈ 0.313rem */
	}

	.text-wrapper_8 {
		width: 24.688rem;
		/* 395px / 16 ≈ 24.688rem */
		height: 3.063rem;
		/* 49px / 16 ≈ 3.063rem */
		background: url("../../../static/landingPage/2/btn5.png") 100% no-repeat;
		background-size: 100% 100%;
		margin: 1.75rem 0 0 0;
		/* 28px / 16 ≈ 1.75rem */
		display: flex;
		justify-content: space-between;
	}

	.text_23 {
		width: 8.688rem;
		/* 139px / 16 ≈ 8.688rem */
		height: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.688rem;
		margin: 1.063rem 0 0 0;
		/* 17px / 16 ≈ 1.063rem, 17px / 16 ≈ 1.063rem */
	}

	.text_24 {
		width: 6.688rem;
		/* 107px / 16 ≈ 6.688rem */
		height: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.688rem;
		margin: 1.063rem 0 0 0;
		/* 11px / 16 ≈ 0.688rem, 53px / 16 ≈ 3.313rem, 79px / 16 ≈ 4.938rem */
	}

	.block_4 {
		width: 77.313rem;
		/* 1237px / 16 ≈ 77.313rem */
		height: 33.188rem;
		/* 531px / 16 ≈ 33.188rem */
		margin: 0.25rem 0 0 0;
		/* 4px / 16 ≈ 0.25rem, 340px / 16 ≈ 21.25rem */
	}

	.box_2 {
		width: 25.375rem;
		/* 406px / 16 ≈ 25.375rem */
		height: 33.188rem;
		/* 531px / 16 ≈ 33.188rem */
		background: url('/static/landingPage/2/pic6.png') 100% no-repeat;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
	}

	.text-group_1 {
		width: 12rem;
		/* 192px / 16 ≈ 12rem */
		height: 4.938rem;
		/* 79px / 16 ≈ 4.938rem */
		margin: 26.375rem 0 0 0;
		/* 422px / 16 ≈ 26.375rem, 98px / 16 ≈ 6.125rem */
	}

	.text_25 {
		width: 12rem;
		/* 192px / 16 ≈ 12rem */
		height: 2.188rem;
		/* 35px / 16 ≈ 2.188rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 2.25rem;
		/* 36px / 16 ≈ 2.25rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 2.25rem;
	}

	.text_26 {
		width: 8.688rem;
		/* 139px / 16 ≈ 8.688rem */
		height: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.688rem;
		margin: 1.063rem 0 0 0;
		/* 17px / 16 ≈ 1.063rem, 26px / 16 ≈ 1.625rem */
	}

	.box_3 {
		width: 25.375rem;
		/* 406px / 16 ≈ 25.375rem */
		height: 33.188rem;
		/* 531px / 16 ≈ 33.188rem */
		background: url('../../../static/landingPage/2/pic6.png') 100% no-repeat;
		background-size: 100% 100%;
		margin-left: 0.625rem;
		/* 10px / 16 ≈ 0.625rem */
		display: flex;
		justify-content: center;
	}

	.text-group_2 {
		width: 15.813rem;
		/* 253px / 16 ≈ 15.813rem */
		height: 4.938rem;
		/* 79px / 16 ≈ 4.938rem */
		margin: 26.375rem 0 0 0;
		/* 422px / 16 ≈ 26.375rem, 75px / 16 ≈ 4.688rem */
	}

	.text_27 {
		width: 15.813rem;
		/* 253px / 16 ≈ 15.813rem */
		height: 2.188rem;
		/* 35px / 16 ≈ 2.188rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 2.25rem;
		/* 36px / 16 ≈ 2.25rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 2.25rem;
	}

	.text_28 {
		width: 8.688rem;
		/* 139px / 16 ≈ 8.688rem */
		height: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.688rem;
		margin: 1.063rem 0 0 0;
		/* 17px / 16 ≈ 1.063rem, 58px / 16 ≈ 3.625rem */
	}

	.box_4 {
		width: 25.375rem;
		/* 406px / 16 ≈ 25.375rem */
		height: 33.188rem;
		/* 531px / 16 ≈ 33.188rem */
		background: url('../../../static/landingPage/2/pic8.png') 100% no-repeat;
		background-size: 100% 100%;
		margin-left: 0.563rem;
		/* 9px / 16 ≈ 0.563rem */
		display: flex;
		justify-content: center;
	}

	.text-group_3 {
		width: 13.438rem;
		/* 215px / 16 ≈ 13.438rem */
		height: 5rem;
		/* 80px / 16 ≈ 5rem */
		margin-top: 26.313rem;
		/* 421px / 16 ≈ 26.313rem, 89px / 16 ≈ 5.563rem */
	}

	.text_29 {
		width: 13.438rem;
		/* 215px / 16 ≈ 13.438rem */
		height: 2.25rem;
		/* 36px / 16 ≈ 2.25rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 2.25rem;
		/* 36px / 16 ≈ 2.25rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 2.25rem;
	}

	.text_30 {
		width: 8.688rem;
		/* 139px / 16 ≈ 8.688rem */
		height: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 1.688rem;
		/* 27px / 16 ≈ 1.688rem */
		font-family: MicrosoftYaHei;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 1.688rem;
		margin-top: 1.063rem;
		/* 17px / 16 ≈ 1.063rem, 44px / 16 ≈ 2.75rem */
	}

	.image_9 {
		width: 120rem;
		/* 1920px / 16 ≈ 120rem */
		height: 32.5rem;
		/* 520px / 16 ≈ 32.5rem */
		margin: 3.25rem 0 0 0;
		/* 52px / 16 ≈ 3.25rem */
	}

	.image_10 {
		position: absolute;
		/* left: 0; */
		top: 9.188rem;
		/* 147px / 16 ≈ 9.188rem */
		width: 26.25rem;
		/* 420px / 16 ≈ 26.25rem */
		height: 3.25rem;
		/* 52px / 16 ≈ 3.25rem */
	}

	.block_5 {
		border-radius: 0.625rem;
		/* 10px / 16 ≈ 0.625rem */
		position: absolute;
		top: 113rem;
		/* 1728px / 16 ≈ 108rem */
		width: 28.95rem;
		/* 420px / 16 ≈ 26.25rem */
		height: 3.25rem;
		/* 52px / 16 ≈ 3.25rem */
		background-image: url('/static/landingPage/2/border.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;

	}

	.flex-col {
		display: flex;
		flex-direction: column;
	}

	.video {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
		/* 保持视频比例并填充容器 */
	}
	/deep/.u-form-item__body__left__content__label,.u-input__content__field-wrapper__field{
		font-size: 1rem !important;
		height: 1.2rem !important;
	}
	/deep/.uni-input-input,.u-form-item__body__right__message{
		font-size: 1rem !important;
	}
	/deep/.u-form-item__body__right__message{
		font-size: 1rem !important;
	}
</style>