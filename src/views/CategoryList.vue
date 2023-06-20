<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="goBack">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <van-search placeholder="请输入搜索关键词" @focus="goSearch">
      <template #left>
        <van-image
          width="40"
          height="40"
          class="ruixing"
          :src="require('../assets/images/logo.png')"
        />
      </template>
    </van-search>
  </div>

  <div class="nogoods" v-if="categoryList.length == 0">
    <van-image
      :src="require('../assets/images/nogoods.png')"
      width="230"
    ></van-image>
  </div>

  <div>
    <ul class="list contain">
      <!-- 若分类列表有数据情况下，需要绑定goDetail2事件 -->
      <li v-for="(item, index) in categoryList" :key="index" @click="goDetail2(item)">
        <van-image :src="item.image" width="190"></van-image>
        <div class="text">
          <p class="title2">{{ item.store_name }}</p>
          <p class="nowprice">￥{{ item.price }}</p>
          <div class="sales">
            <p class="fl oldprice">
              ￥59.00<van-image
                :src="require('../assets/images/vip.png')"
                width="20px"
              ></van-image>
            </p>
            <p class="fr">已售{{ item.sales }}件</p>
          </div>
        </div>
      </li>
    </ul>

    <div class="nogoodslist" v-if="categoryList.length == 0">
      <div class="nogoodstitle">
        <van-image :src="require('../assets/images/star.png')"></van-image>
        <div class="tuijian">精品推荐</div>
        <van-image :src="require('../assets/images/star.png')"></van-image>
      </div>

      <ul class="list contain">
        <li
          v-for="(item, index) in shopList"
          :key="index"
          @click="goDetail(item)"
        >
          <van-image :src="item.store_img" width="190"></van-image>
          <div class="text">
            <p class="title2">{{ item.store_name }}</p>
            <p class="nowprice">￥{{ item.price }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "categoryList",
  setup() {
    var categoryList = ref([]);
    var route = useRoute();
    var router = useRouter();
    var goBack = function () {
      history.back();
    };
    var id = route.query.sid;
    var goSearch = function(item){
  var search = JSON.stringify(item);
  router.push({
        path: "/search",
        query: {
          search,
        },
      });
}
    var getCategoryList = function () {
      axios({
        method: "get",
        url: "http://47.115.51.185/api/products",
        params: {
          sid: id,
        },
      }).then(function (res) {
        console.log(res.data.data);
        categoryList.value = res.data.data;
        console.log("这是被赋值后的categoryList", categoryList.value);
      });
    };
    onMounted(function () {
      // 调用这个方法
      getCategoryList();
    });
    var shopList = ref([
      {
        store_name: "冰魄",
        store_img: require("../assets/images/s1.png"),
        price: "100.00",
        desc: "[神品皮肤]长剑-君子",
        long_img: require("../assets/images/long1.png"),
        long_img2: require("../assets/images/long2.png"),
      },

      {
        store_name: "灵狐幻刃",
        store_img: require("../assets/images/s2.png"),
        price: "100.00",
        desc: "[神品皮肤]太刀-童子切安钢",
        long_img: require("../assets/images/long3.png"),
        long_img2: require("../assets/images/long4.png"),
      },

      {
        store_name: "灵犀",
        store_img: require("../assets/images/s3.png"),
        price: "90.00",
        desc: "[神品皮肤]长枪-诛心",
        long_img: require("../assets/images/long5.png"),
        long_img2: require("../assets/images/long6.png"),
      },

      {
        store_name: "狼主",
        store_img: require("../assets/images/s4.png"),
        price: "100.00",
        desc: "[神品皮肤]阔刀-武威",
        long_img: require("../assets/images/long7.png"),
        long_img2: require("../assets/images/long8.png"),
      },

      {
        store_name: "凤求凰",
        store_img: require("../assets/images/s5.png"),
        price: "190.00",
        desc: "[神品皮肤]双刀-秋水",
        long_img: require("../assets/images/long9.png"),
        long_img2: require("../assets/images/long10.png"),
      },
    ]);

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

    var goDetail2 = function (item) {
      console.log("999",item);
      var detail = {
          store_name:item.store_name,
          store_img:item.image,
          price:item.price,
          long_img:"https://imgs.design006.com/202010/Design006_N3yHx48GbB.jpg?x-oss-process=style/prev_w_460_mh_1600",
        }
      console.log(detail);
      router.push({
        path: "/detail",
        query: {
          detail:JSON.stringify(detail),
        },
      });
    };

    return {
      categoryList,
      goBack,
      shopList,
      goDetail,
      goDetail2,
 goSearch,
    };
  },
};
</script>

<style scoped>
.text {
  padding-top: 10px;
}
.sales {
  overflow: hidden;
  padding-top: 10px;
  font-size: 12px;
}
.title2 {
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  color: #222222;
}
.nowprice {
  color: rgb(235, 12, 12);
  font-size: 18px;
  font-weight: bold;
}
.fr {
  color: #666666;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list li {
  margin-top: 15px;
}

.nogoods {
  display: flex;
  justify-content: center;

  align-content: center;
}
.nogoodstitle {
  margin-top: 20px;
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
</style>

