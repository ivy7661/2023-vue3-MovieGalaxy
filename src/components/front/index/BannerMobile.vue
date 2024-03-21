<template>
  <div class="mb-5">
    <swiper
      :modules="modules"
      :loop="true"
      :speed="800"
      :breakpoints="swiperOptions.breakpoints"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
    >
      <template v-for="movie in movies" :key="movie.id">
        <swiper-slide class="">
          <div>
            <RouterLink :to="`/movies/${movie.id}`">
              <img :src="movie.imgsUrl[0]" :alt="movie.title" class="d-block rounded-3 pic" />
            </RouterLink>
          </div>

          <div class="d-flex justify-content-center">
            <div class="car-caption">
              <div class="wrap-carousel-title mt-2">
                <h3 class="carousel-title">{{ movie.movieName }} {{ movie.movieEnglishName }}</h3>
                <h3 class="carousel-title"></h3>
              </div>
              <p class="carousel-content fs-6">
                {{ movie.movieIntroduction }}
              </p>
              <div class="wrap-carousel-content">
                <div class="wrap-star mb-2">
                  <span v-for="i in movie.ratingStars" :key="i + 123" class="mx-1">
                    <img src="/icons/star1.png" alt="star-full" width="30" height="30" />
                  </span>
                  <span v-for="i in 5 - movie.ratingStars" :key="i + 123" class="mx-1">
                    <img src="/icons/star0.png" alt="star-empty" width="23" height="23" />
                  </span>
                </div>
                <p class="fs-6 carousel-content2">{{ movie.info }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script>
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { mapState, mapActions } from 'pinia';
import 'swiper/scss';
import movieStore from '@/stores/movieStore';

export default {
  data() {
    return {
      modules: [Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      swiperOptions: {
        breakpoints: {
          1200: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          576: {
            slidesPerView: 1,
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

.wrap-carousel-title {
  display: flex;
  justify-content: center;
  align-items: center;
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

.car-caption {
  max-width: 600px;
  // height: 440px;
  // margin-top: 20px;
  // margin-left: 35px;
  background-color: $bg-c1;
}
.wrap-carousel-content {
  height: 100px;
  display: flex;
  flex-direction: column;
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
  @include flex-center;
}
.pic {
  max-width: 500px;
  height: 300px;
}
</style>
