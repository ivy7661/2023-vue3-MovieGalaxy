<template>
  <!-- 記得改動態路由 -->
  <section class="d-flex flex-column flex-lg-row py-8">
    <div class="col-12 col-lg-5 justify-content-center me-lg-5 mb-5 mb-lg-0">
      <div class="px-5">
        <img src="https://i.meee.com.tw/97RkiWe.jpg" alt="電影海報" class="poster" />
      </div>
    </div>
    <div class="col-12 col-lg-6">
      <div class="d-flex flex-column text-white align-items-center align-items-lg-start">
        <h2 class="mb-2">奧本海默</h2>
        <h2 class="text-uppercase">Oppenheimer</h2>
        <div class="d-flex justify-content-start my-4">
          <span v-for="i in 5" :key="i + 123" class="me-lg-1">
            <img src="/icons/star_full.svg" alt="star-full" class="star" />
          </span>
          <!-- <span v-for="i in 5 - movie.ratingStars" :key="i + 123" class="me-lg-1">
            <img src="/icons/star_empty.svg" alt="star-empty" class="star" />
          </span> -->
        </div>
        <button class="btn-view mb-8">
          <div class="text-view">查看影評</div>
        </button>
        <p class="fw-bold">電影簡介:</p>
        <p class="movie-intro">
          美國科學家 J. 羅伯特·奧本海默的故事以及他在原子彈研發中所扮演的角色。
        </p>
        <hr />
        <div class="d-flex flex-row mb-2">
          <span class="fw-bold">導演：</span>
          <span>克里斯多福·諾蘭</span>
        </div>
        <div class="d-flex flex-row">
          <span class="fw-bold">主演：</span>
          <span> 席尼·墨菲、艾蜜莉·布朗、麥特·戴蒙</span>
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
      <!-- easy -->
      <div>
        <VueEasyLightbox
          :visible="visible"
          :imgs="imgs"
          :index="index"
          @hide="handleHide"
        ></VueEasyLightbox>
      </div>
      <!-- v-for -->
      <div class="d-flex flex-row justufy-content-center">
        <div v-for="(src, index) in imgs" :key="index" class="mx-auto" @click="showImg(index)">
          <img :src="src" class="still mx-1" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      vt_url: 'https://www.youtube.com/watch?v=cnc8mDAB7QI',
      videoID: '',
      ytlink: '',
      imgs: [
        'https://i.meee.com.tw/uii7iHw.jpg',
        'https://i.meee.com.tw/ZOTR33I.jpg',
        'https://i.meee.com.tw/sYEMq7G.jpg',
        'https://i.meee.com.tw/EXRsLGY.png'
      ],
      visible: false,
      index: 0 // default,
    };
  },
  mounted() {
    this.change_yt();
  },
  methods: {
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
    showSingle() {
      this.imgs = 'https://i.meee.com.tw/EXRsLGY.png';
      this.show();
    },
    showMultiple() {
      this.imgs = ['https://i.meee.com.tw/EXRsLGY.png', 'https://i.meee.com.tw/sYEMq7G.jpg'];
      this.index = 1; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
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
  max-width: 385px;
  @include mobile() {
    max-width: 250px;
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
