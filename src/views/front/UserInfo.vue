<template>
  <div class="row justify-content-center">
    <div class="col-10 col-md-9">
      <div class="d-flex justify-content-center align-items-center mb-3">
        <i class="bi bi-person-fill fs-2"></i>
        <h2 class="pt-2 ms-3">會員基本資料</h2>
      </div>
      <div class="row">
        <div class="col-12 info-container px-5 py-6">
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
  border-radius: 20px;
  border: 2px solid #dfdff1;
  background: linear-gradient(115deg, rgba(161, 118, 182, 0.5) 0%, rgba(57, 30, 54, 0.5) 100.56%);
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
