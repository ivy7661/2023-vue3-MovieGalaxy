<template>
  <div id="addPostModal" ref="modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-lg post-modal">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="addPostModalLabel" class="text-white modal-title">
            電影名稱：{{ tempMovie.name }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <pre>{{}}</pre>
          <div class="mb-4 col-md-6">
            <label for="userName" class="form-label">發文者</label>
            <input
              id="userName"
              v-model="userName"
              type="text"
              class="form-control"
              placeholder="請輸入發文者名稱"
              required
            />
          </div>
          <div class="mb-4 col-md-6">
            <label for="title" class="form-label">標題</label>
            <input
              id="title"
              v-model="title"
              type="text"
              class="form-control"
              placeholder="請輸入標題"
            />
          </div>

          <div class="mb-4">
            <label for="content" class="form-label">影評內文</label>
            <ckeditor :editor="editor" :config="editorConfig" v-model="content"></ckeditor>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                id="is_spoiled"
                v-model="is_spoiled"
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label" for="is_spoiled">內容涉及劇透</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-blue" @click="addPost()">發布影評</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import modalMixin from '@/utils/modalMixin.js';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import Alert from '@/utils/swal.js';

export default {
  props: ['tempMovie'],
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', '|', 'bold', 'italic', 'link']
      },
      editMovieId: '',
      userName: '',
      title: '',
      content: '',
      is_spoiled: false,
      userId: ''
    };
  },
  mounted() {},
  watch: {
    tempArticle() {
      this.editMovieId = this.tempMovie.id;
    }
  },
  mixins: [modalMixin],
  methods: {
    addPost() {
      this.userId = document.cookie.replace(/(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/, '$1');
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)userToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      );
      const id = parseInt(this.userId);

      const url = `${import.meta.env.VITE_API_URL}/600/posts`;
      const postData = {
        userName: this.userName,
        title: this.title,
        content: this.content,
        is_spoiled: false,
        movieId: this.tempMovie.id,
        userId: id
      };

      axios
        .post(url, postData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          Alert.toastTop('success', '發布成功');
          this.userName = '';
          this.title = '';
          this.content = '';
          this.closeModal();
          this.$emit('get-posts');
        })
        .catch(() => {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: '登入時效逾期，請重新登入'
          });
          this.closeModal();
          this.$router.push('/login');
        });
    }
  }
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
