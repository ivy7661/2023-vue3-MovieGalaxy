<template>
  <div class="row justify-content-center">
    <div class="col-md-10 d-flex flex-column align-items-center">
      <h2 class="mb-5">網站理念</h2>
      <img src="/images/principle.png" alt="principle" class="principle-img img-fluid" />
      <div class="px-3 py-5">
        <h4 class="mb-3">關於我們</h4>
        <p>
          歡迎來到<strong>「影評星塵」</strong>，我們的理念是讓您深入探索電影世界，與一個充滿熱情的影評社群互動，而不必擔心劇透或不真實的訊息。我們的使命是提供一個熱情、誠實和友善的平台，讓您更能欣賞電影世界，並分享自己的觀點。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  @include Inter;
  color: #fff;
  font-weight: 700;
}
.principle-img {
  border-radius: 20px;
  border: 2px solid #dfdff1;
  box-shadow: 2px 2px 15px 0px rgba(167, 122, 202, 0.25);
}
</style>
