<template>
  <div class="modal fade" ref="modal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-dark text-light">
          <h5 class="modal-title">會員影評</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">標題</label>
            <input type="text" id="title" class="form-control" v-model="viewPost.title" readonly />
          </div>

          <div class="mb-3">
            <label for="userName" class="form-label">發文者</label>
            <input
              type="text"
              id="userName"
              class="form-control"
              v-model="viewPost.userName"
              readonly
            />
          </div>

          <div class="mb-3">
            <label for="content" class="form-label">內文</label>
            <p id="content" class="form-control" v-html="viewPost.content"></p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/utils/modalMixin.js';
export default {
  props: ['tempPost'],
  mixins: [modalMixin],
  data() {
    return {
      viewPost: {}
    };
  },
  watch: {
    tempPost() {
      this.viewPost = this.tempPost;
    }
  }
};
</script>
