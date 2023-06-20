<template>
  <van-nav-bar
    title="我的收藏"
    left-text="返回"
    left-arrow
    @click-left="goBack"
  >
  </van-nav-bar>

  <div>
    <!-- 当购物车没有数据显示为空 -->
    <div class="kong" v-if="collectListData.length == 0">
      <van-image :src="require('../assets/images/kong2.png')"></van-image>
    </div>
    <!-- 当购物车有数据的时候显示 -->
    <div v-else>
      <van-swipe-cell v-for="(item, index) in collectListData" :key="index">
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

      
    </div>
  </div>
</template>

<script>
// 引入ref主键
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "collect",
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
    var collectListData = ref(store.state.collectList);   
    var goBack = function () {
      history.back();
    };
    var del = function (index) {
      console.log("1");
      collectListData.value.splice(index, 1);
    };
    return {
      collectListData,
      goDetail,
      del,
      goBack,
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
    
