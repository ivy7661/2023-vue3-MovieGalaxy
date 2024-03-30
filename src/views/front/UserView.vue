<template>
  <div class="row text-white">
    <div class="col-3 mt-12">
      <div class="side-bar">
        <div class="py-2 text-center">
          <router-link to="/user/userInfo" class="link"> 會員資訊 </router-link>
        </div>
        <div class="side-item py-2 text-center">
          <router-link to="/user/userPost" class="link"> 我的影評 </router-link>
        </div>
      </div>
    </div>
    <div class="col-9 mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-bar {
  border-radius: 5px;
  border: 2px solid #dfdff1;
  background: linear-gradient(
    115deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(205, 203, 203, 0.15) 33.52%,
    rgba(249, 225, 255, 0.1) 67.04%,
    rgba(142, 9, 129, 0.1) 100.56%
  );
  box-shadow: 2px 2px 15px 0px rgba(167, 122, 202, 0.25);
  backdrop-filter: blur(12px);
}
.side-item {
  border-top: 2px solid #dfdff1;
}
.link {
  color: #fff;
}
.link {
  @include Inter;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

.active {
  font-weight: 700;
  background: linear-gradient(89deg, #c9e5e8 31.72%, #e8a7d6 68.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
