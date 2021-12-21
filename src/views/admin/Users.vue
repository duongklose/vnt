<template>
  <div class="list-user">
    <div class="table-list">
      <h2>Danh sách người dùng trong hệ thống</h2>
      <table class="table table-hover mt-20">
        <thead>
          <tr>
            <th scope="col">Họ tên</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Số vé đã đặt</th>
            <th scope="col">Số vé đã hủy</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.phone">
            <td class="center-vertical">{{ user.name }}</td>
            <td class="center">{{ user.phone }}</td>
            <td class="center">2</td>
            <td class="center">0</td>
            <td class="center">
              <button v-if="user.blocked" class="btn btn-warning width-90" @click="user.blocked = !user.blocked; unblockUser(user.phone)">Bỏ chặn</button>
              <button v-else class="btn btn-danger width-90" @click="user.blocked = !user.blocked; blockUser(user.phone)">Chặn</button>
              <button
                @click="deleteUser(user.phone)"
                class="btn btn-danger mleft-5"
              >
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["users"]),
  methods: {
    ...mapActions(["getUsers", "deleteUser", "blockUser", "unblockUser"]),
  },
  created() {
    this.getUsers();
  },
};
</script>

<style scoped>
.list-user {
  background-color: #fff;
  border-radius: 5px;
  margin: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
}
h2 {
  text-align: center;
}
th {
  text-align: center;
}
.center {
  vertical-align: middle;
  text-align: center;
}
.center-vertical {
  vertical-align: middle;
}

.table-list {
  width: 90%;
  margin: auto;
  margin-top: 50px;
}

.mt-20 {
  margin-top: 20px;
}
.mleft-5 {
  margin-left: 5px;
}
.width-90{
    width: 90px;
}
</style>