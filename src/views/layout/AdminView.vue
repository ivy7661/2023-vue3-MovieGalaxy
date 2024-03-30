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
            <!-- @click.prevent="logout" -->
            <a href="#" class="nav-link d-flex align-items-center"
              ><span class="material-icons"> logout </span>登出</a
            >
          </li>
        </ul>
      </div>
      <div class="col-10 py-3">
        <div class="">
          <img src="/images/admin_logo.svg" alt="logo" class="img-fluid mb-3 px-2" width="220" />
        </div>
        <!-- v-if="checkSuccess" -->
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

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
