<template>
  <div class="modal fade" ref="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">刪除帳戶</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            是否刪除
            <strong class="text-danger">{{ tempUser.userName }} </strong>
            帳戶？ (刪除後無法恢復)
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('delAccount')">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/utils/modalMixin.js';
export default {
  props: ['tempUser'],
  data() {
    return {};
  },
  mixins: [modalMixins]
};
</script>
