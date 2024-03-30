<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <div class="col-2 bg-light-green pt-5">
        <div class="text-center">
          <img src="/images/LOGO.svg" alt="logo" class="img-fluid mb-6 px-2 logo" />
        </div>
        <ul class="nav flex-column px-2">
          <li class="nav-item">
            <RouterLink to="/admin/products" class="nav-link">產品管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/orders" class="nav-link">訂單管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/coupons" class="nav-link">優惠券管理</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/articles" class="nav-link">文章管理</RouterLink>
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
      <div class="col-10 py-5">
        <!-- v-if="checkSuccess" -->
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
</style>
