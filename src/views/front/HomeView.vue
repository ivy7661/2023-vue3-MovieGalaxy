<template>
  <VueLoading :active="isLoading" :is-full-page="fullPage">
    <template #default>
      <MovieLoader />
    </template>
  </VueLoading>

  <BannerSwiper class="d-none d-lg-block"></BannerSwiper>
  <BannerMobile class="d-lg-none"></BannerMobile>
  <PopularSwiper></PopularSwiper>
  <TopDiscuss></TopDiscuss>
  <ComingSoon></ComingSoon>
</template>

<script>
import BannerSwiper from '@/components/front/index/BannerSwiper.vue';
import BannerMobile from '@/components/front/index/BannerMobile.vue';
import PopularSwiper from '@/components/front/index/PopularSwiper.vue';
import TopDiscuss from '@/components/front/index/TopDiscuss.vue';
import ComingSoon from '@/components/front/index/ComingSoon.vue';
import VueLoading from 'vue-loading-overlay';
import MovieLoader from './MovieLoader.vue';

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  components: {
    BannerSwiper,
    BannerMobile,
    PopularSwiper,
    TopDiscuss,
    ComingSoon,
    MovieLoader,
    VueLoading
  },
  created() {
    this.$bus.on('getMovie-start', () => {
      this.isLoading = true;
    });
    this.$bus.on('getMovie-success', () => {
      this.isLoading = false;
    });
  },
  methods: {}
};
</script>
