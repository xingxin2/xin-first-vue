<template>
  <div class="pay">
    <van-nav-bar @click-left="goBack">
      <template #title>
        <p style="toptitle">填写订单</p>
      </template>
      <template #left>
        <p class="left_text">
          <van-icon name="arrow-left" color="#000" /> 返回
        </p>
      </template>
    </van-nav-bar>
    <div class="address cotain">
      <div class="province">海南省三亚市</div>
      <h3 class="addressDetail">
        吉阳区吉阳镇学府大道三亚学院（北校区）北二快递站
        <div><van-icon name="arrow" /></div>
      </h3>
      <div class="myDetail">
        <span class="name">星</span>
        <span class="phone">133****1234</span>
      </div>
    </div>
    <div class="dotted"></div>
    <div class="shopInfo">
      <div class="shopname contain">
        <van-icon name="shop-o" /><span class="sname">暗潮商店</span>
      </div>
      <div class="good">
        <van-icon name="good-job" /><span
          >恭喜你，你挑选的商品好评率高达99%</span
        >
      </div>

      <div class="payDetail contain">
        <div class="payDetail_img">
          <img :src="payDetail.store_img" alt="" width="100" class="vimg" />
        </div>
        <div class="payDetail_Info">
          <div class="payDetail_storename">{{ payDetail.store_name }}</div>
          <div class="payDetail_storedesc">{{ payDetail.desc }}</div>
          <div class="payDetail_price">
            ￥{{ payDetail.price }} <van-icon color="#454545" name="info-o" />
          </div>
          <div class="refound">[支持七天无理由退货]30天保价</div>
        </div>
        <div class="computed">
          <div class="sub" @click="subNum"><van-icon name="minus" /></div>
          <div class="num">{{ number }}</div>
          <div class="add" @click="addNum"><van-icon name="plus" /></div>
        </div>
      </div>
      </div>
      <ul class="ulist">
        <li>
          <p>服务</p>
          <p style="color: #ccc;" >可选保障服务<van-icon name="arrow" /> </p>
        </li>

        <li>
          <p>配送</p>
          <div style="line-height:25px">
          <p style="text-align:right">快速运输<van-icon name="arrow" /></p>
          <p style="padding: top 5px;font: size 14px;">预计2月31日送达</p>
          </div>

          
        </li>

        <li>
          <p>退换无忧 <van-icon name="info-o" /></p>
          <div style="line-height:25px">
          <p style="text-align:right">商家赠送</p>
          <p style="padding: top 5px;font: size 14px;">享运费补贴或免费取件服务</p>
          </div>
        </li>
         <li>
          <p>留言</p>
          <p style="color: #ccc;" >建议留言先于商家确认<van-icon name="arrow" /> </p>
        </li>

      </ul> 
      <ul class="ulist">
         <li>
          <p>发票</p>
          <div style="line-height:25px">
          <p style="text-align:right">不开发票<van-icon name="arrow" /></p>

          </div>

          
        </li>
      </ul>
      <ul class="ulist">
         <li>
          <p>支付方式</p>
          <div style="line-height:25px">
          <p style="text-align:right">在线支付<van-icon name="arrow" /></p>
          </div>

          
        </li>
      </ul>
    
      <van-submit-bar
      class="paymoney"
        :price="payDetail.price * number *100"
        button-text="提交订单"
      />

    
  </div>
  
</template>


<script>
import { Toast } from "vant";
import { useRoute } from "vue-router";

import { ref } from "vue";
export default {
  setup() {
    var number = ref("1");

    var subNum = function () {
      number.value--;
      if (number.value < 0) {
        number.value = 0;
        Toast("你干嘛，哈哎哟~");
      }
    };

    var addNum = function () {
      number.value++;
    };

    var goBack = function () {
      history.back();
    };
    var route = useRoute();
    var payDetail = JSON.parse(route.query.detail);
    return {
      goBack,
      payDetail,
      number,
      subNum,
      addNum,
      Toast,
    };
  },
};
</script>

<style scoped>

.pay {
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;
}
.toptitle {
  color: #000;
  font-size: 10px;
}
.left-text {
  color: #000;
  font-size: 16px;
}
.address {
  padding-top: 10px;

  background-color: #ffffff;
}
.addressDetail {
  margin-left: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 30px;
  font-weight: bold;
}
.myDetail {
  margin-left: 10px;
  margin-top: 6px;
  color: #757575;
  padding-bottom: 10px;
}
.myDetail .phone {
  padding-left: 10px;
}
.dotted {
  height: 2px;
  background: repeating-linear-gradient(
    -45deg,
    var(--van-warning-color) 0,
    var(--van-warning-color) 20%,
    transparent 0,
    transparent 25%,
    var(--van-primary-color) 0,
    var(--van-primary-color) 45%,
    transparent 0,
    transparent 50%
  );
  background-size: 80px;
}
.province {
  margin-left: 10px;
}
.shopInfo {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 10px;
  background-color: #fff;
  position: relative;
  border-radius: 10px;
}
.sname {
  padding-left: 5px;
  color: #333333;
}
.good {
  margin-top: 15px;
  padding-left: 20px;
  color: #e7babc;
  height: 36px;
  line-height: 36px;
  width: 100vw;
  background-color: #fefced;
}
.good span {
  padding-left: 10px;
}
.payDetail {
  margin-top: 15px;
  display: flex;
  font-style: 14px;
}
.vimg {
  border-radius: 10px;
}
.payDetail_storename {
  padding-left: 15px;
  color: #000;
  width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.payDetail_storedesc {
  width: 200px;
  font-size: 12px;
  color: #999;
  line-height: 20px;
  padding-top: 10px;
  padding-left: 15px;
}
.payDetail_price {
  padding-top: 10px;
  padding-left: 15px;
  color: #de3e26;
  font-weight: 700;
}
.refound {
  padding-top: 10px;
  padding-left: 15px;
  color: #de3e26;
  font-size: 10px;
}
.computed {
  display: flex;
  right: 40px;
  bottom: 25px;
  position: absolute;
  height: 60px;
  align-items: center;
}
.num {
  margin-left: 10px;
  margin-right: 10px;
  height: 20px;
  line-height: 20px;
  width: 40px;
  text-align: center;
  background-color: #f5f5f5;
}
.ulist {
  margin-top: 15px;
  background-color: #fff;
  border-radius: 10px;
}
.ulist li {
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
  justify-content: space-between;
}
</style>

