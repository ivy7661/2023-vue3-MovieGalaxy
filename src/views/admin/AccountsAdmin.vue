<template>
  <div class="row justify-content-center">
    <div class="col-md-11">
      <h2 class="mb-4">帳戶管理</h2>
      <table class="table mx-2">
        <thead class="table-light">
          <tr>
            <th width="120">身分</th>
            <th width="120">名稱</th>
            <th width="120">電子信箱</th>
            <th width="120" class="text-center">刪除帳戶</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.role }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.email }}</td>
            <td class="text-center">
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal(user)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Del-Account-Modal
    ref="DelAccountModal"
    :temp-user="tempUser"
    @del-account="delAccount"
  ></Del-Account-Modal>
</template>

<script>
import axios from 'axios';
import DelAccountModal from '@/components/admin/DelAccountModal.vue';
export default {
  data() {
    return {
      users: [],
      tempUser: {}
    };
  },
  components: {
    DelAccountModal
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      const url = `${import.meta.env.VITE_API_URL}/users`;
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal(user) {
      this.tempUser = { ...user };
      this.$refs.DelAccountModal.openModal();
    },
    delAccount() {
      const url = `${import.meta.env.VITE_API_URL}/users/${this.tempUser.id}`;
      axios
        .delete(url)
        .then((res) => {
          console.log(res);
          this.$refs.DelAccountModal.closeModal();
          this.getUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
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
