<template>
  <div class="position-relative mb-5">
    <swiper
      :modules="modules"
      :navigation="navigation"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :loop="true"
      :speed="800"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      class="rounded-3 position-relative"
    >
      <div class="bg-green rounded-3"></div>
      <div class="bg-pink"></div>
      <template v-for="movie in movies" :key="movie.id">
        <!-- v-if="movie.is_hot === 1" -->
        <swiper-slide>
          <div class="d-flex">
            <img src="/images/movie_picture/Open03.jpg" class="carousel-img" alt="oppen03" />
            <div class="car-caption">
              <div class="wrap-carousel-title">
                <h3 class="carousel-title">{{ movie.movieName }}</h3>
                <h3 class="carousel-title">Oppenheimer</h3>
              </div>
              <p class="carousel-content fs-6">
                {{ movie.movieIntroduction }}
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
                <p class="fs-6 carousel-content2">已獲得本周評論數第一名:955則評論</p>
                <button class="btn-carousel">
                  <a
                    href="https://jsproject-movie.github.io/project/newPages/4-1moviestnopsis.html?id=1"
                    class="fs-6 btn-index-a"
                    >read more <span class="ml-15"></span
                    ><img src="/icons/PlayButton_purple.png" alt="" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </template>
      <div class="swiper-pagination"></div>
    </swiper>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { mapState, mapActions } from 'pinia';
import movieStore from '@/stores/movieStore';

export default {
  data() {
    return {
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {
    this.getMovies();
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

.swiper-button-next,
.swiper-button-prev {
  @include lg() {
    display: none;
  }
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

//css 輪播
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
