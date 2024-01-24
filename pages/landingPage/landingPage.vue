<template>
  <view class="container flex-column">
    <view class="container-header">
      <div style="position: absolute; top: 30px; left: 25%">
        你有多久 <br /><span style="margin-left: 40rpx">没有好好</span>
        <br /><span style="margin-left: 60rpx">去旅行了？</span>
      </div>
    </view>
    <view class="container-body">
      <scroll-view scroll-y="true" class="scroll-view">
        <view class="container-body-item" v-for="(item, index) in list">
          <view class="container-body-item-header"> {{ item.type_tags }} </view>
          <div class="container-body-item-body flex-row">
            <img :src="item.images[0]" width="100" height="100" alt="" />
            <view class="flex-column">
              <span class="container-body-item-body-title">{{
                item.name
              }}</span>
              <view class="container-body-item-tag">
                <Tags :data="item" />
              </view>

              <view class="flex-between" style="width: 400rpx">
                <view class="flex-row" style="align-items: flex-end">
                  <view class="container-body-item-body-price"
                    >￥{{ item.product_price }}</view
                  >
                  <img
                    src="/static/landingPage/yuan.png"
                    width="20"
                    height="20"
                    alt=""
                  />
                  <span
                    style="font-size: 25rpx; font-weight: 400; color: #7d2f3b"
                    >起</span
                  >
                </view>
                <view
                  class="container-body-item-btn"
                  @click="toDetails(item.id)"
                  >查看详情</view
                >
              </view>
            </view>
          </div>
        </view>
      </scroll-view>
    </view>
    <view class="container-footer flex-between">
      <img :src="qrCode" width="100" height="100" alt="" />
      <img src="/static/landingPage/word.png" width="130" height="100" alt="" />
    </view>
    <qrCode :show="show" @close="close" />
    <ICP />
  </view>
</template>

<script>
import { shopNewList, getShopTgList } from "@/api/shop.js";
import { getConfig } from "@/api/config.js";
// import {Tags} from './components/tags.vue'
export default {
  data() {
    return {
      baseList: [],
      list: [],
      pageNum: 1,
      totalPage: 1,
      pageSize: 2,
      qrCode: "",
      show: false,
    };
  },
  components: {
    Tags: () => import("./components/tags.vue"),
  },
  mounted() {
    this.getShopList();
    this.getConfigInfo();
  },
  methods: {
    getShopList() {
      getShopTgList().then((res) => {
        console.log(res.data.list.data);
        this.list = res.data.list.data;

        uni.hideLoading();
      });
    },
    getConfigInfo() {
      getConfig().then((res) => {
        this.qrCode = res.data[0].qrcode;
      });
    },
    close(params) {
      this.show = params;
    },
    toDetails(id) {
      uni.navigateTo({
        url: "/pages/shop/shop?id=" + id,
      });
    },
  },
};
</script>

<style lang="scss">
.container {
  background-image: url("../../static/landingPage/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 20rpx 0rpx;
  justify-content: center;
  align-items: center;
  position: relative;

  //   position: relative;
  &-header {
    height: 350rpx;
    color: #fff;
    font-size: 75rpx;
    font-weight: bold;
    text-shadow: 2px 2px 4px #db4444;
  }

  &-footer {
    width: 80%;
    margin-top: 20rpx;
  }

  &-body {
    &-item {
      position: relative;
      background-color: pink;
      padding: 20rpx;
      border-radius: 15rpx;
      margin-bottom: 20rpx;
      width: 600rpx;

      img {
        margin-right: 10rpx;
        border-radius: 16rpx;
      }

      &-header {
        position: absolute;
        top: 0;
        left: 50%;
        /* 设置左边距为50% */
        transform: translateX(-50%);
        width: 350rpx;
        height: 60rpx;
        color: #fff;
        background-image: url("../../static/landingPage/bg_title.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        // align-items: center;
        justify-content: center;
      }

      &-btn {
        background-image: url("../../static/landingPage/button.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 0 20rpx;
        font-size: 24rpx;
      }

      &-body {
        margin-top: 40rpx;

        &-title {
          font-size: 30rpx;
          font-weight: 600;
          color: #7d2f3b;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
        }

        &-price {
          font-size: 30rpx;
          font-weight: 600;
          background: radial-gradient(#eba754 0%, #ff6940 50%, #dc5bc3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-right: 5rpx;
        }
      }

      &-tag {
        margin: 10rpx 0;
      }
    }
  }
}

.scroll-view {
  height: 600rpx;
}
</style>
