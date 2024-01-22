<template>
  <view class="container flex-column">
    <view class="container-header">
      <div style="margin-top: 50rpx">
        你有多久 <br />没有好好 <br />去旅行了？
      </div>
    </view>
    <view class="container-body">
      <view class="container-body-item" v-for="(item, index) in list">
        <view class="container-body-item-header"> 寻梦巴黎 </view>
        <div class="container-body-item-body flex-row">
          <img :src="item.images[0]" width="100" height="100" alt="" />
          <view class="flex-column">
            <span class="container-body-item-body-title">{{ item.name }}</span>
            <view class="container-body-item-tag">
              <!-- {{ getShopDetail(item.id) }} -->
              <view
                class="container-body-item-tags"
                v-for="(tag, index) in getShopDetail(item.id)"
                :key="index"
              >
                {{ tag }}
              </view>
            </view>

            <view class="flex-between" style="width: 400rpx">
              <view class="flex-row" style="align-items: center">
                <view class="container-body-item-body-price"
                  >￥{{ item.product_price }}</view
                >
                <img
                  src="/static/landingPage/yuan.png"
                  width="20"
                  height="20"
                  alt=""
                />
                <span style="font-size: 30rpx; font-weight: 400; color: #7d2f3b"
                  >起</span
                >
              </view>
              <view class="container-body-item-btn">查看详情</view>
            </view>
          </view>
        </div>
      </view>
    </view>
    <view class="container-footer flex-between">
      <img :src="qrCode" width="100" alt="" />
      <img src="/static/landingPage/word.png" width="150" alt="" />
    </view>
  </view>
</template>

<script>
import { shopNewList, shopDetail } from "@/api/shop.js";
import { getConfig } from "@/api/config.js";
export default {
  data() {
    return {
      baseList: [],
      list: [],
      pageNum: 1,
      totalPage: 1,
      pageSize: 2,
      qrCode: "",
    };
  },
  mounted() {
    this.getShopList();
    this.getConfigInfo();
  },
  methods: {
    getShopList() {
      let page = {
        page: this.pageNum,
        perPage: this.pageSize,
      };
      shopNewList(page).then((res) => {
        res.list.data.forEach((item) => {
          this.list.push(item);
        });
        uni.hideLoading();
        this.totalPage = res.list.last_page;
      });
    },
    getConfigInfo() {
      getConfig().then((res) => {
        this.qrCode = res.data[0].qrcode;
      });
    },
    getShopDetail(id) {
      shopDetail(id).then((res) => {
        return res.data.intro.split("\n");
      });
    },

    async itemTags(id) {
      try {
        const res = await shopDetail(id);
        console.log(res);
        return res.data.intro.split("\n");
      } catch (error) {
        console.error("Error fetching shop detail:", error);
        return [];
      }
    },
  },
};
</script>

<style lang="scss">
.container {
  background-image: url("../../static/landingPage/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  padding: 20rpx 0rpx;
  justify-content: center;
  align-items: center;
  //   position: relative;
  &-header {
    height: 420rpx;
    color: #fff;
    font-size: 50rpx;
    font-weight: bold;
  }
  &-footer {
    // position: fixed;
    width: 80%;
    margin-top: 10rpx;
    // bottom: 10rpx;
  }
  &-body {
    &-item {
      position: relative;
      background-color: pink;
      padding: 20rpx;
      border-radius: 15rpx;
      margin-bottom: 20rpx;
      img {
        margin-right: 10rpx;
        border-radius: 16rpx;
      }
      &-header {
        position: absolute;
        top: 0;
        left: 50%; /* 设置左边距为50% */
        transform: translateX(-50%);
        width: 350rpx;
        height: 60rpx;
        color: #fff;
        background-image: url("../../static/landingPage/bg_title.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
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
        padding: 10rpx;
      }
      &-tags {
        background-image: url("../../static/landingPage/bg_label.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      &-body {
        margin-top: 50rpx;
        &-title {
          font-size: 36rpx;
          font-weight: 600;
          color: #7d2f3b;
        }
        &-price {
          font-size: 36rpx;
          font-weight: 600;
          background: radial-gradient(#eba754 0%, #ff6940 50%, #dc5bc3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>
