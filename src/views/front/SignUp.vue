<template>
  <div class="row justify-content-center my-6">
    <div class="login-container d-flex flex-column justify-content-center align-items-center py-5">
      <h2>註冊帳號</h2>
      <div class="col-6">
        <VForm
          v-slot="{ errors }"
          @submit="signUp"
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div class="mb-3">
            <label for="email" class="form-label me-2">Email</label>
            <VField
              id="email"
              name="Email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['Email'] }"
              placeholder="請輸入電子信箱"
              rules="email|required"
              v-model="form.user.email"
            ></VField>
            <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="userName" class="form-label me-2">名稱</label>
            <VField
              id="userName"
              name="名稱"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['名稱'] }"
              placeholder="請輸入名稱"
              rules="required|min:2|max:10"
              v-model="form.user.userName"
            ></VField>
            <ErrorMessage name="名稱" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label me-2">手機號碼</label>
            <VField
              id="phone"
              name="手機號碼"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['手機號碼'] }"
              placeholder="請輸入手機號碼"
              :rules="isPhone"
              v-model="form.user.phone"
            ></VField>
            <ErrorMessage name="手機號碼" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label me-2">密碼</label>
            <VField
              id="password"
              name="密碼"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors['密碼'] }"
              placeholder="請輸入密碼"
              :rules="isPassword"
              autocomplete="false"
              v-model="form.user.password"
            ></VField>
            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-4">
            <label for="checkPwd" class="form-label me-2">確認密碼</label>
            <VField
              id="checkPwd"
              name="確認密碼"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors['確認密碼'] }"
              placeholder="請再次輸入密碼"
              :rules="checkPwd"
              autocomplete="false"
            ></VField>
            <ErrorMessage name="確認密碼" class="invalid-feedback"></ErrorMessage>
          </div>
          <button type="submit" class="btn-signup">
            <div class="text-signup">註冊</div>
          </button>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { mapActions } from 'pinia';
import userStore from '@/stores/userStore';

export default {
  data() {
    return {
      form: {
        user: {
          email: '',
          userName: '',
          phone: '',
          password: ''
        }
      }
    };
  },
  methods: {
    ...mapActions(userStore, ['setUser', 'setUserCookie']),
    signUp() {
      const url = `${import.meta.env.VITE_API_URL}/register`;
      const userData = {
        email: this.form.user.email,
        userName: this.form.user.userName,
        phone: this.form.user.phone,
        password: this.form.user.password,
        role: 'user'
      };

      axios
        .post(url, userData)
        .then((res) => {
          console.log(res);
          this.setUserCookie(res.data.user.id, res.data.accessToken);
          // this.setUser(res.data.user);

          Swal.fire({
            title: '註冊成功',
            text: `歡迎${res.data.user.userName}加入影評星塵會員！`,
            icon: 'success'
          });
          this.$router.push('/');
        })
        .catch((err) => {
          Swal.fire({
            title: err.response?.data || '註冊失敗',
            text: '',
            icon: 'error'
          });
          console.log(err);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '請輸入正確的手機號碼';
    },
    isPassword(value) {
      const userPassword = /(?=.*[0-9])(?=.*[a-zA-Z]).{6,12}/;
      return userPassword.test(value) ? true : '密碼長度為 6 ~ 12 碼，需包含英文及數字';
    },
    checkPwd(value) {
      return value === this.form.user.password ? true : '密碼不一致';
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
.form-control {
  color: #fff;
  width: 339px;
  height: 40px;
  padding: 10px 20px;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid #9965b9;
  background: linear-gradient(115deg, rgba(31, 37, 70, 0.1) 0%, rgba(34, 11, 11, 0.31) 100.56%);
  box-shadow:
    -1px -3px 18px 0px rgba(161, 101, 189, 0.25),
    0px 6px 12px 0px rgba(0, 0, 0, 0.4) inset;
  @include mobile() {
    max-width: 250px;
  }
}
.form-label {
  @include Inter;
  color: #d0c3e2;
  font-weight: 700;
}
::placeholder {
  @include Inter;
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  font-weight: 500;
}
.btn-signup {
  width: 160px;
  height: 30px;
  border-radius: 20px;
  border: 2px solid #cb5af380;
  background: linear-gradient(96deg, #8c5a78 3.46%, #553147 97.41%);
  box-shadow: 4px 7px 13px 0px rgba(0, 0, 0, 0.25);
}
.text-signup {
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
