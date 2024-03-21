<template>
  <nav class="navbar navbar-expand-lg bg-light-green py-3">
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
            <RouterLink to="" class="nav-link pt-3 mx-2 fw-bold text-white fs-6 d-inline-block"
              >關於影評星塵</RouterLink
            >
          </li>
          <li class="nav-item mb-2 mb-lg-0">
            <RouterLink to="" class="nav-link d-inline-block text-white fw-bold fs-6 pt-3 mx-2"
              >找電影</RouterLink
            >
          </li>
          <li class="nav-item mb-2 mb-lg-0">
            <RouterLink to="" class="nav-link d-inline-block text-white fw-bold fs-6 pt-3 mx-2"
              >註冊/登入</RouterLink
            >
          </li>
        </ul>
      </div>
      <!-- 桌機版  icon -->
      <div class="d-flex justify-content-lg-end d-none d-lg-block">
        <RouterLink class="navbar-brand position-relative" to="">
          <i class="bi bi-person-fill fs-3 ms-4 me-2 text-white"></i>
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

  // background: #3e404b;
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
</style>
