<template>
  <div class="slider-box">
    <swiper
      :modules="modules"
      :navigation="navigation"
      :loop="true"
      :speed="800"
      :breakpoints="swiperOptions.breakpoints"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
    >
      <template v-for="product in products" :key="product.id">
        <template v-if="product.is_hot === 1">
          <swiper-slide> </swiper-slide>
        </template>
      </template>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>

  <div class="swiper-container">
    <div class="swiper swiper1">
      <div class="pink-box"></div>
      <div class="green-box"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="carousel-page">
            <img src="/images/movie_picture/Open03.jpg" class="carousel-img" alt="oppen03" />
            <div class="car-caption">
              <div class="wrap-carousel-title">
                <h3 class="carousel-title">奧本海默</h3>
                <h3 class="carousel-title">Oppenheimer</h3>
              </div>
              <p class="carousel-content">
                由克里斯多福·諾蘭編劇和執導，改編自凱·柏德和馬丁·J·薛文撰寫的傳記《奧本海默》，劇情講述了美國理論物理學家羅伯特·歐本海默參與研製原子彈的過程。全球票房超過9億美元，成為商業表現極為成功的二戰題材電影、傳記片以及R級電影之一
              </p>
              <div class="wrap-carousel-content">
                <!-- 星星 -->
                <div class="wrap-star"></div>
                <p class="carousel-content2">已獲得本周評論數第一名:955則評論</p>
                <button class="btn-carousel">
                  <a
                    href="https://jsproject-movie.github.io/project/newPages/4-1moviestnopsis.html?id=1"
                    class="btn-index-a"
                    >read more <span class="ml-15"></span
                    ><img src="/icons/PlayButton_purple.png" alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';

// import { mapState, mapActions } from 'pinia';

export default {
  data() {
    return {
      cartQty: 1,
      modules: [Navigation, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      swiperOptions: {
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          375: {
            slidesPerView: 1.6,
            spaceBetween: 16
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 16
          }
        }
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {},
  computed: {
    // ...mapState(productStore, ['products']),
  },
  methods: {
    // ...mapActions(productStore, ['getProducts']),
  }
};
</script>

<style lang="scss" scoped>
.slider-box {
  position: relative;
}
.swiper-button-next,
.swiper-button-prev {
  @include mobile() {
    display: none;
  }
}
.swiper-button-prev {
  background: url(../../../public/icons/previous_arrow.png) center center no-repeat;
  background-size: 45px 45px;
  top: 110px;
  left: -90px;
  width: 90px;
  height: 90px;
  color: transparent;
}
.swiper-button-next {
  background: url(../../../public/icons/next_arrow.png) center center no-repeat;
  background-size: 45px 45px;
  top: 110px;
  right: -90px;
  width: 90px;
  height: 90px;
  color: transparent;
}
.swiper-slide img {
  height: 200px;
  @include mobile() {
    height: 200px;
  }
}
</style>
