<template>
  <section class="d-flex flex-column flex-lg-row py-6">
    <div class="col-12 col-lg-5 justify-content-center me-lg-5 mb-5 mb-lg-0">
      <div class="d-flex justify-content-center">
        <img :src="movieInfo.image" alt="電影海報" class="poster" />
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="d-flex flex-column text-white">
        <div class="d-flex flex-column align-items-center align-items-lg-start">
          <h2 class="mb-2">{{ movieInfo.name }}</h2>
          <h2 class="text-uppercase">{{ movieInfo.englishName }}</h2>
          <div class="d-flex justify-content-start my-4">
            <span v-for="i in movieInfo.ratingStars" :key="i + 123" class="me-lg-1">
              <img src="/icons/star_full.svg" alt="star-full" class="star" />
            </span>
            <span v-for="i in 5 - movieInfo.ratingStars" :key="i + 123" class="me-lg-1">
              <img src="/icons/star_empty.svg" alt="star-empty" class="star" />
            </span>
          </div>
          <router-link :to="`posts/${movieInfo.id}`">
            <button class="btn-view mb-8">
              <div class="text-view">查看影評</div>
            </button>
          </router-link>
        </div>
        <p class="fw-bold">電影簡介:</p>
        <p class="movie-intro">
          {{ movieInfo.intro }}
        </p>
        <hr />
        <div class="d-flex flex-row mb-2">
          <span class="fw-bold">導演：</span>
          <span>{{ movieInfo.staff.director }}</span>
        </div>
        <div class="d-flex flex-row">
          <span class="fw-bold">主演：</span>
          <span> {{ movieInfo.staff.actor }}</span>
        </div>
      </div>
    </div>
  </section>
  <section class="trailer-container text-white my-4 px-4 py-4">
    <div class="d-flex flex-row mb-3">
      <i class="bi bi-play-fill fs-3 me-2"></i>
      <h3 class="pt-1">預告片</h3>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <iframe
        :src="ytlink"
        title=""
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="player"
      ></iframe>
    </div>
  </section>
  <section class="text-white my-14">
    <div class="still-container px-4 py-5">
      <div class="d-flex flex-row">
        <img src="/icons/masonry.svg" alt="masonry" width="25" height="25" class="pt-1" />
        <h3 class="ms-2 mb-5">劇照</h3>
      </div>
      <!-- Lightbox -->
      <div>
        <VueEasyLightbox
          :visible="visible"
          :imgs="imgs"
          :index="index"
          @hide="handleHide"
        ></VueEasyLightbox>
      </div>
      <div class="d-flex flex-column flex-lg-row justufy-content-center">
        <div v-for="(src, index) in imgs" :key="index" class="mx-auto" @click="showImg(index)">
          <img :src="src" class="still mx-1 mb-3" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Alert from '@/utils/swal.js';
export default {
  data() {
    return {
      vt_url: '',
      videoID: '',
      ytlink: '',
      imgs: [],
      visible: false,
      index: 0, // default,
      movieId: '',
      movieInfo: {}
    };
  },
  mounted() {
    // this.change_yt();
    this.getMovie();
  },
  watch: {
    '$route.params': {
      immediate: true,
      handler() {
        if (this.$route.params.id) {
          this.getMovie();
        }
      }
    }
  },
  methods: {
    getMovie() {
      this.movieId = this.$route.params.id;
      const url = `${import.meta.env.VITE_API_URL}/movies/${this.movieId}`;
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.movieInfo = res.data;
          this.vt_url = `https://www.youtube.com/watch?v=${res.data.videoId}`;
          this.imgs = res.data.images;
          this.ytlink = `https://www.youtube.com/embed/${res.data.videoId}`;
          this.change_yt();
        })
        .catch(() => {
          Alert.toastTop('err', '載入失敗');
        });
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    change_yt() {
      let str = this.vt_url;
      const urlParams = new URLSearchParams(str.split('?')[1]);
      const vid = urlParams.get('v');
      if (vid != null) {
        this.videoID = vid;
      } else {
        const f1 = str.indexOf('?');
        if (f1 !== -1) {
          str = str.split('?')[0];
        }
        const f2 = str.indexOf('youtu.be');
        const f3 = str.indexOf('embed');
        if (f2 !== -1) {
          this.videoID = str.split('youtu.be/')[1];
        } else if (f3 !== -1) {
          this.videoID = str.split('embed/')[1];
        } else {
          this.videoID = '';
        }
      }
      this.ytlink = 'https://www.youtube.com/embed/' + this.videoID;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/helpers/colors';
.player {
  width: 800px;
  height: 500px;
  @include mobile() {
    width: 250px;
    height: 200px;
  }
}
.poster {
  max-width: 350px;
  height: 550px;
  @include mobile() {
    max-width: 250px;
    height: 400px;
  }
}
.btn-view {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #b37dd4;
  background: linear-gradient(271deg, #6a477f 11.6%, #30536d 94.29%);
}
.text-view {
  @include Inter;
  color: #fff;
  font-weight: 700;
}
hr {
  background-color: #fff;
  height: 0.5px;
  border: none;
}
.movie-intro {
  height: 100px;
}

.trailer-container {
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.4) 19.22%, rgba(31, 32, 42, 0.4) 94.28%);
  backdrop-filter: blur(20px);
}
.still-container {
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.07) 19.22%, rgba(103, 103, 107, 0.4) 94.28%);
  backdrop-filter: blur(20px);
}
.still {
  width: 250px;
  height: 150px;
}
</style>
