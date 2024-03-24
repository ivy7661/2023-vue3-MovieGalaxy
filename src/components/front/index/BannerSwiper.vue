<template>
  <div class="mb-lg-10 d-flex justify-content-center">
    <div class="swiper1 rounded-3 position-relative">
      <div class="bg-green d-none d-lg-block"></div>
      <div class="bg-pink"></div>
      <div class="swiper-wrapper">
        <!-- Slides -->
        <template v-for="movie in movies" :key="movie.id">
          <template v-if="movie.on_banner === 1">
            <div class="swiper-slide">
              <div class="d-flex justify-content-center">
                <img :src="movie.images[0]" class="carousel-img" alt="oppen03" />
                <div class="car-caption d-flex flex-column">
                  <h3 class="carousel-title">{{ movie.name }}</h3>
                  <h3 class="carousel-title">{{ movie.englishName }}</h3>
                  <p class="carousel-content fs-6">
                    {{ movie.intro }}
                  </p>
                  <div class="wrap-carousel-content">
                    <div class="wrap-star">
                      <span v-for="i in movie.ratingStars" :key="i + 123" class="mx-1">
                        <img src="/icons/star1.png" alt="star-full" width="30" height="30" />
                      </span>
                      <span v-for="i in 5 - movie.ratingStars" :key="i + 123" class="mx-1">
                        <img src="/icons/star0.png" alt="star-empty" width="23" height="23" />
                      </span>
                    </div>
                    <p class="fs-6 carousel-content2">{{ movie.info }}</p>
                    <button class="btn-carousel">
                      <a href="#" class="fs-6 btn-index-a"
                        >read more <span class="me-2"></span
                        ><img src="/icons/PlayButton_purple.png" alt="" class="pb-1" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { mapState, mapActions } from 'pinia';
import movieStore from '@/stores/movieStore';

export default {
  data() {
    return {
      swiper1: null
    };
  },
  mounted() {
    this.getMovies();
    this.swiper1 = new Swiper('.swiper1', {
      modules: [Navigation, Pagination, Autoplay],
      loop: false,
      speed: 800,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        1200: {
          slidesPerView: 1
        }
      }
    });
  },
  computed: {
    ...mapState(movieStore, ['movies'])
  },
  methods: {
    ...mapActions(movieStore, ['getMovies'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/helpers/colors';
.swiper1 {
  overflow: hidden;
}
.swiper-button-prev {
  background: url(/icons/leftArrow.png) center center no-repeat;
  background-size: 42px 60px;
  top: 200px;
  left: 5px;
  width: 42px;
  height: 60px;
  color: transparent;
}
.swiper-button-next {
  background: url(/icons/rightArrow.png) center center no-repeat;
  background-size: 42px 60px;
  top: 200px;
  right: 5px;
  width: 42px;
  height: 60px;
  color: transparent;
}

.wrap-carousel-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.carousel-title {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @include Poppins;
  line-height: 150%;
  font-size: 28px;
  background: $bg-c1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.carousel-img {
  max-width: 550px;
  height: 388px;
  margin-top: 20px;
  border-radius: 20px;
  object-position: center center;
}
.car-caption {
  max-width: 390px;
  height: 440px;
  margin-top: 20px;
  margin-left: 30px;
  background-color: $bg-c1;
}
.wrap-carousel-content {
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.carousel-content {
  max-width: 400px;
  color: #fff;
  @include NotoSans;
  text-align: left;
}
.carousel-content2 {
  color: #fff;
  @include NotoSans;
  text-align: center;
}

.wrap-star {
  display: flex;
  @include flex-center;
}
.btn-carousel {
  display: flex;
  max-width: 175px;
  height: 47px;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  border: 2px solid #d7cdff;
  background: linear-gradient(0deg, #fff 0%, #fff 100%);
}

.btn-index-a {
  @include Inter;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  background: $btn-c2;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-green {
  width: 351px;
  height: 351px;
  position: absolute;
  left: 39px;
  top: -33px;
  background: #45dbc0;
  filter: blur(171.5px);
}
.bg-pink {
  width: 172px;
  height: 172px;
  position: absolute;
  right: 9px;
  top: -71px;
  background: #be2ea7;
  filter: blur(171.5px);
}
</style>

<style lang="scss">
// pagination
.swiper-pagination {
  position: relative;
  top: -30px;
  width: 100%;
  text-align: center;
  z-index: 99;
}
.swiper-pagination-bullet {
  width: 80px;
  height: 8px;
  display: inline-block;
  border-radius: 20px;
  background: #8c7b97;
  opacity: 0.3;
  margin: 0 5px;
  outline: 0;
}
.swiper-pagination-bullet-active {
  background: #ffabf7;
}
</style>
