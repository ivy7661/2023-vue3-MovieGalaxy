<template>
  <div class="container">
    <BannerSwiper></BannerSwiper>
  </div>
</template>

<script>
import BannerSwiper from '@/components/front/index/BannerSwiper.vue';
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;

export default {
  data() {
    return {
      movies: []
    };
  },
  components: {
    BannerSwiper
  },
  mounted() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      axios.get(`${VITE_API_URL}/movieDatas`).then((res) => {
        console.log(res);
      });
    }
  }
};
</script>
