<template>
<div>
  <van-search
    v-model="value"
    shape="round"
    background="#A884F2"
    placeholder="请输入搜索关键词"
    @search="onSearch"
  />

  <van-card
    v-for="(item, index) in searchList"
    :key="index"
    :price="item.price"
    :title="item.store_name"
    :thumb="item.image"
    @click="goDetail2(item)"
  />
  </div>
<!-- 无数据 -->
<div class="nogoods" v-if="searchList.length == 0">
    <van-image
      :src="require('../assets/images/nogoods.png')"
      width="230"
    ></van-image>
  </div>

<div class="nogoodslist" v-if="searchList.length == 0"  >
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

</template>

<script>
import { useRoute, useRouter } from "vue-router";

import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  name: "searchResult",
  setup() {
      var value = ref("");
      var searchList = ref([])
    var route = useRoute();
    var router = useRouter();
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



    // 定义变量
    var routerWord = route.query.keyword;
    var onSearch = getSearchData
    // key是形参
    var onSearch = function(){
        
        getSearchData(value.value)
    }
    var getSearchData = function (key) {
      axios({
        url: "http://47.115.51.185/api/products",
        params: {
          keyword: key,
        },
      }).then(function (res) {
        searchList.value = res.data.data;
        console.log(res);
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
 

    onMounted(function () {
      getSearchData(routerWord);
    });
    return {
      searchList,
      goDetail2,
      onSearch,
      value,
      shopList,
      goDetail,

    };
  },
};
</script>


<style scoped>

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
.text {
  padding-top: 10px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list li {
  margin-top: 15px;
}

</style>