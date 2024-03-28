<template>
  <div id="addPostModal" ref="modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-xl post-modal">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="addPostModalLabel" class="text-white modal-title">
            電影名稱：{{ tempMovie.name }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <!-- <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">圖片</label>
                <input
                  id="imageUrl"
                  v-model="editArticle.image"
                  type="text"
                  class="form-control mb-2"
                  placeholder="請輸入圖片連結"
                />
                <img class="img-fluid" :src="editArticle.image" />
              </div>
            </div>
            <div class="col-sm-8">
              <pre>
                {{}}
              </pre>
              <div class="row">
                <div class="col-6 mb-3">
                  <label for="title" class="form-label">文章標題</label>
                  <input
                    id="title"
                    v-model="editArticle.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入文章標題"
                  />
                </div>

                <div class="col-6 mb-3">
                  <label for="content" class="form-label">文章概要</label>
                  <input
                    id="content"
                    value="蔬食"
                    v-model="editArticle.content"
                    type="text"
                    class="form-control"
                    placeholder="請輸入文章概要"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="create_at" class="form-label">建立時間</label>
                  <input id="create_at" v-model="create_at" type="date" class="form-control" />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="author" class="form-label">作者</label>
                  <input
                    id="author"
                    v-model="editArticle.author"
                    type="text"
                    class="form-control"
                    placeholder="請輸入作者"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3 col-md-12">
                <label for="description" class="form-label">文章內容</label>
                <textarea
                  id="description"
                  v-model="editArticle.description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入文章內容"
                  rows="10"
                ></textarea>
              </div>

              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="isPublic"
                    v-model="editArticle.isPublic"
                    class="form-check-input"
                    type="checkbox"
                  />
                  <label class="form-check-label" for="isPublic">是否公開</label>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="$emit('updateArticle', editArticle)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/utils/modalMixin.js';

// 送出影評的按鈕，記得要用emit觸發再渲染父元件一次，讓新影評也出現
export default {
  props: ['tempMovie'],
  data() {
    return {};
  },
  mixins: [modalMixin]
};
</script>

<style lang="scss" scoped>
.post-modal {
  border-radius: 20px;
  background: linear-gradient(115deg, #5b4f7c 0%, #391e36 100.56%);
  box-shadow:
    0px -2px 10px 0px rgba(233, 223, 255, 0.3),
    0px -2px 40px 0px rgba(187, 155, 255, 0.15),
    0px 0.5px 0px 0px rgba(255, 255, 255, 0.5) inset;
}
</style>
