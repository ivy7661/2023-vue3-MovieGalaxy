<template>
  <section class="text-white">
    <h1 class="mx-2">{{ movie.name }} {{ movie.englishName }}</h1>
    <div>
      <!-- nav-tabs-->
      <div class="d-flex">
        <ul class="nav mb-5" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active fs-5 px-1 mx-2"
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
              class="nav-link fs-5 px-1 mx-2"
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
          class="d-flex text-white btn-post ms-auto me-2 me-lg-7"
          @click="openModal"
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
  <addpost-Modal ref="addPostModal" :temp-movie="movie" @get-posts="getPosts"></addpost-Modal>
</template>

<script>
import axios from 'axios';
import addpostModal from '@/components/front/post/addpostModal.vue';
export default {
  data() {
    return {
      movieId: '',
      movie: {},
      posts: []
    };
  },
  components: {
    addpostModal
  },
  mounted() {
    this.getPosts();
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
    openModal() {
      this.tempPost = {};
      this.$refs.addPostModal.openModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-link {
  @include Inter;
  color: #fff;
  font-size: 20px;
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
  width: 1000px;
  height: 230px;
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
</style>
