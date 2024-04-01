<template>
  <div class="user-container">
    <HeaderComponent />
    <main class="container mainView">
      <RouterView></RouterView>
    </main>
    <!-- <Returntop-Btn></Returntop-Btn> -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/front/HeaderComponent.vue';
import FooterComponent from '@/components/front/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style lang="scss" scoped>
.mainView {
  min-height: calc(100vh - 300px);
}
.user-container {
  background: var(
    --web_BK_1,
    linear-gradient(142deg, #404c53 21.85%, #382538 56.98%, #161618 91.4%)
  );
}
</style>
