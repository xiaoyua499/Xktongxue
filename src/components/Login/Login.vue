<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/User/头像-男三.png" alt="">
    </div>
    <van-form @submit="onSubmit" class="form">
      <van-field v-model="username" name="username" placeholder="用户名" :rules="[{ required: true }]" />
      <van-field v-model="password" type="password" name="password" placeholder="请输入密码" :rules="[{ required: true }]" />
      <div class="button" style="margin: 10px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapMutations('Login', ['getUser']),
    onSubmit(values) {
      this.getUser(values)
      // console.log('submit', values);
      this.$router.go(-1)
      let token = 'alskhdjf1234alskdhf'
      sessionStorage.setItem('token', token)
    },
  },
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 617px;

  .logo {
    img {
      margin-bottom: 20px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  .form::v-deep {
    width: 300px;

    .van-cell {
      margin: 10px;
      background-color: #f5f6f8;
      border-radius: 20px;
    }
  }

  .button {
    width: 100%;
  }
}
</style>