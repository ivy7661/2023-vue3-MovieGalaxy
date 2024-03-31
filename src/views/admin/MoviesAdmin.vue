<template>
  <div class="row justify-content-center">
    <div class="col-md-11">
      <h2>電影管理</h2>
      <div class="text-end">
        <!-- @click="openModal('new')" -->
        <button class="btn btn-main text-white" @click="openModal('new')">新增電影</button>
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
                  <button
                    type="button"
                    class="btn btn-outline-blue btn-sm"
                    @click="openModal('edit', movie)"
                  >
                    編輯
                  </button>
                  <!-- @click="openModal('delete', item)" -->
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="openModal('delete', movie)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Movie-Modal
    ref="MovieModal"
    :is-new="isNew"
    :temp-movie="tempMovie"
    @update-movie="updateMovie"
  ></Movie-Modal>
  <Del-Movie-Modal
    ref="DelMovieModal"
    :temp-movie="tempMovie"
    @del-movie="delMovie"
  ></Del-Movie-Modal>
</template>

<script>
import axios from 'axios';
import movieStore from '@/stores/movieStore.js';
import MovieModal from '@/components/admin/MovieModal.vue';
import DelMovieModal from '@/components/admin/DelMovieModal.vue';
import { mapState, mapActions } from 'pinia';
import Alert from '@/utils/swal.js';
export default {
  data() {
    return {
      isNew: false,
      tempMovie: {}
    };
  },
  components: {
    MovieModal,
    DelMovieModal
  },
  mounted() {
    this.getMovies();
  },
  computed: {
    ...mapState(movieStore, ['movies'])
  },
  methods: {
    ...mapActions(movieStore, ['getMovies']),
    openModal(status, movie) {
      if (status === 'new') {
        this.tempMovie = {
          images: [],
          staff: {}
        };
        this.isNew = true;
        this.$refs.MovieModal.openModal();
      } else if (status === 'edit') {
        this.tempMovie = { ...movie };
        this.isNew = false;
        this.$refs.MovieModal.openModal();
      } else if (status === 'delete') {
        this.tempMovie = { ...movie };
        this.$refs.DelMovieModal.openModal();
      }
    },
    updateMovie() {
      let url = `${import.meta.env.VITE_API_URL}/movies`;
      let http = 'post';

      if (!this.isNew) {
        url = `${import.meta.env.VITE_API_URL}/movies/${this.tempMovie.id}`;
        http = 'put';
      }

      axios[http](url, this.tempMovie)
        .then((res) => {
          this.getMovies();
          this.$refs.MovieModal.closeModal();
          if (this.isNew === false) {
            Alert.toastTop('success', '編輯成功');
          } else {
            Alert.toastTop('success', '新增成功');
          }
        })
        .catch(() => {
          Alert.toastTop('error', '編輯失敗');
        });
    },
    delMovie() {
      const url = `${import.meta.env.VITE_API_URL}/movies/${this.tempMovie.id}`;
      axios
        .delete(url)
        .then((res) => {
          this.$refs.DelMovieModal.closeModal();
          this.getMovies();
          Alert.toastTop('success', '刪除成功');
        })
        .catch(() => {
          Alert.toastTop('error', '刪除失敗');
        });
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
