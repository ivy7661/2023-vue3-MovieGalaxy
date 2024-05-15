<template>
  <div class="row justify-content-center my-6">
    <div class="login-container d-flex flex-column justify-content-center align-items-center py-5">
      <h2>Login</h2>
      <form @submit="login" class="d-flex flex-column justify-content-center align-items-center">
        <div class="d-flex flex-row mb-3">
          <div class="d-flex align-items-center">
            <img src="/icons/user.svg" alt="account" width="20" class="me-3" />
          </div>
          <input type="text" class="login-input" placeholder="帳號" v-model="email" />
        </div>
        <div class="d-flex flex-row mb-3">
          <div class="d-flex align-items-center">
            <img src="/icons/password.svg" alt="password" width="20" class="me-3" />
          </div>
          <input type="text" class="login-input" placeholder="密碼" v-model="password" />
        </div>
        <button type="submit" class="btn-login">
          <span class="login-text">登入</span>
        </button>
      </form>
      <div class="d-lg-flex flex-lg-row align-items-center">
        <div class="text-white mb-2 mb-lg-0 me-lg-2">還不是會員嗎？</div>
        <router-link to="/signup">
          <button type="button" class="btn-signup">
            <span class="signup-text">註冊</span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'pinia';
import userStore from '@/stores/userStore';
import Alert from '@/utils/swal.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      userToken: ''
    };
  },
  computed: {
    ...mapState(userStore, ['isLogin'])
  },
  methods: {
    ...mapActions(userStore, ['setUser', 'setUserCookie']),
    login() {
      const url = `${import.meta.env.VITE_API_URL}/login`;
      const userData = {
        email: this.email,
        password: this.password
      };

      axios
        .post(url, userData)
        .then((res) => {
          this.email = '';
          this.password = '';
          if (res.data.accessToken && res.data.user.role === 'user') {
            this.setUserCookie(res.data.user.id, res.data.accessToken, res.data.user.role);
            this.$router.replace('/');
            Alert.toastTop('success', '登入成功');
            this.$bus.emit('login-success');
          }
          if (res.data.accessToken && res.data.user.role === 'admin') {
            this.setUserCookie(res.data.user.id, res.data.accessToken, res.data.user.role);
            this.$router.replace('/admin/accounts');
            Alert.toastTop('success', '歡迎登入後台');
          }
        })
        .catch((err) => {
          console.log(err);
          Alert.toastTop('error', err.response.data);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/helpers/colors';
.login-container {
  max-width: 600px;
  gap: 30px;
  border-radius: 30px;
  border: 4px solid #dfdff1;
  background: $bg-c3;
  box-shadow: $shadow-1;
  @include mobile() {
    max-width: 300px;
  }
}
h2 {
  @include Inter;
  font-size: 30px;
  background: $textbg-1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.login-input {
  color: #fff;
  max-width: 250px;
  height: 40px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #9965b9;
  background: $bg-c18;
  box-shadow: $shadow-2;
}

.btn-login {
  width: 200px;
  height: 41px;
  transform: rotate(-0.1deg);
  border-radius: 20px;
  border: 2px solid #fff;
  background: linear-gradient(96deg, #fff 3.46%, #d7deef 83.25%, #fdfdfd 97.41%);
  box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.25);
}
.login-text {
  @include NotoSans;
  text-align: center;
  font-weight: 700;
  line-height: 166.52%;
  background: linear-gradient(111deg, #2b356a 15.43%, rgba(206, 24, 198, 0.84) 106.57%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.btn-signup {
  width: 140px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #fff;
  background: var(
    --web_BK_1,
    linear-gradient(142deg, #404c53 21.85%, #382538 56.98%, #161618 91.4%)
  );
}
.signup-text {
  transform: rotate(-0.1deg);
  color: #fff;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
