<template>
  <div class="mainView container-fluid">
    <div class="row">
      <div class="col-2 pt-5 flex-column side-bar">
        <h3 class="text-center mb-5">後台系統</h3>
        <ul class="nav flex-column px-2 ms-3">
          <li class="nav-item">
            <RouterLink to="/admin/accounts" class="nav-link">帳戶管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/movies" class="nav-link">電影管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/posts" class="nav-link">影評管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">回前台首頁</RouterLink>
          </li>

          <li class="nav-item mt-5">
            <a href="#" class="nav-link d-flex align-items-center" @click.prevent="logout"
              ><span class="material-icons me-1"> logout </span>登出</a
            >
          </li>
        </ul>
      </div>
      <div class="col-10 py-3">
        <div class="">
          <img src="/images/admin_logo.svg" alt="logo" class="img-fluid mb-3 px-2" width="220" />
        </div>
        <RouterView v-if="checkSuccess"></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';
export default {
  data() {
    return {
      token: '',
      checkSuccess: false
    };
  },
  mounted() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;

    this.checkAdmin();
  },
  methods: {
    checkAdmin() {
      const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');
      const role = document.cookie.replace(/(?:(?:^|.*;\s*)role\s*=\s*([^;]*).*$)|^.*$/, '$1');
      const url = `${import.meta.env.VITE_API_URL}/600/users/${userId}`;
      if (this.token && role === 'user') {
        Swal.fire({
          icon: 'warning',
          title: '無管理者權限'
        });
        this.$router.push('/');
      } else if (this.token) {
        axios.get(url).then((res) => {
          if (res.data.role === 'admin') {
            this.checkSuccess = true;
          }
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: '請先登入'
        });
        this.$router.push('/login');
      }
    },
    logout() {
      document.cookie = `userToken=0; expires=${new Date('2000/1/1 12:00')};path=/`;
      document.cookie = `userId=0; expires=${new Date('2000/1/1 12:00')};path=/`;
      document.cookie = `role=''; expires=${new Date('2000/1/1 12:00')};path=/`;

      Swal.fire({
        icon: 'success',
        title: '登出成功'
      });
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="scss" scoped>
.mainView {
  min-height: 100vh;
}
.side-bar {
  border-right: 1px solid #707070;
  min-height: 100vh;
}
.container-fluid {
  background: linear-gradient(
    142deg,
    #214559 10%,
    #304459 30%,
    #494259 50%,
    #3e2541 80%,
    #341a38 100%
  );
}
h3 {
  @include NotoSans;
  color: #efc862;
  font-size: 20px;
  font-weight: 700;
}
.nav-link {
  @include NotoSans;
  color: #fff;
  font-weight: 500;
  border-left: 4px solid transparent;
  margin-top: 20px;
  font-size: 16px;
}
.nav-link.active {
  border-left: 4px solid #fff;
  font-weight: bold;
}
</style>
