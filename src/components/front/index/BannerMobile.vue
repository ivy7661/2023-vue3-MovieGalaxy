<template>
  <div class="mb-5">
    <div class="swiper0 rounded-3 position-relative">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <template v-for="movie in bannerMovies" :key="movie.id">
          <template v-if="movie.on_banner === 1">
            <div class="swiper-slide">
              <div class="d-flex justify-content-center">
                <RouterLink :to="`movies/${movie.id}`">
                  <img :src="movie.images[0]" :alt="movie.title" class="d-block rounded-3 pic" />
                </RouterLink>
              </div>
              <div class="d-flex justify-content-center">
                <div class="car-caption d-flex flex-column justify-content-center">
                  <RouterLink :to="`movies/${movie.id}`" class="wrap-carousel-title mt-2">
                    <h3 class="carousel-title">{{ movie.name }}</h3>
                    <h3 class="carousel-title text-center">{{ movie.englishName }}</h3>
                  </RouterLink>
                  <p class="carousel-content text-center fs-6">
                    {{ movie.intro }}
                  </p>
                  <div class="wrap-carousel-content">
                    <div class="wrap-star mb-2">
                      <span v-for="i in movie.ratingStars" :key="i + 123" class="mx-1">
                        <img src="/icons/star_full.svg" alt="star-full" width="30" height="30" />
                      </span>
                      <span v-for="i in 5 - movie.ratingStars" :key="i + 123" class="mx-1">
                        <img src="/icons/star_empty.svg" alt="star-empty" width="23" height="23" />
                      </span>
                    </div>
                    <p class="fs-6 carousel-content2">{{ movie.info }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { mapState, mapActions } from 'pinia';
import 'swiper/scss';
import movieStore from '@/stores/movieStore';

export default {
  data() {
    return {
      swiper0: null,
      bannerMovies: []
    };
  },
  mounted() {
    this.getMovies();
    this.swiper0 = new Swiper('.swiper0', {
      modules: [Autoplay],
      loop: false,
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 50
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 50
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 50
        }
      }
    });
  },
  computed: {
    ...mapState(movieStore, ['movies'])
  },
  watch: {
    movies() {
      this.bannerMovies = this.movies;
    }
  },
  methods: {
    ...mapActions(movieStore, ['getMovies'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/helpers/colors';
.swiper0 {
  overflow: hidden;
}
.carousel-title {
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @include Poppins;
  line-height: 150%;
  background: $bg-c1;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.car-caption {
  max-width: 450px;
  background-color: $bg-c1;
}
.wrap-carousel-content {
  display: flex;
  flex-direction: column;
}
.carousel-content {
  max-width: 500px;
  color: #fff;
  @include NotoSans;
  text-align: right;
}
.carousel-content2 {
  color: #fff;
  @include NotoSans;
  text-align: center;
}
.wrap-star {
  @include flex-center;
}
.pic {
  width: 400px;
  height: 300px;
}
</style>
