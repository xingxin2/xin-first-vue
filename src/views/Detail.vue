<template>
  <div class="index">
    <van-nav-bar
      :title="d.store_name"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    >
      <template #right>
        <van-icon name="search" size="18" @focus="goSearch" />
      </template>
    </van-nav-bar>
    <!-- 顶部图片 -->
    <van-image :src="d.store_img" width="100%"></van-image>
    <!-- 价格 -->
    <div class="price cotain">￥{{ d.price }}</div>

    <div class="shop_info contain">
      <div class="store_name fl">{{ d.store_name }}</div>
      <van-icon name="like-o" class="fr" />
    </div>

    <div class="cotain int">{{ d.desc }}</div>
    <!-- 商品评价开始 -->

    <div class="comment cotain">
      <div class="fl">玩家评价（0）</div>
      <div class="fr">
        <span>0%</span>
        好评率 >
      </div>
    </div>

    <!-- 商品评价结束 -->

    <!-- 精品推荐开始 -->
    <div class="goods contain">
      <div class="title">
        <van-image :src="require('../assets/images/star.png')"></van-image>
        <div class="tuijian">精品推荐</div>
        <van-image :src="require('../assets/images/star.png')"></van-image>
      </div>

      <ul class="goods_list">
        <li>
          <van-image
            weight="115"
            height="115"
            :src="require('../assets/images/s4.png')"
          ></van-image>
          <p class="title2">狼主</p>
          <p class="price2">￥1500</p>
        </li>
        <li>
          <van-image
            weight="115"
            height="115"
            :src="require('../assets/images/s2.png')"
          ></van-image>
          <p class="title2">灵狐幻刃</p>
          <p class="price2">￥1500</p>
        </li>
        <li>
          <van-image
            weight="115"
            height="115"
            :src="require('../assets/images/s3.png')"
          ></van-image>
          <p class="title2">灵犀</p>
          <p class="price2">￥1500</p>
        </li>
        <li>
          <van-image
            weight="115"
            height="115"
            :src="require('../assets/images/s5.png')"
          ></van-image>
          <p class="title2">凤求凰</p>
          <p class="price2">￥1500</p>
        </li>
        <li>
          <van-image
            weight="115"
            height="115"
            :src="require('../assets/images/s7.png')"
          ></van-image>
          <p class="title2">戎金狼</p>
          <p class="price2">￥1500</p>
        </li>
        <li>
          <van-image
            weight="115"
            height="115"
            :src="require('../assets/images/s8.png')"
          ></van-image>
          <p class="title2">沙漠香风</p>
          <p class="price2">￥1500</p>
        </li>
      </ul>
    </div>
    <!-- 精品推荐结束 -->

    <!-- 产品介绍开始 -->
    <div class="introduce">
      <div class="product_title">产品介绍</div>
      <div class="longimg">
        <van-image :src="d.long_img"></van-image>
        <van-image :src="d.long_img2"></van-image>
      </div>
    </div>
    <!-- 产品介绍结束 -->

    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-action-bar-icon icon="cart-o" text="购物车" @click="goCart" />

      <van-action-bar-icon
        :icon="icon"
        :text="warning"
        :color="color"
        @click="addCollect"

      />

      <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="addCart"
      />
      <van-action-bar-button type="danger" text="立即购买" @click="goPay" />
    </van-action-bar>
  </div>
</template>


 


<script>
// 进入页面需要显示最顶部
// 引入onMounted组件
import { Toast } from "vant";
import { ref, onMounted } from "vue";
//没有r
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

// import { createApp } from 'vue';
// import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant';

export default {
  setup() {
    var color = ref("#black");
    var warning = ref("收藏");
    var icon = ref("star-o");
    var router = useRouter();
    var goCart = function () {
      router.push({
        path: "/cart",
      });
    };

    var addCart = function () {
      if (!localStorage.getItem("token")) {
        Toast("请先登录"),
          router.push({
            path: "/login",
          });
      } else {
        store.commit("vuexAddCart", d.value);
      }
      // 调用vuexAddCart
    };

    var addCollect = function () {
      // 调用vuexAddCart
      color.value = "#ff5000"
      warning.value = "已收藏"
      icon.value = "star"
        store.commit("vuexAddCollect", d.value);
    };

    var store = useStore();
    var goSearch = function (item) {
      console.log(item.store_name);
      var search = JSON.stringify(item);

      router.push({
        path: "/search",
        query: {
          search,
        },
      });
    };
    var route = useRoute();
    var detailInfo = JSON.parse(route.query.detail);

    console.log(detailInfo);
    var d = ref(detailInfo);

    var goBack = function () {
      history.back();
    };
    onMounted(function () {
      document.documentElement.scrollTop = 0;
    });
    var goPay = function () {
      router.push({
        path: "/pay",
        query: {
          detail: JSON.stringify(d.value),
        },
      });
    };
    return {
      d,
      color,
      icon,
      warning,
      goBack,
      goCart,
      addCart,
      goSearch,
      goPay,
      addCollect,
    };
  },
};
</script>


<style scoped>
.index {
  height: 3000px;
}
.shop_info {
  margin-top: 15px;
  overflow: hidden;
}
.shop_info .fr {
  margin-top: 15px;
}

.store_name {
  margin-top: 15px;
  width: 320px;
  font-size: 20px;
  font-weight: 550;
}

.int {
  margin-top: 15px;
  margin-left: 15px;
  font-size: 14px;
}
.price {
  margin-top: 15px;
  font-weight: 400;
  color: #fc4141;
  font-size: 28px;
  margin-left: 15px;
}
.comment {
  margin-top: 15px;

  height: 40px;
  overflow: hidden;
  line-height: 40px;

  border-top: 5px solid #eaeaea;
  border-bottom: 5px solid #eaeaea;
}
.comment .fl {
  margin-left: 15px;
}
.comment .fr {
  color: #808080;
  margin-right: 15px;
}
.comment span {
  color: #fc4141;
}
.goods {
  margin-top: 15px;
}
.goods .title {
  justify-content: center;
  display: flex;
  height: 52px;
  align-items: center;
}
.tuijian {
  margin-left: 10px;
  margin-right: 10px;
  color: #fc4141;
}

.goods_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.goods_list li {
  font-size: 14px;
  margin-left: 5px;
  margin-top: 8px;
}
.goods_list li .price2 {
  color: #fc4141;
  margin-top: 5px;
}
.title2 {
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.introduce {
  margin-top: 20px;
}
.product_title {
  text-align: center;
  color: #f14a08;
  font-size: 18px;
}
.longimg {
  margin-top: 20px;
}
.longimg {
  overflow: hidden;
}
</style>

