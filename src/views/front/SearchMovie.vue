<template>
  <!-- 思路 -->
  <!-- v-if=filter關鍵字 && selected value===movie.type -->

  <!-- 搜尋框 -->
  <div class="row justify-content-center my-3">
    <div class="col-md-6 d-flex flex-row">
      <input
        class="form-control me-2 searchInput"
        type="search"
        placeholder="Search"
        v-model.lazy.trim="keyWord"
      />
      <select v-model="selected">
        <option value="">全部</option>
        <option value="劇情片">劇情片</option>
        <option value="動作片">動作片</option>
        <option value="愛情片">愛情片</option>
      </select>
    </div>
  </div>
  <!-- 搜尋結果 -->
  <div v-for="movie in filterMovies" :key="movie.id">
    <!-- v-if="movie.type === selected" -->

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
    return {
      keyWord: '',
      selected: ''
    };
  },
  mounted() {
    this.getMovies();
  },
  computed: {
    ...mapState(movieStore, ['movies']),
    filterMovies() {
      if (!this.keyWord && !this.selected) {
        return []; // 如果沒有輸入關鍵字且未選擇dropdown，則返回空陣列
      }
      const strArr = this.keyWord.split(' '); // 以空白格切分字串
      const arr = []; // 篩選出搜尋結果的陣列
      // 比對字串
      strArr.forEach((str) => {
        this.movies.forEach((item) => {
          if (item.name.includes(str) || item.englishName.includes(str)) {
            if (this.selected === '' || this.selected === item.type) {
              arr.push(item);
            }
          }
        });
      });
      // 如果輸入兩個關鍵字就會出現重複的資料，所以需要刪除重複資料。
      // 過濾出重複的元素
      return [...new Set(arr)];
    }
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
