<template>
  <section class="text-white">
    <h2 class="mx-2 mb-3 movie-title">{{ movie.name }} {{ movie.englishName }}</h2>
    <div>
      <!-- nav-tabs-->
      <div class="d-flex">
        <ul class="nav mb-5" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active px-1 mx-2"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all"
              href="#"
              role="tab"
            >
              所有影評
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link px-1 mx-2"
              id="noSpoiler-tab"
              data-bs-toggle="tab"
              data-bs-target="#noSpoiler"
              href="#"
              role="tab"
            >
              無雷影評
            </a>
          </li>
        </ul>
        <button
          type="button"
          class="d-flex text-white btn-post ms-auto me-2 me-lg-4"
          @click="openAddModal"
        >
          <div class="d-none d-lg-block addPost me-3">我要評論</div>
          <i class="bi bi-pencil-square fs-5"></i>
        </button>
      </div>
      <!-- nav-tabs-content-->
      <template v-if="posts.length">
        <div class="tab-content" id="myTabContent">
          <!-- 全部 -->
          <div class="tab-pane fade show active" id="all" role="tabpanel">
            <div class="d-flex flex-column justify-content-center px-4">
              <div class="row d-flex flex-column align-items-center">
                <template v-for="post in posts" :key="post.id">
                  <!-- card -->
                  <div class="post-card px-4 py-5 mb-5">
                    <h5>{{ post.title }}</h5>
                    <p>{{ post.userName }}</p>
                    <p v-html="post.content" class="post-content"></p>
                    <button
                      type="button"
                      class="ms-auto d-flex flex-row justify-content-center align-items-center open-detail"
                      @click="openDetailModal(post)"
                    >
                      <div class="text-open">展開影評</div>
                      <i class="bi bi-chevron-down text-white fs-6 ms-3"></i>
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <!-- 無雷 -->
          <div class="tab-pane fade" id="noSpoiler" role="tabpanel">
            <div class="d-flex flex-column justify-content-center px-4">
              <div class="row d-flex flex-column align-items-center">
                <template v-for="post in posts" :key="post.id">
                  <div v-if="!post.is_spoiled" class="post-card px-4 py-5 mb-5">
                    <!-- card -->
                    <h5>{{ post.title }}</h5>
                    <p>{{ post.userName }}</p>
                    <p v-html="post.content" class="post-content"></p>
                    <button
                      type="button"
                      class="ms-auto d-flex flex-row justify-content-center align-items-center open-detail"
                      @click="openDetailModal"
                    >
                      <div class="text-open">展開影評</div>
                      <i class="bi bi-chevron-down text-white fs-6 ms-3"></i>
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="!posts.length">
        <div class="row justify-content-center align-items-center">
          <h2 class="noPost">本片尚無影評，快來寫下你的評論吧！</h2>
        </div>
      </template>
    </div>
  </section>
  <Addpost-Modal ref="addPostModal" :temp-movie="movie" @get-posts="getPosts"></Addpost-Modal>
  <Post-Detail ref="postDetailModal" :temp-movie="movie" :temp-post="tempPost"></Post-Detail>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import AddpostModal from '@/components/front/post/AddpostModal.vue';
import PostDetail from '@/components/front/post/PostDetail.vue';
export default {
  data() {
    return {
      movieId: '',
      movie: {},
      posts: [],
      userId: '',
      tempPost: {}
    };
  },
  components: {
    AddpostModal,
    PostDetail
  },
  mounted() {
    this.getPosts();
    const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.userId = userId;
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler() {
        if (this.$route.params.id) {
          this.getPosts();
        }
      }
    }
  },
  methods: {
    getPosts() {
      this.movieId = this.$route.params.id;
      const url = `${import.meta.env.VITE_API_URL}/movies/${this.movieId}?_embed=posts`;

      axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.movie = res.data;
          this.posts = res.data.posts;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openAddModal() {
      if (!this.userId) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: '請先登入會員'
        });
        return;
      }
      this.tempPost = {};
      this.$refs.addPostModal.openModal();
    },
    openDetailModal(post) {
      this.tempPost = { ...post };
      this.$refs.postDetailModal.openModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-link {
  @include Inter;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  border-bottom: 3px solid transparent;
  &:hover {
    border-color: transparent;
  }
}
.nav-link:focus {
  border-color: transparent;
}

.nav-link.active {
  background: linear-gradient(89deg, #c9e5e8 31.72%, #e8a7d6 68.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 3px solid;
  border-image: linear-gradient(to right, #a880c8, #966eb5) 1;
}
.post-card {
  position: relative;
  width: 1000px;
  height: 260px;
  border-radius: 20px;
  background: linear-gradient(115deg, rgba(91, 79, 124, 0.49) 0%, rgba(57, 30, 54, 0.5) 100.56%);
  box-shadow:
    0px -2px 10px 0px rgba(233, 223, 255, 0.3),
    0px -2px 40px 0px rgba(187, 155, 255, 0.15),
    0px 0.5px 0px 0px rgba(255, 255, 255, 0.5) inset;
}
.noPost {
  width: 800px;
  height: 200px;
}
.post-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.btn-post {
  max-width: 200px;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #b3b6f2;
  background: linear-gradient(115deg, #8673d4 0%, #8f268b 100.56%);
  box-shadow: 9px 5px 10px 0px rgba(110, 62, 147, 0.25);
}
.addPost {
  @include Inter;
  font-size: 20px;
  font-weight: 700;
}
.open-detail {
  position: absolute;
  bottom: 20px;
  right: 25px;
  width: 150px;
  height: 30px;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #b3b6f2;
  background: linear-gradient(115deg, #8673d4 0%, #8f268b 100.56%);
  box-shadow: 9px 5px 10px 0px rgba(110, 62, 147, 0.25);
}
.text-open {
  @include Inter;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.movie-title {
  color: #fff;
  font-family: Inter;
  font-size: 45px;
}
</style>
