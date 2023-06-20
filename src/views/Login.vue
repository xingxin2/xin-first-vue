<template>
  <div class="loginPage">
    <div class="headerPage">
      <div class="touxiang">
        <img
          :src="require('../assets/images/touxiang.png')"
          width="100"
          alt=""
        />
      </div>
    </div>
    <div class="form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
            color="red"
          >
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>




<script>
import { ref } from "vue";
import axios from "axios";
import { Toast } from "vant";
import { useRouter } from "vue-router";
export default {
  setup() {
    var router = useRouter();
    const username = ref("");
    const password = ref("");
    // get请求的pramas，post请求的data
    const onSubmit = (values) => {
      console.log("submit", values);
      axios({
        method: "POST",
        url: "http://47.115.51.185/api/login",
        data: {
          account: values.username,
          password: values.password,
        },
      }).then(function (res) {
        if (res.data.status == 200) {
          console.log("密码输入正确");
          Toast("登陆成功，请稍后");
          //   登录成功后做一个全局变量，让其他页面知道我们已经登录过了，不用再次跳转登录页
          localStorage.setItem("token", res.data.data.token);
          router.push({
            path: "/my",
          });
        } else if (res.data.status == 400) {
          console.log("用户名或密码输入错误，请重新输入");
          Toast("用户名或密码输入错误，请重新输入");
        }
      });
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
};
</script>


<style scoped>
.loginPage {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #ff9569 0%, #e92758 100%);
}
.headerPage {
  width: 100%;
  padding-top: 140px;
  background: url(../assets/images/paopao.png);
  background-size: 100%;
}
.headerPage {
  display: flex;
  justify-content: center;
}
.touxiang img {
  border-radius: 50%;
}
.form {
  width: 360px;
  padding-top: 30px;

  margin: 30px auto;
}
</style>