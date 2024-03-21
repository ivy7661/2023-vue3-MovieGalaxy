<template>
  <div class="container">
    <BannerSwiper class="d-none d-md-block"></BannerSwiper>
    <BannerMobile class="d-md-none"></BannerMobile>

    <PopularSwiper></PopularSwiper>
  </div>
</template>

<script>
import BannerSwiper from '@/components/front/index/BannerSwiper.vue';
import BannerMobile from '@/components/front/index/BannerMobile.vue';
import PopularSwiper from '@/components/front/index/PopularSwiper.vue';

export default {
  data() {
    return {};
  },
  components: {
    BannerSwiper,
    BannerMobile,
    PopularSwiper
  },
  mounted() {},
  methods: {}
};
</script>
