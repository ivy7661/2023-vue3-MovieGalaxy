<template>
  <nav class="navbar navbar-expand-lg bg-light-green py-3">
    <div class="container">
      <RouterLink to="/">
        <img src="/images/LOGO.svg" alt="logo" class="d-inline-block navbar-logo ms-2" />
      </RouterLink>
      <div class="d-flex align-items-center">
        <!-- 手機  icon-->
        <div class="d-lg-none">
          <button type="button" class="navbar-brand position-relative" @click="memberArea">
            <i class="bi bi-person-fill fs-3 mx-2 text-white"></i>
          </button>
        </div>
        <!--漢堡-->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
        >
          <i class="bi bi-list fs-3 text-white" style="font-weight: bold"></i>
        </button>
      </div>
      <!-- navbar 摺疊內容 -->
      <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarText">
        <ul class="navbar-nav mt-2 mt-lg-0">
          <li class="nav-item mb-2 mb-lg-0">
            <RouterLink to="" class="nav-link pt-3 mx-2 fw-bold text-white fs-6 d-inline-block"
              >關於影評星塵</RouterLink
            >
          </li>
          <li class="nav-item mb-2 mb-lg-0">
            <RouterLink
              to="/search"
              class="nav-link d-inline-block text-white fw-bold fs-6 pt-3 mx-2"
              >找電影</RouterLink
            >
          </li>
          <li v-if="!this.userToken" class="nav-item mb-2 mb-lg-0">
            <RouterLink
              to="/login"
              class="nav-link d-inline-block text-white fw-bold fs-6 pt-3 mx-2"
              >註冊/登入</RouterLink
            >
          </li>
          <li v-else class="nav-item mb-2 mb-lg-0">
            <RouterLink
              to="/login"
              class="nav-link d-inline-block text-white fw-bold fs-6 pt-3 mx-2"
              @click="logout"
              >登出</RouterLink
            >
          </li>
        </ul>
      </div>
      <!-- 桌機版  icon -->
      <div class="d-flex justify-content-lg-end d-none d-lg-block ms-2">
        <button type="button" class="navbar-brand position-relative" @click="memberArea">
          <i class="bi bi-person-fill fs-3 mx-2 text-white"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      userId: '',
      userToken: '',
      newToken: ''
    };
  },
  created() {
    this.userToken = document.cookie.replace(
      /(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    // 監聽登入成功事件，以便在登入成功後更新登入狀態
    this.$bus.on('login-success', () => {
      this.userToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      ); // 或者您也可以再次從 localStorage 中讀取最新的登入狀態
    });
  },
  methods: {
    memberArea() {
      const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.userId = userId;
      if (!this.userId) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: '請先登入會員'
        });
        return;
      }
      this.$router.push('/user/userInfo');
    },
    logout() {
      document.cookie = `userToken=0; expires=${new Date('2000/1/1 12:00')};path=/`;
      document.cookie = `userId=0; expires=${new Date('2000/1/1 12:00')};path=/`;
      document.cookie = `role=''; expires=${new Date('2000/1/1 12:00')};path=/`;

      Swal.fire({
        icon: 'success',
        title: '登出成功'
      });
      this.$router.replace('/login');
      // this.userToken = null;
      this.userToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  z-index: 1021;
}

.mainView {
  min-height: calc(100vh - 311px);
}

.navbar-logo {
  width: 150px;
  @include mobile() {
    width: 85px;
  }
}
.navbar-brand {
  background: transparent;
  border: none;
}
</style>
