<template>
  <div class="container">
    <BannerSwiper class="d-none d-lg-block"></BannerSwiper>
    <!-- <BannerMobile class="d-lg-none"></BannerMobile> -->
    <!-- <PopularSwiper></PopularSwiper> -->
    <TopDiscuss></TopDiscuss>
    <!-- <ComingSoon></ComingSoon> -->
  </div>
</template>

<script>
import BannerSwiper from '@/components/front/index/BannerSwiper.vue';
// import BannerMobile from '@/components/front/index/BannerMobile.vue';
// import PopularSwiper from '@/components/front/index/PopularSwiper.vue';
import TopDiscuss from '@/components/front/index/TopDiscuss.vue';
// import ComingSoon from '@/components/front/index/ComingSoon.vue';

export default {
  data() {
    return {};
  },
  components: {
    BannerSwiper,
    // BannerMobile,
    // PopularSwiper,
    TopDiscuss
    // ComingSoon
  },
  mounted() {},
  methods: {}
};
</script>
