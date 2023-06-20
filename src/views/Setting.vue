<template>
  <div class="setting">
    <div class="manage contain">
      <div class="manageTitle">管理我的账号</div>
      <div class="userbox">
        <div class="touxiang">
          <img
            :src="require('../assets/images/touxiang.png')"
            width="100"
            alt=""
          />
        </div>
        <!-- 个人信息 -->
        <div class="userName">
          <div class="name">{{placeholder}}</div>
          <div class="phone">绑定手机号：10086</div>
        </div>
        <div class="nowaccount">当前账号</div>
      </div>
    </div>
    <div class="userInfo">
      <ul>
        <li>
          <p class="lileft">昵称</p>
          <p class="liright">
            <input type="text" :placeholder="placeholder" v-model="username"/>
          </p>
        </li>
        <li>
          <p class="lileft">ID号</p>
          <p class="liright">666666 <van-icon name="lock" /></p>
        </li>
        <li>
          <p class="lileft">手机号码</p>
          <p class="liright">10086</p>
        </li>
        <li>
          <p class="lileft">密码</p>
          <p class="liright">点击修改密码 ></p>
        </li>
      </ul>
    </div>
    <div class="btnbox">
      <div class="saveBtn" @click="save">保存修改</div>
      <div class="exitBtn" @click="exitlogin">退出登录</div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router"
import { ref } from "vue";
export default {
  name: "setting",
  setup() {
    var placeholder = ref("永劫无间");
    var router = useRouter()
    var username = ref("");
    var exitlogin = function () {
      // 移除某一个本地缓存属性，removeitem
      localStorage.removeItem("token");
      router.push({
        path:"/login"
      })
    };
    var save = function () {

      placeholder.value = username.value;
      localStorage.setItem("")
    };
    return {
      placeholder,
      save,
      username,
      exitlogin,
    };
  },
};
</script>

<style scoped>
.setting {
  height: 100vh;
  background-color: #f5f5f5;
  width: 100%;
}
.manage {
  padding-top: 15px;
  background-color: #fff;
  margin: 0 auto;
  padding-bottom: 15px;
}
.manageTitle {
  font-size: 18px;
  padding-left: 20px;
}
.touxiang {
  padding-top: 15px;
  padding-left: 15px;
}
.touxiang img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
}
.userbox {
  height: 85px;
  background: url(../assets/images/paopao2.png);
  background-size: 100% 100%;
  background-color: #fff9f9;
  margin-left: 10px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  /* 相对定位 */
  position: relative;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #e93323;
}
.userName {
  padding-top: 10px;
  padding-left: 15px;
}
.name {
  color: #282828;
  font-size: 16px;
}
.phone {
  padding-top: 10px;
  font-size: 13px;
  color: #999999;
}
.nowaccount {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  background-color: rgba(233, 51, 25, 0.1);
  font-size: 12px;
  border-bottom-left-radius: 10px;
  color: "#fc4c47";
}
.userInfo {
  margin-top: 4px;
  margin-bottom: 50px;
}
.userInfo ul li {
  justify-content: space-between;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1px solid #fbfbfb;
}
.liright {
  color: #868686;
}
.liright input {
  border: none;
  text-align: right;
}
.btnbox div {
  margin: 0 auto;
  width: 380px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #ffffff;
  margin-top: 15px;
  border-radius: 25px;
  background-color: #e93323;
}
.btnbox div:nth-child(2) {
  background: none;
  color: red;
  border: 1px solid red;
}
</style>