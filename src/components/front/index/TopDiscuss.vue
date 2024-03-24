<template>
  <div class="mb-10">
    <div class="bg-title d-flex justify-content-center mx-1 mb-5">
      <div class="wrap-title position-relative">
        <div class="bg-blue d-none d-lg-block"></div>
        <h2 class="main-title fs-1">TOP 1 Discussion this week</h2>
        <h3 class="subtitle fs-6 fw-normal">本週討論度 TOP 1</h3>
      </div>
    </div>
    <!-- PC -->
    <div class="top-discuss d-none d-lg-block">
      <div class="blur-bg">
        <div class="discuss-section">
          <img src="https://i.meee.com.tw/97RkiWe.jpg" class="img-oppen" alt="Oppen" />
          <!-- text -->
          <div class="discuss-movie">
            <h3>奧本海默</h3>
            <div class="d-flex">
              <span v-for="i in 5" :key="i + 123" class="mx-lg-1">
                <img src="/icons/star1.png" alt="star-full" class="star1" />
              </span>
            </div>
            <h4>第96屆奧斯卡劇情類最佳影片</h4>
          </div>
        </div>
        <p class="discuss-p">
          《奧本海默》由環球影業定檔2023年7月21日在美國上映，由於2020年底諾蘭與華納兄弟於2021年起全面實施院線與HBO
          Max同步上映的計劃中產生了分歧，使得諾蘭宣佈不再與華納兄弟進行合作，因此本片成為諾蘭繼《跟蹤》（1998年）和《記憶拼圖》（2000年）後，第三部非.....
        </p>
        <button class="btn-carousel">
          <a href="" class="btn-index-a"
            >read more <span class="ml-15"></span
            ><img src="/icons/PlayButton_purple.png" alt="" class="mb-1 ms-1" />
          </a>
        </button>
      </div>
    </div>
    <!-- mobile -->
    <div class="wrap-card d-lg-none">
      <div class="d-flex justify-content-center">
        <img
          src="https://i.meee.com.tw/97RkiWe.jpg"
          alt="movie"
          class="w-100 d-block rounded-3 img-oppen"
        />
      </div>
      <div
        class="wrap-info d-flex flex-column justify-content-center align-items-center py-3 py-lg-4"
      >
        <h4 class="fs-5 text-white mb-2 mb-lg-3">奧本海默</h4>
        <div class="d-flex">
          <span v-for="i in 5" :key="i + 123" class="mx-lg-1">
            <img src="/icons/star1.png" alt="star-full" class="star1" />
          </span>
        </div>
        <p class="text-white">第96屆奧斯卡劇情類最佳影片</p>
        <p class="discuss-p">
          《奧本海默》由環球影業定檔2023年7月21日在美國上映，由於2020年底諾蘭與華納兄弟於2021年起全面實施院線與HBO
          Max同步上映的計劃中產生了分歧，使得諾蘭宣佈不再與華納兄弟進行合作，因此本片成為諾蘭繼《跟蹤》（1998年）和《記憶拼圖》（2000年）後，第三部非.....
        </p>
        <button class="btn-carousel">
          <a href="" class="btn-index-a"
            >read more <span class="ml-15"></span
            ><img src="/icons/PlayButton_purple.png" alt="" class="mb-1 ms-1" />
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/helpers/colors';

.bg-title {
  padding: 30px;
  max-width: 1210px;
  background: $bg-c4;
  border-radius: 20px;
  box-shadow: 6px 6px 200px rgba(0, 0, 0, 0.3);
}
.wrap-title {
  background: $bg-c1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.subtitle {
  @include NotoSans;
  color: #fff;
  text-align: center;
  background: $bg-c2;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.main-title {
  @include Poppins;
  text-align: center;
}
.star1 {
  max-width: 30px;
}
.star0 {
  max-width: 23px;
}
// discuss
.top-discuss {
  position: relative;
  max-width: 1200px;
  height: 650px;
  background: url(https://github.com/JSproject-movie/project/blob/main/newPages/icon/meet.jpg?raw=true);
  background-repeat: no-repeat;
  background-position: right;
  border-radius: 20px;
  background-size: 108%;
  margin: 0 auto;
}
.blur-bg {
  max-width: 518px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px 40px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px;
  flex-wrap: wrap;
  border-radius: 30px;
  background: $bg-c5;
  backdrop-filter: blur(5.5px);
}
.discuss-section {
  display: flex;
  max-width: 433px;
}
.discuss-movie {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;

  padding: 20px;
  margin-left: 10px;
  h3 {
    @include Inter;
    color: #fff;
  }
  h4 {
    @include Inter;
    color: #fff;
    font-weight: 500;
  }
}
.discuss-p {
  max-width: 411px;
  flex-shrink: 0;
  @include NotoSans;
  color: #fff;
  margin: 15px 0;
}
.btn-carousel {
  display: flex;
  max-width: 175px;
  height: 47px;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 5px;
  border: 2px solid #d7cdff;
  background: linear-gradient(0deg, #fff 0%, #fff 100%);
}
.btn-index-a {
  @include Inter;
  font-weight: 700;
  background: $btn-c2;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-blue {
  position: absolute;
  left: 400px;
  width: 172px;
  height: 172px;
  flex-shrink: 0;
  background: #7fe7ce;
  filter: blur(150px);
}
// mobile
.img-oppen {
  max-width: 170px;
}
.star1 {
  max-width: 30px;
}
.wrap-card {
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid #b88ed3;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
}
</style>
