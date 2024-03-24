<template>
  <div class="position-relative mb-10">
    <div class="bg-title d-flex justify-content-center mx-1 mb-5">
      <div class="wrap-title position-relative">
        <div class="bg-purple d-none d-lg-block"></div>
        <h2 class="main-title fs-1">Coming Soon to theaters</h2>
        <h3 class="subtitle fs-6 fw-normal">即將上映</h3>
      </div>
    </div>
    <div class="swiper3 rounded-3 position-relative px-10">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <template v-for="movie in popularMovies" :key="movie.id">
          <template v-if="movie.is_coming === 1">
            <div class="swiper-slide">
              <div class="wrap-card">
                <div class="d-flex justify-content-center">
                  <RouterLink to="">
                    <img :src="movie.image" :alt="movie.name" class="w-100 d-block rounded-3 pic" />
                  </RouterLink>
                </div>
                <div class="wrap-info d-flex flex-column justify-content-between py-3 py-lg-4">
                  <div class="d-flex">
                    <span v-for="i in movie.ratingStars" :key="i + 123" class="mx-lg-1">
                      <img src="/icons/star1.png" alt="star-full" class="star1" />
                    </span>
                    <span v-for="i in 5 - movie.ratingStars" :key="i + 123" class="mx-lg-1">
                      <img src="/icons/star0.png" alt="star-empty" class="star0 pt-1" />
                    </span>
                  </div>
                  <h4 class="fs-5 text-white mb-2 mb-lg-3">{{ movie.name }}</h4>
                  <btton class="btn-vedio">
                    <a href="#" class="vedio-link">
                      <img src="/icons/PlayButton.svg" alt="" /><span class="me-2"></span>預告片
                    </a>
                  </btton>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
      <div class="swiper-button-prev3"></div>
      <div class="swiper-button-next3"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { mapState, mapActions } from 'pinia';
import movieStore from '@/stores/movieStore';

export default {
  data() {
    return {
      swiper3: [],
      popularMovies: []
    };
  },
  mounted() {
    this.getMovies();
    this.swiper3 = new Swiper('.swiper3', {
      modules: [Navigation, Autoplay],
      loop: false,
      speed: 800,
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 30
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 16
        }
      }
    });
  },
  computed: {
    ...mapState(movieStore, ['movies'])
  },
  watch: {
    movies() {
      this.popularMovies = this.movies;
    }
  },
  methods: {
    ...mapActions(movieStore, ['getMovies'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/helpers/colors';
.swiper3 {
  overflow: hidden;
}
.swiper-button-prev3 {
  background: url(/icons/leftArrow.png) center center no-repeat;
  background-size: 42px 60px;
  top: 230px;
  left: 5px;
  width: 42px;
  height: 60px;
  color: transparent;
  position: absolute;
  z-index: 999;
}
.swiper-button-next3 {
  background: url(/icons/rightArrow.png) center center no-repeat;
  background-size: 42px 60px;
  top: 230px;
  right: 5px;
  width: 42px;
  height: 60px;
  color: transparent;
  position: absolute;
  z-index: 999;
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
  margin-left: 60px;
  margin-top: 20px;
  border-radius: 20px;
  object-position: center center;
}
.car-caption {
  max-width: 455px;
  height: 440px;
  margin-top: 20px;
  margin-left: 35px;
  background-color: $bg-c1;
}
.wrap-carousel-content {
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
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
.pic {
  max-width: 200px;
  height: 300px;
}
.vedio-link {
  @include Inter;
  padding: 5px;
  color: #fff;
  opacity: 0.5;
}
.wrap-info {
  height: 162px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(36, 24, 24, 0.2) 0%, rgba(36, 24, 24, 0) 100%);
}
.wrap-card {
  max-width: 260px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid #b88ed3;
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.25);
}
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
.bg-purple {
  position: absolute;
  left: 400px;
  width: 172px;
  height: 172px;
  flex-shrink: 0;
  background: #5c6dc6;
  filter: blur(150px);
}
.star1 {
  max-width: 30px;
}
.star0 {
  max-width: 23px;
}
</style>
