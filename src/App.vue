<template>
  <div id="app">
    <van-tabbar
      v-model="active"
      active-color="#18B1FA"
      v-if="!$route.meta.isHide"
    >
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :badge="cartNum" to="/cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>

    <div class="nav">
      <div class="navLeft animated slideInRight" v-show="isShow">
        <van-icon @click="goHome" name="wap-home-o" size="20" color="#fff" />
        <van-icon @click="goCart" name="cart-o" size="20" color="#fff" />
        <van-icon @click="goMy" name="manager-o" size="20" color="#fff" />
      </div>
      <div class="navImg" @click="changeShow">
        <img
          :src="require('./assets/images/nav.gif')"
          width="40"
          height="40"
          alt=""
        />
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>



<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    var router = useRouter();
    var route = useRoute();

    var goCart = function () {
      router.push({
        path: "/cart",
      });
    };

var goHome = function () {
      router.push({
        path: "/home",
      });
    };

    var goMy = function () {
      router.push({
        path: "/my",
      });
    };


    var store = useStore();
    var cartNum = ref(0);

    var changeShow = function () {
      isShow.value = true;
    };
    var isShow = ref(false);
    cartNum.value = store.state.cartList.length;

    const active = ref(0);
    return {
      active,
      cartNum,
      isShow,
      changeShow,
      goHome,
      goCart,
      goMy,
    };
  },
};
</script>


<style scoped>
[v-cloak] {
  display: none;
}
.nav {
  position: fixed;
  z-index: 999;
  bottom: 95px;
  right: 25px;
  display: flex;
}
.navLeft {
  border-radius: 25px;
  width: 158px;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f44939;
}
.navImg {
  margin-left: 15px;
  transform: rotate(90deg);
}
</style>