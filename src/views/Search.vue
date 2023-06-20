<template>
  <div>
    <van-nav-bar left-text="返回" left-arrow @click-left="goBack">
    </van-nav-bar>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="hot_search contain">
      <p>热门搜索</p>
      <ul>
        <li v-for="(item,index) in hotList" :key="index" @click="goSearchResult(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { Toast } from "vant";
import { useRouter } from "vue-router";

export default {
  name: "search",
  setup() {
    // 定义数组,保存热门搜索
    var hotList = ref(["长剑", "阔刀", "太刀", "手机"]);
    var router = useRouter();
    const value = ref("");

    var onSearch = function () {
      // 按下回车后跳转搜索结果页
      if (value.value.length != 0) {
        router.push({
          path: "/searchResult",
          // 传递搜索框的内容到搜索结果页
          query: {
            keyword: value.value,
          },
        });
      } else {
        Toast("请输入你想搜索的内容");
      }
    };

    var onCancel = function () {
      history.back();
    };

    var goBack = function () {
      history.back();
    };
    var goSearchResult = function (item) {
      router.push({
        path: "/searchResult",
        // 传递搜索框的内容到搜索结果页
        query: {
          keyword:item,
        },
      });
    };

    return {
      goBack,
      value,
      onSearch,
      onCancel,
      hotList,
      goSearchResult,
    };
  },
};
</script>

<style scoped>
.hot_search p {
  margin-top: 20px;
  font-size: 16px;
  color: #999999;
}
.hot_search ul {
  margin-top: 20px;
  display: flex;
}
.hot_search ul li:nth-child(1) {
  margin-left: 0;
}
.hot_search ul li {
  font-size: 14px;
  padding: 5px 15px;
  border: 1px solid #999999;
  margin-left: 15px;
  color: #454545;
}
</style>