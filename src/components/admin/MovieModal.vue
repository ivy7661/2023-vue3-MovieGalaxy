<template>
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-light">
            <span v-if="isNew">新增電影</span>
            <span v-else>編輯電影資料</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row px-3">
            <div class="col-sm-4">
              <div class="mb-5">
                <label for="image" class="form-label">電影海報</label>
                <input
                  type="text"
                  id="image"
                  class="form-control mb-3"
                  placeholder="請輸入圖片連結"
                  v-model="editMovie.image"
                />
                <img :src="editMovie.image" class="img-fluid" />
              </div>
              <h3 class="mb-3">新增劇照</h3>
              <div v-for="(image, key) in editMovie.images" :key="key" class="mb-4">
                <div class="mb-3">
                  <label :for="image + key" class="form-label">圖片網址</label>
                  <input
                    type="text"
                    :id="image + key"
                    class="form-control mb-3"
                    placeholder="請輸入圖片連結"
                    v-model="editMovie.images[key]"
                  />
                </div>
                <img :src="image" class="img-fluid" />
              </div>
              <!-- 判斷要出現新增 or 刪除按鈕 -->
              <div v-if="!editMovie.images.length || editMovie.images[editMovie.images.length - 1]">
                <button
                  type="button"
                  class="btn btn-outline-success w-100 mt-2"
                  @click="editMovie.images.push('')"
                >
                  新增劇照
                </button>
              </div>
              <div v-else>
                <button type="button" class="btn btn-danger w-100" @click="editMovie.images.pop()">
                  刪除劇照
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <pre>{{ editMovie }}</pre>
              <div class="mb-3">
                <label for="name" class="form-label">電影名稱</label>
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="請輸入電影名稱"
                  v-model="editMovie.name"
                />
              </div>
              <div class="mb-3">
                <label for="englishName" class="form-label">英文名稱</label>
                <input
                  type="text"
                  id="englishName"
                  class="form-control"
                  placeholder="請輸入英文名稱"
                  v-model="editMovie.englishName"
                />
              </div>

              <div class="row mb-3">
                <div class="col-md-4">
                  <label for="language" class="form-label">語言</label>
                  <input
                    type="text"
                    id="language"
                    class="form-control"
                    v-model="editMovie.language"
                  />
                </div>
                <div class="col-md-4">
                  <label for="movieLength" class="form-label">片長</label>
                  <input
                    type="text "
                    id="movieLength"
                    class="form-control"
                    v-model="editMovie.movieLength"
                  />
                </div>
                <div class="col-md-4">
                  <label for="type" class="form-label">類型</label>
                  <input type="text" id="type" class="form-control" v-model="editMovie.type" />
                </div>
              </div>

              <div class="row mb-3">
                <div class="col-md-4">
                  <label for="ratingStars" class="form-label">評分</label>
                  <input
                    type="number"
                    id="ratingStars"
                    class="form-control"
                    v-model.number="editMovie.ratingStars"
                  />
                </div>
                <div class="col-md-4">
                  <label for="videoId" class="form-label">預告片ID</label>
                  <input
                    type="text"
                    id="videoId"
                    class="form-control"
                    v-model="editMovie.videoId"
                  />
                </div>
                <div class="col-md-4">
                  <label for="director" class="form-label">導演</label>
                  <input
                    type="text "
                    id="director"
                    class="form-control"
                    v-model="editMovie.staff.director"
                  />
                </div>
              </div>

              <div class="mb-3">
                <label for="actor" class="form-label">主演</label>
                <input
                  type="text"
                  id="actor"
                  class="form-control"
                  v-model="editMovie.staff.actor"
                />
              </div>

              <div class="mb-3">
                <label for="info" class="form-label">電影資訊</label>
                <textarea type="text" id="info" class="form-control" v-model="editMovie.info" />
              </div>

              <div class="mb-3">
                <label for="intro" class="form-label">電影簡介</label>
                <textarea type="text" id="intro" class="form-control" v-model="editMovie.intro" />
              </div>

              <div class="row mb-3">
                <div class="col-sm-4">
                  <input
                    type="checkbox"
                    id="is_hot"
                    class="form-check-input"
                    :true-value="1"
                    :false-value="0"
                    v-model="editMovie.is_hot"
                  />
                  <label for="is_hot" class="form-check-label ms-2"> 是否熱門 </label>
                </div>
                <div class="col-sm-4">
                  <input
                    type="checkbox"
                    id="is_coming"
                    class="form-check-input"
                    :true-value="1"
                    :false-value="0"
                    v-model="editMovie.is_coming"
                  />
                  <label for="is_coming" class="form-check-label ms-2">是否即將上映</label>
                </div>
                <div class="col-sm-4">
                  <input
                    type="checkbox"
                    id="on_banner"
                    class="form-check-input"
                    :true-value="1"
                    :false-value="0"
                    v-model="editMovie.on_banner"
                  />
                  <label for="on_banner" class="form-check-label ms-2"> 是否在banner輪播</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-blue" @click="$emit('updateMovie')">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/utils/modalMixin.js';
export default {
  props: ['isNew', 'tempMovie'],
  mixins: [modalMixin],
  data() {
    return {
      editMovie: {
        images: [],
        staff: {}
      }
    };
  },
  watch: {
    tempMovie() {
      this.editMovie = this.tempMovie;
    }
  }
};
</script>
