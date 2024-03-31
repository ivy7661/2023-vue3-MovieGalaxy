<template>
  <div class="row justify-content-center">
    <div class="col-md-11">
      <h2 class="mb-4">影評管理</h2>
      <table class="table">
        <thead>
          <tr>
            <th>發文者</th>
            <th>標題</th>
            <th>內文</th>
            <th>查看</th>
            <th>刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.userName }}</td>
            <td>{{ post.title }}</td>
            <td>
              <p class="post-content" v-html="post.content"></p>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-sm btn-outline-blue"
                @click="openModal('view', post)"
              >
                查看
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-sm btn-outline-danger"
                @click="openModal('delete', post)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Post-Modal ref="PostModal" :temp-post="tempPost"></Post-Modal>
  <Del-Post-Modal ref="DelPostModal" :temp-post="tempPost" @del-post="delPost"></Del-Post-Modal>
</template>

<script>
import axios from 'axios';
import PostModal from '@/components/admin/PostModal.vue';
import DelPostModal from '@/components/admin/DelPostModal.vue';
import Alert from '@/utils/swal.js';
export default {
  data() {
    return {
      posts: [],
      tempPost: {}
    };
  },
  components: {
    PostModal,
    DelPostModal
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      const url = `${import.meta.env.VITE_API_URL}/posts`;
      axios
        .get(url)
        .then((res) => {
          this.posts = res.data;
        })
        .catch(() => {
          Alert.toastTop('error', '取得資料失敗');
        });
    },
    openModal(status, post) {
      if (status === 'view') {
        this.tempPost = { ...post };
        this.$refs.PostModal.openModal();
      } else if (status === 'delete') {
        this.tempPost = { ...post };
        this.$refs.DelPostModal.openModal();
      }
    },
    delPost() {
      const url = `${import.meta.env.VITE_API_URL}/posts/${this.tempPost.id}`;
      axios
        .delete(url)
        .then((res) => {
          this.$refs.DelPostModal.closeModal();
          this.getPosts();
          Alert.toastTop('success', '刪除成功');
        })
        .catch(() => {
          Alert.toastTop('error', '刪除失敗');
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.post-content {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
h2 {
  @include Inter;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
}
th,
td {
  padding: 8px 30px;
}
tr:first-child th:first-child {
  border-top-left-radius: 5px;
}
tr:last-child td:first-child {
  border-bottom-left-radius: 5px;
}
tr:first-child th:last-child {
  border-top-right-radius: 5px;
}
tr:last-child td:last-child {
  border-bottom-right-radius: 5px;
}
</style>
