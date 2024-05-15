<template>
  <div class="row justify-content-center mb-5">
    <div class="col-10 col-md-9">
      <div class="d-flex justify-content-center align-items-center mb-3">
        <i class="bi bi-person-fill fs-2"></i>
        <h2 class="pt-2 ms-3">會員基本資料</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 info-container px-2 px-lg-5 py-6">
          <h5 class="text-start">會員名稱： {{ user.userName }}</h5>
          <h5 class="text-start">帳號： {{ user.email }}</h5>
          <h5 class="text-start">手機號碼： {{ user.phone }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {}
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');
      const url = `${import.meta.env.VITE_API_URL}/users/${userId}`;
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.user = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-container {
  border-radius: 30px;
  border: 3px solid var(--boder_color, #dfdff1);
  background: linear-gradient(
    115deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(205, 203, 203, 0.25) 50.28%,
    rgba(249, 198, 244, 0.2) 100.56%
  );
  box-shadow: 9px 14px 29px 0px rgba(167, 122, 202, 0.25);
}
h5 {
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
