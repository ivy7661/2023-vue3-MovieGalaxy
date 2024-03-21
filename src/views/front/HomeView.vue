<template>
  <BannerSwiper class="d-none d-md-block"></BannerSwiper>
  <!-- d-md-none -->
  <BannerMobile></BannerMobile>
</template>

<script>
import BannerSwiper from '@/components/front/index/BannerSwiper.vue';
import BannerMobile from '@/components/front/index/BannerMobile.vue';

export default {
  data() {
    return {};
  },
  components: {
    BannerSwiper,
    BannerMobile
  },
  mounted() {},
  methods: {}
};
</script>
