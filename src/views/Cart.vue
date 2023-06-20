<template>
  <div>
    <!-- 当购物车没有数据显示为空 -->
    <div class="kong" v-if="cartListData.length == 0">
      <van-image :src="require('../assets/images/kong.png')"></van-image>
      <p>目前购物车列表为空，快去商城逛逛吧</p>
    </div>
    <!-- 当购物车有数据的时候显示 -->
    <div v-else>
      <van-swipe-cell v-for="(item, index) in cartListData" :key="index">
        <van-card
          :price="item.price"
          :desc="item.desc"
          :title="item.store_name"
          :thumb="item.store_img"
          @click="goDetail(item)"
        />

        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            @click="del(index)"
            class="delete-button"
          />
        </template>
      </van-swipe-cell>

      <van-submit-bar
        class="submit"
        :price="getTotal * 100"
        button-text="提交订单"
        @submit="onSubmit"
      />
    </div>
  </div>
</template>

<script>
// 引入ref主键
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { Toast } from "vant";
import { useRouter } from "vue-router";
export default {
  name: "cart",
  setup() {
    var goDetail = function (item) {
      console.log(item.store_name);
      var detail = JSON.stringify(item);

      router.push({
        path: "/detail",
        query: {
          detail,
        },
      });
    };
    var router = useRouter();
    var store = useStore();
    var cartListData = ref(store.state.cartList);
    console.log(cartListData.length);

    const onSubmit = () => Toast("点击按钮");
    // 定义计算属性方法
    var getTotal = computed(function () {
      var totalPrice = 0;
      cartListData.value.forEach(function (item) {
        totalPrice += Number(item.price);
      });

      return totalPrice;
    });

    console.log(getTotal.value);
    var del = function (index) {
      console.log("1");
      cartListData.value.splice(index, 1);
    };
    return {
      cartListData,
      onSubmit,
      goDetail,
      getTotal,
      del,
    };
  },
};
</script>
<style scoped>
.kong {
  margin-top: 200px;
  text-align: center;
}
.submit {
  margin-bottom: 60px;
}

.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
</style>