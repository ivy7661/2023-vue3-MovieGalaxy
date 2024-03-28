<template>
  <div id="addPostModal" ref="modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-xl post-modal">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="addPostModalLabel" class="text-white modal-title">電影名稱：{{}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <h2>{{ tempPost.title }}</h2>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-secondary">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/utils/modalMixin.js';
export default {
  props: ['tempPost'],
  data() {},
  mixins: [modalMixin]
};
</script>
