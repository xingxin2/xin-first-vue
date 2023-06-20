<template>
  <div>
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
  <div class="category">
    <div class="category_left">
      <ul>
        <li
          v-for="(item, index) in categoryList"
          :class="index == activeIndex ? 'active' : ''"
          :key="index"
          @click="isActive(index)"
        >
          {{ item.cate_name }}
        </li>
      </ul>
    </div>
    <div class="category_right">
      <!-- 循环子分类 -->
      <ul
        v-for="(item, index) in categoryList"
        :key="index"
        v-show="index == activeIndex"
      >
        <!-- 绑定跳转分类列表详情页 -->
        <li
          v-for="(item2, index2) in item.children"
          :key="index2"
          @click="goCategoryList(item2)"
        >
          <van-image :src="item2.pic" height="100px"></van-image>
          <p class="righttext">{{ item2.cate_name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// axios引入不需要{}

export default {
  name: "category",

  setup() {
    var router = useRouter();
    var activeIndex = ref(0);
    var categoryList = ref([]);
    // var goCategoryList  = ref([])
    // 定义获取分类数据的方法
    var getCategoryData = function () {
      axios({
        method: "get",
        url: "http://47.115.51.185/api/category",
      }).then(function (res) {
        categoryList.value = res.data.data;
        console.log("这就是后台把数据赋值给拆categoryList", categoryList.value);
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
    var isActive = function (index) {
      console.log(index);
      activeIndex.value = index;
    };
    onMounted(function () {
      getCategoryData();
    });
    var goCategoryList = function (item2) {
      router.push({
        path: "/categoryList",
        query: {
          sid: item2.id,
        },
      });
    };
    return {
      categoryList,
      isActive,
      activeIndex,
      goCategoryList,
      goSearch,
    };
  },
};
</script>

<style scoped>
.category {
  display: flex;
  /* overflow: hidden; */
}
.category_left ul li {
  width: 100px;
  height: 45px;
  text-align: center;
  line-height: 45px;
}
.category_left {
  width: 100px;
  background-color: #f7f7f7;
  height: 100vh;
  float: left;
}

.category_right {
  float: left;
  width: 300px;
}

.righttext {
  margin-top: 5px;
}
.category_right ul li {
  float: left;
  width: 100px;
  text-align: center;
  margin-top: 10px;
}
.category_left ul li.active {
  background: #fff;
  border-left: 2px solid #b336da;
  color: #b336da;
}
</style>