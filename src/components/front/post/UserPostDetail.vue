<template>
  <div id="addPostModal" ref="modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-lg post-modal">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="addPostModalLabel" class="text-white modal-title">我的影評</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body px-6 py-4 text-dark">
          <h2>{{ tempPost.title }}</h2>
          <p>{{ tempPost.content }}</p>
        </div>
        <div class="modal-footer px-3">
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
  data() {},
  mixins: [modalMixin]
};
</script>
