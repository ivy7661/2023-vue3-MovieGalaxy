<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-light-green py-1">
    <div class="container">
      <RouterLink to="/">
        <img
          src="/images/movie_picture/LOGO.png"
          alt="logo"
          class="d-inline-block navbar-logo ms-2"
        />
      </RouterLink>

      <div class="d-flex align-items-center">
        <!-- 手機  icon-->
        <div class="d-lg-none">
          <RouterLink class="navbar-brand position-relative" to="">
            <i class="bi bi-person-fill fs-2 ms-4 me-2 text-white"></i>
          </RouterLink>
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
            <RouterLink to="/aboutUs" class="nav-link pt-3 mx-2 text-white fs-6 d-inline-block"
              >關於影評星塵</RouterLink
            >
          </li>
          <li class="nav-item mb-2 mb-lg-0">
            <RouterLink to="/movies" class="nav-link d-inline-block text-white fs-6 pt-3 mx-2"
              >找電影</RouterLink
            >
          </li>
          <li class="nav-item mb-2 mb-lg-0">
            <RouterLink to="/movies" class="nav-link d-inline-block text-white fs-6 pt-3 mx-2"
              >註冊/登入</RouterLink
            >
          </li>
        </ul>
      </div>
      <!-- 桌機版  icon -->
      <div class="d-flex justify-content-lg-end d-none d-lg-block">
        <RouterLink class="navbar-brand position-relative" to="">
          <i class="bi bi-person-fill fs-4 ms-4 me-2 text-white"></i>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
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
.nav-item .nav-link {
  font-weight: 400;
  border-bottom: 4px solid transparent;
}
.nav-item .nav-link:focus {
  color: #698f39;
  border-bottom: 4px solid #698f39;
}
.nav-item .router-link-exact-active {
  color: #698f39;
  border-bottom: 4px solid #698f39;
}
</style>
