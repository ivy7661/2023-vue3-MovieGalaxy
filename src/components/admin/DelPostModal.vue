<template>
  <div class="modal fade" ref="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-light">
          <h5 class="modal-title">刪除影評</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p>
            確認要刪除標題為
            <strong class="text-danger">{{ tempPost.title }}</strong>
            之影評嗎？ (刪除後將無法恢復)
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('delPost')">確認刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/utils/modalMixin.js';

export default {
  props: ['tempPost'],
  mixins: [modalMixin]
};
</script>
