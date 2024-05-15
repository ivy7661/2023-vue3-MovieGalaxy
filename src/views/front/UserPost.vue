<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="d-flex justify-content-center align-items-center mb-5">
        <i class="bi bi-pencil-square fs-2"></i>
        <h2 class="pt-2 ms-3">我的影評列表</h2>
      </div>
      <div class="row">
        <div class="col-12 px-5">
          <template v-for="post in posts" :key="post.id">
            <!-- card -->
            <div class="post-card px-4 py-5 mb-5">
              <h5>{{ post.title }}</h5>
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
  </div>

  <User-Post-Detail ref="userpostModal" :temp-post="tempPost"></User-Post-Detail>
</template>

<script>
import axios from 'axios';
import UserPostDetail from '@/components/front/post/UserPostDetail.vue';

export default {
  data() {
    return {
      posts: [],
      tempPost: {}
    };
  },
  components: {
    UserPostDetail
  },
  mounted() {
    this.getUserPost();
  },
  methods: {
    getUserPost() {
      const userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');

      const url = `${import.meta.env.VITE_API_URL}/users/${userId}?_embed=posts`;
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.posts = res.data.posts;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openDetailModal(post) {
      this.tempPost = { ...post };
      this.$refs.userpostModal.openModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.post-card {
  position: relative;
  height: 230px;
  border-radius: 20px;
  background: linear-gradient(115deg, rgba(91, 79, 124, 0.49) 0%, rgba(57, 30, 54, 0.5) 100.56%);
  box-shadow:
    0px -2px 10px 0px rgba(233, 223, 255, 0.3),
    0px -2px 40px 0px rgba(187, 155, 255, 0.15),
    0px 0.5px 0px 0px rgba(255, 255, 255, 0.5) inset;
}
.post-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
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
</style>
