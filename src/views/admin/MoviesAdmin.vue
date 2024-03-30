<template>
  <div class="row justify-content-center">
    <div class="col-md-11">
      <h2>電影管理</h2>
      <div class="text-end">
        <!-- @click="openModal('new')" -->
        <button class="btn btn-main text-white" @click="openModal()">新增電影</button>
      </div>
      <div class="row">
        <table class="table mt-4 mx-2">
          <thead class="table-light">
            <tr>
              <th width="205">電影名稱</th>
              <th width="90">類型</th>
              <th width="90">簡介</th>
              <th width="120" class="text-center">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="movie in movies" :key="movie.id">
              <td>{{ movie.name }}</td>
              <td>{{ movie.type }}</td>
              <td>
                <p class="commentContent">
                  {{ movie.intro }}
                </p>
              </td>
              <td class="text-center">
                <div class="btn-group">
                  <!-- @click="openModal('edit', item)" -->
                  <button type="button" class="btn btn-outline-blue btn-sm">編輯</button>
                  <!-- @click="openModal('delete', item)" -->
                  <button type="button" class="btn btn-outline-danger btn-sm">刪除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Movie-Modal ref="MovieModal" :is-new="isNew"></Movie-Modal>
</template>

<script>
import movieStore from '@/stores/movieStore.js';
import MovieModal from '@/components/admin/MovieModal.vue';
import { mapState, mapActions } from 'pinia';
export default {
  data() {
    return {
      isNew: false
    };
  },
  components: {
    MovieModal
  },
  mounted() {
    this.getMovies();
  },
  computed: {
    ...mapState(movieStore, ['movies'])
  },
  methods: {
    ...mapActions(movieStore, ['getMovies']),
    openModal() {
      this.$refs.MovieModal.openModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-main {
  border-radius: 10px;
  border: 1px solid #b3b6f2;
  background: #30526d;
  box-shadow: 9px 5px 10px 0px rgba(110, 62, 147, 0.25);
}
.btn-text {
  @include Inter;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.commentContent {
  width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
h2 {
  @include Inter;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
}
th,
td {
  padding: 8px 30px;
}
tr:first-child th:first-child {
  border-top-left-radius: 5px;
}
tr:last-child td:first-child {
  border-bottom-left-radius: 5px;
}
tr:first-child th:last-child {
  border-top-right-radius: 5px;
}
tr:last-child td:last-child {
  border-bottom-right-radius: 5px;
}
</style>
