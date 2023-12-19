<template>
	<view>
		<view class="container"></view>
		<view class="guide">
			<u-navbar title="攻略" :autoBack="true" bgColor="transparent">
			</u-navbar>
			<view class="guide-body flex-column">
				<text class="guide-body-title">{{title}}</text>
				<view class="flex-between" style="margin: 30rpx 0;">
					<view class="flex-row" style="align-items: center;">
						<view class="guide-body-avatar">
							<u-avatar text="北" fontSize="15" size="30" randomBgColor></u-avatar>
						</view>
						<text class="guide-body-author">{{author}}</text>
					</view>
					<text class="guide-body-time">{{time}}</text>
				</view>
			</view>
			<view class="guide-content flex-column">
				<text>这次的 大理 之行，算是一次说走就走的家庭旅行。 在 北京
				没来暖气的前一个月，每天在家码字冻得手脚冰凉的我，又开始羡慕起南方朋友们的幸福生活了。于是，一拍脑门，对着有网就可以上班的Candy和上幼儿园的小丫头大言不惭的承诺，走！带你们去个可以穿短袖的地方暖和暖和去！
				谁曾想，千算万算，算漏了 大理 的雨季，竟然真的可以整整一个星期每天都在下雨从未见过太阳。北方的孩子何时见过这种阵势啊？每天坐在窗口眼巴巴地望着窗外等雨停，民宿的小哥哥们总是善意的安慰， 大理
				每年十月份的雨季也就一周左右，已经下了好些天了，应该很快就会天晴了；然后，第二天的童颜的场景，一边安慰我们一边自言自语，今年的雨季好像确实是长了一点。很难适应的南方梅雨天，每天被雨淋湿冻得哆哆嗦嗦，惹得我被Candy嘲笑好几次，是谁说的要穿短袖晒太阳来着的？
				哼～ 虽然风花雪月统统都没见到，但是雨季的 大理 也是美得别有一番韵味啊！被水洗过的古城格外温润，远处雾蒙蒙的苍山洱海，脚下油亮亮的石板路，娇嫩花瓣上挂着晶莹莹的水滴，还有交错而过的一顶顶花雨伞～
				也留下了一些特别且美好的回忆，那些为了躲雨而走进的一间间美好小店，一杯热咖啡一块小甜点或者一碗香气腾腾的面条；还记得小丫头为一朵小花撑伞遮雨，完全不顾自己被淋湿；还记得我们在火炉旁边烤着火等雨停，却不小心烤糊了小丫头的袜子，然后满古城挨家店铺去买儿童袜子……
				这么多鲜活有趣的回忆，以及让人难得一见的雨季 大理 ，该是没有遗憾的一次旅行了～直到，我们离开 大理 的那一天，雨季结束了……
				在开往机场的路上，终于见到了久违的蓝天，我才后知后觉的发现，苍山也太美了吧！洱海也太蓝了吧！好看得让人想哭！ Candy问我，要不要把机票延一天，看看蓝天白云下的 大理
				？我说不用了，因为遗憾才更值得回忆，而且，这才是我们会再次回到 大理 的缘分！</text>
			<text class="guide-content-disclaimer">免责声明：本文来自平台创作者，不代表平台立场，如有侵权请联系平台删除</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "成都在做，幸福在右，人间烟火，理想生活 | 2020成都最新版游记",
				author: 'Kreloan',
				time: '2021-11-21'
			};
		}
	}
</script>

<style lang="scss">
	.guide {

		background-color: #F8F8F8;
		
		&-body {
			position: relative;
			z-index: 2;
			margin:0 40rpx;
			margin-top: 100rpx;

			&-title {
				font-weight: bold;
				color: #1C1C1E;
				font-size: 36rpx;
			}

			&-avatar {
				margin-right: 10rpx;
			}

			&-author {
				font-weight: 500;

				color: #3A3A3C;
				font-size: 28rpx;
			}

			&-time {
				font-size: 28rpx;
				font-weight: 500;
				color: #3A3A3C;
			}
		}

		&-content {
			background-color: #fff;
			border-radius: 24rpx;
			padding: 40rpx;
			position: relative;
			z-index: 2;
			font-size: 28rpx;
			color: #48484A;
			&-disclaimer{
				font-size: 28rpx;
				font-weight: 500;
				color: #AEAEB2;
				margin: 20rpx 0;
			}
		}
	}
</style>