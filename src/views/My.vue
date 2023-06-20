<template>
  <div class="my">
    <div class="header">
      <div class="personalInfo">
        <div class="header_img">
          <img :src="require('../assets/images/touxiang.png')" alt="" />
        </div>
        <div class="user">
          <div class="name">
            <div class="zhanghao">永劫</div>
            <div class="vip">
              <img :src="require('../assets/images/vip2.png')" alt="" />钻石会员
            </div>
            <div class="setting">
              <van-icon
                name="setting-o"
                color="#ffffff"
                @click="goSetting"
              ></van-icon>
            </div>
          </div>
          <div class="id">
            id:666666 <van-icon class="edit" name="edit"></van-icon>
          </div>
          <p></p>
        </div>
      </div>
      <div class="wrapper contain">
        <div class="box">
          <ul>
            <li>
              <p class="title">我的余额</p>
              <p class="number">9999.99</p>
            </li>

            <li>
              <p class="title">当前佣金</p>
              <p class="number">99.99</p>
            </li>

            <li>
              <p class="title">优惠券</p>
              <p class="number">9</p>
            </li>
          </ul>
        </div>

        <div class="box2">
          <div class="order_title">
            <div class="order_left">我的订单</div>
            <div class="order_right">全部订单<van-icon name="arrow" /></div>
          </div>
          <div class="orderInfo">
            <ul>
              <li>
                <img :src="require('../assets/images/daifukuan.png')" alt="" />
                <p>待付款</p>
              </li>

              <li>
                <img :src="require('../assets/images/daifahuo.png')" alt="" />
                <p>待发货</p>
              </li>

              <li>
                <img :src="require('../assets/images/daishouhuo.png')" alt="" />
                <p>待收货</p>
              </li>

              <li>
                <img :src="require('../assets/images/daipingjia.png')" alt="" />
                <p>待评价</p>
              </li>

              <li>
                <img :src="require('../assets/images/shouhou.png')" alt="" />
                <p>售后/退款</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="box3">
          <div class="order_title">
            <div class="order_left">我的服务</div>
          </div>
          <div class="orderInfo">
            <ul>
              <van-grid class="tubiao">
                <van-grid-item
                  icon="location-o"
                  text="收货地址"
                  color="#ee0a24"
                />
                <van-grid-item icon="friends-o" text="我的好友" />
                <van-grid-item icon="coupon-o" text="优惠券" />
                <van-grid-item icon="star-o" text="我的收藏"  @click="goCollect"/>
                <van-grid-item icon="pending-payment" text="我的钱包" />
                <van-grid-item icon="envelop-o" text="消息" />
                <van-grid-item icon="chat-o" text="我的评价" />
                <van-grid-item icon="ellipsis" text="更多" />
              </van-grid>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
 
 
<script>
import { useRouter } from "vue-router";
export default {
  name: "my",
  setup() {
    var router = useRouter();
    var goSetting = function () {
      router.push({
         path: "/setting",
      })
     
    };
    var goCollect = function () {
      router.push({
         path: "/collect",
      })
     
    };
    return {
      goSetting,
      goCollect,
    };
  },
};
</script>
 
 
<style scoped>
.my {
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
}
.header {
  height: 18vh;
  width: 100vw;
  background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
  /* border-top-left-radius: 50px;
  border-top-right-radius: 50px; */
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
}
.header_img img {
  border-radius: 50%;
  width: "65px";
  height: 65px;
  margin-top: 30px;
  margin-left: 20px;
}
.personalInfo {
  display: flex;
}
.name {
  display: flex;
  margin-top: 1px;
  width: 280px;
}
.zhanghao {
  font-size: 18px;
  color: #ffffff;
  margin-top: 2px;
  font-weight: 400;
}
.user {
  margin-left: 20px;
  margin-top: 50px;
}
.vip {
  padding-left: 10px;
  font-size: 12px;
  color: #f5f5f5;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.3);
  border-radius: 25px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  margin-left: 10px;
}
.vip img {
  padding-right: 10px;
  width: 10px;
}
.id {
  font-size: 14px;
  margin-top: 5px;
  color: hsla(0, 0%, 100%, 0.6);
}
.edit {
  font-size: 15px;
  font: bold;
  margin-left: 10px;
}
.setting {
  margin-left: auto;
  font-size: 25px;
}

.box ul {
  border-radius: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  background-color: #ffffff;
}
.box ul li {
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  border-right: 1px solid #ffffff;
}
.box ul li:nth-child(3) {
  border-right: none;
}
.wrapper {
  margin-top: 15px;
}
.title {
  font-size: 16px;
  color: #aaaaaa;
}
.number {
  margin-top: 10px;
  font-size: 20px;
}
.box2 {
  background-color: #fff;
  margin-top: 15px;
}
.box2 .order_title {
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #fafafa;
}
.order_left {
  color: #282828;
  font-weight: 500;
}
.order_right {
  margin-left: auto;
  color: #666666;
}
.orderInfo ul {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;
}
.orderInfo ul li p {
  padding-top: 8px;
}
.orderInfo ul li {
  text-align: center;
}
.tubiao {
  color: rgb(240, 25, 25);
}
.box3 .order_title {
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #fafafa;
}
.box3 {
  background-color: #fff;
  margin-top: 15px;
}
</style>