<template>
  <!-- 搜尋結果 -->
  <div v-for="movie in movies" :key="movie.id">
    <div class="d-flex justify-content-center align-items-center my-5">
      <router-link :to="`movies/${movie.id}`">
        <div class="movie-card d-flex flex-column flex-lg-row text-white px-4 py-5">
          <div class="d-flex justify-content-center mb-3 mb-lg-0 me-lg-5">
            <img :src="movie.image" alt="電影海報" class="poster" />
          </div>
          <div>
            <div class="d-flex flex-column align-items-center align-items-lg-start">
              <h3>{{ movie.name }}</h3>
              <h4>{{ movie.englishName }}</h4>
              <div class="wrap-star mb-3">
                <span v-for="i in movie.ratingStars" :key="i + 123" class="mx-1">
                  <img src="/icons/star_full.svg" alt="star-full" width="30" height="30" />
                </span>
                <span v-for="i in 5 - movie.ratingStars" :key="i + 123" class="mx-1">
                  <img src="/icons/star_empty.svg" alt="star-empty" width="30" height="30" />
                </span>
              </div>
            </div>
            <p>語言：{{ movie.language }}</p>
            <p>片長：{{ movie.movieLength }}</p>
            <p>導演：{{ movie.staff.director }}</p>
            <p>主演：{{ movie.staff.actor }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import movieStore from '@/stores/movieStore';

export default {
  data() {
    return {};
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
.movie-card {
  width: 760px;
  height: 380px;
  border-radius: 20px;
  border: 2px solid #9498fe;
  background: linear-gradient(
    115deg,
    rgba(67, 14, 100, 0.25) 0%,
    rgba(227, 255, 243, 0.19) 100.56%
  );
  @include mobile() {
    height: 710px;
  }
}
.poster {
  width: 180px;
}
</style>
