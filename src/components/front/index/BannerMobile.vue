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
      <template v-for="movie in movies" :key="movie.id">
        <swiper-slide>
          <div class="position-relative hover-show-btn">
            <div class="pic">
              <RouterLink :to="`/movies/${movie.id}`" class="pic">
                <img :src="movie.imgUrl" :alt="movie.title" class="w-100 d-block rounded-3" />
              </RouterLink>
            </div>
          </div>
          <RouterLink :to="`/movies/${movie.id}`">
            <div class="py-3 py-lg-4">
              <h4 class="fs-5 fs-lg-4 text-dark mb-2 mb-lg-3">{{ movie.movieName }}</h4>
            </div>
          </RouterLink>
        </swiper-slide>
      </template>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { mapState, mapActions } from 'pinia';
import 'swiper/scss';
import 'swiper/scss/navigation';
import movieStore from '@/stores/movieStore';

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

.add-to-cart-btn {
  display: none;
}
.hover-show-btn:hover {
  .add-to-cart-btn {
    display: block;
    width: 90%;
  }
}

.pic:before {
  content: '';
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.4s ease;
}
.pic:hover:before {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
