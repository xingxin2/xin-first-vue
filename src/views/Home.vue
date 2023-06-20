<template>
  <div class="index">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
    </van-pull-refresh>
    <!-- 搜索框开始 -->

    <div>
      <van-search placeholder="请输入搜索关键词" @focus="goSearch">
        <template #left>
          <van-image
            width="30"
            height="30"
            class="logo"
            :src="require('../assets/images/logo.png')"
          />
        </template>
      </van-search>
    </div>
    <div>
      <!-- 搜索框结束 -->
    </div>
    <!-- 轮播图开始 -->
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image :src="require('../assets/images/lunbo2.png')" />
        </van-swipe-item>
        <van-swipe-item>
          <van-image :src="require('../assets/images/lunbo3.png')" />
        </van-swipe-item>
        <van-swipe-item>
          <van-image :src="require('../assets/images/lunbo1.png')" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播图结束 -->

    <!-- 九宫格开始 -->
    <div>
      <van-grid>
        <van-grid-item icon="manager-o" text="宁红夜">
          <template #icon>
            <van-image
              :src="require('../assets/images/gg1.png')"
              class="picture"
              width="50"
            />
          </template>
        </van-grid-item>

        <van-grid-item icon="manager-o" text="特木尔">
          <template #icon>
            <van-image
              :src="require('../assets/images/gg2.png')"
              class="picture"
              width="50"
            />
          </template>
        </van-grid-item>

        <van-grid-item icon="manager-o" text="迦南">
          <template #icon>
            <van-image
              :src="require('../assets/images/gg3.png')"
              class="picture"
              width="50"
            />
          </template>
        </van-grid-item>

        <van-grid-item icon="manager-o" text="顾三娘">
          <template #icon>
            <van-image
              :src="require('../assets/images/gg4.png')"
              class="picture"
              width="50"
            />
          </template>
        </van-grid-item>

        <van-grid-item icon="manager-o" text="季沧海">
          <template #icon>
            <van-image
              :src="require('../assets/images/gg5.png')"
              class="picture"
              width="50"
            />
          </template>
        </van-grid-item>

        <van-grid-item icon="manager-o" text="胡桃">
          <template #icon>
            <van-image
              :src="require('../assets/images/gg6.png')"
              class="picture"
              width="50"
            />
          </template>
        </van-grid-item>

        <van-grid-item icon="manager-o" text="妖刀姬">
          <template #icon>
            <van-image
              :src="require('../assets/images/gg7.png')"
              class="picture"
              width="50"
            />
          </template>
        </van-grid-item>

        <van-grid-item icon="manager-o" text="无尘">
          <template #icon>
            <van-image
              :src="require('../assets/images/gg8.png')"
              class="picture"
              width="50"
            />
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 九宫格结束 -->

    <!-- 通知栏部分开始 -->
    <div>
      <van-notice-bar
        left-icon="volume-o"
        :scrollable="false"
        color="black"
        background="#986"
      >
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item>永劫无间一周年快乐！！</van-swipe-item>
          <van-swipe-item
            >恭喜玩家<b>秦凝雪月</b>获得NBPL总冠军!!</van-swipe-item
          >
          <van-swipe-item
            >恭喜玩家<b>秦凝雪月</b>通过无妄宝箱开出神品皮肤凤求凰</van-swipe-item
          >
        </van-swipe>
      </van-notice-bar>
    </div>

    <!-- 通知栏部分结束 -->

    <!-- 快速选择部分开始 -->

    <div class="fastchoice contain">
      <!-- 标题部分 -->
      <div class="title clearfix">
        <!-- 左边 -->
        <div class="fl">武器列表</div>

        <!-- 右边 -->
        <div class="fr">更多></div>
      </div>
      <!-- 图片 -->
      <ul class="fastlist clearfix">
        <li>
          <van-image class="logo" :src="require('../assets/images/f1.png')" />
          <div>太刀</div>
        </li>
        <li>
          <van-image class="logo" :src="require('../assets/images/f2.png')" />
          <div>阔刀</div>
        </li>
        <li>
          <van-image class="logo" :src="require('../assets/images/f3.png')" />
          <div>双截棍</div>
        </li>
        <li>
          <van-image class="logo" :src="require('../assets/images/f4.png')" />
          <div>弓箭</div>
        </li>
      </ul>
    </div>
    <!-- 快速选择部分结束 -->

    <!-- 精品部分开始 -->
    <!-- 标题部分开始 -->

    <div class="suggest contain">
      <div class="title clearfix">
        <!-- 左边 -->
        <div class="fl">精品推荐</div>

        <!-- 右边 -->
        <div class="fr">更多></div>
      </div>

      <!-- 轮播图开始 -->
      <div class="swiper2 contain">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <van-image :src="require('../assets/images/lunbo01.png')" />
          </van-swipe-item>
          <van-swipe-item>
            <van-image :src="require('../assets/images/lunbo02.png')" />
          </van-swipe-item>
          <van-swipe-item>
            <van-image :src="require('../assets/images/lunbo03.png')" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 轮播图结束 -->
    </div>

    <!-- 标题部分结束 -->

    <!-- 精品部分结束 -->

    <!-- 商品列表开始 -->
    <div class="shoplist">
      <van-card
        v-for="(item, index) in shopList"
        :key="index"
        :price="item.price"
        :desc="item.desc"
        :title="item.store_name"
        :thumb="item.store_img"
        @click="goDetail(item)"
      />
    </div>
  </div>
  <!-- 商品列表结束 -->
</template>   



<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";

export default {
  name: "home",
  setup() {
    const count = ref(0);
    const loading = ref(false);
    const onRefresh = () => {
      setTimeout(() => {
        Toast("刷新成功");
        loading.value = false;
        count.value++;
      }, 1000);
    };

    var router = useRouter();

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

      {
        store_name: "初代玄女",
        store_img: require("../assets/images/s6.png"),
        price: "170.00",
        desc: "[神品时装]宁红夜",
        long_img: require("../assets/images/long11.png"),
        long_img2: require("../assets/images/long12.png"),
      },

      {
        store_name: "戎金狼",
        store_img: require("../assets/images/s7.png"),
        price: "160.00",
        desc: "[神品时装]特木尔",
        long_img: require("../assets/images/long13.png"),
        long_img2: require("../assets/images/long14.png"),
      },

      {
        store_name: "沙漠香风",
        store_img: require("../assets/images/s8.png"),
        price: "180.00",
        desc: "[神品时装]迦南",
        long_img: require("../assets/images/long15.png"),
        long_img2: require("../assets/images/long16.png"),
      },

      {
        store_name: "绝代风华",
        store_img: require("../assets/images/s9.png"),
        price: "190.00",
        desc: "[神品时装]迦南",
        long_img: require("../assets/images/long17.png"),
        long_img2: require("../assets/images/long18.png"),
      },

      {
        store_name: "熛怒炼火",
        store_img: require("../assets/images/s10.png"),
        price: "140.00",
        desc: "[神品时装]季沧海",
        long_img: require("../assets/images/long19.png"),
        long_img2: require("../assets/images/long20.png"),
      },

      {
        store_name: "蝶梦",
        store_img: require("../assets/images/s11.png"),
        price: "250.00",
        desc: "[神品时装]土御门胡桃",
        long_img: require("../assets/images/long21.png"),
        long_img2: require("../assets/images/long22.png"),
      },

      {
        store_name: "龙之影·生死局",
        store_img: require("../assets/images/s12.png"),
        price: "130.00",
        desc: "[神品时装]天海",
        long_img: require("../assets/images/long23.png"),
        long_img2: require("../assets/images/long24.png"),
      },

      {
        store_name: "阴阳师·樱雨刀舞",
        store_img: require("../assets/images/s13.png"),
        price: "150.00",
        desc: "[极品时装]妖刀姬",
        long_img: require("../assets/images/long25.png"),
        long_img2: require("../assets/images/long26.png"),
      },

      {
        store_name: "海之奇",
        store_img: require("../assets/images/s14.png"),
        price: "150.00",
        desc: "[神品时装]顾三娘",
        long_img: require("../assets/images/long27.png"),
        long_img2: require("../assets/images/long28.png"),
      },

      {
        store_name: "青龙将星",
        store_img: require("../assets/images/s15.png"),
        price: "150.00",
        desc: "[神品时装]岳山",
        long_img: require("../assets/images/long29.png"),
        long_img2: require("../assets/images/long30.png"),
      },

      {
        store_name: "凌霄之羽",
        store_img: require("../assets/images/s16.png"),
        price: "180.00",
        desc: "[神品时装]无尘",
        long_img: require("../assets/images/long31.png"),
        long_img2: require("../assets/images/long32.png"),
      },

      {
        store_name: "香兰水月",
        store_img: require("../assets/images/s17.png"),
        price: "180.00",
        desc: "[神品时装]顾清寒",
        long_img: require("../assets/images/long33.png"),
        long_img2: require("../assets/images/long34.png"),
      },

      {
        store_name: "暮光胴丸",
        store_img: require("../assets/images/s18.png"),
        price: "200.00",
        desc: "[神品时装]武田信忠",
        long_img: require("../assets/images/long35.png"),
        long_img2: require("../assets/images/long36.png"),
      },
    ]);

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

    var goDetail = function (item) {
      console.log(item.store_name);
      var detail = JSON.stringify(item);
      //   router用法router.push({
      //       path:门牌号
      //   })
      router.push({
        path: "/detail",
        query: {
          detail,
        },
      });
    };
    return {
      shopList,
      goDetail,
      goSearch,
    };
  },
};
</script>




<style scoped>
.picture img {
  border-radius: 50%;
}

.notice-swipe {
  height: 40px;
  line-height: 40px;
}

.fastchoice {
  margin-top: 10px;
}
.title {
  overflow: hidden;
}
.fastchoice li {
  float: left;
  margin-left: 5px;
}
.title .fl {
  color: #282828;
  font-size: 16px;
  font-weight: 600;
}
.suggest {
  margin-top: 15px;
}
.swiper2 {
  margin-top: 15px;
}
.fastlist {
  overflow: hidden;
}
.index {
  height: 3200px;
}
.logo {
  border-radius: 50%;
}
</style>