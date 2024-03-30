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
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">電影海報</label>
                <input type="text" id="image" class="form-control" placeholder="請輸入圖片連結" />
                <img src="" alt="" class="img-fluid" />
              </div>
              <h3 class="mb-3">新增劇照</h3>
              <div class="mb-3">
                <label :for="image + key" class="form-label">圖片網址</label>
                <input
                  type="text"
                  :id="image + key"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                />
                <img src="" alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-sm-8"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-blue">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/utils/modalMixin.js';
export default {
  props: ['isNew'],
  mixins: [modalMixin],
  data() {
    return {};
  }
};
</script>
