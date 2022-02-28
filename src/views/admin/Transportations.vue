<template>
  <div class="transportation">
    <div class="table-list">
      <h2 v-if="!isAddNew">Quản lý các công ty vận tải</h2>
      <div v-if="isAddNew">
        <FormTransportation />
      </div>
      <button v-else class="btn btn-primary" @click="TOGGLE_ISADDNEW">Thêm mới</button>
      <h2 v-if="isAddNew">Danh sách các công ty vận tải</h2>
      <table class="table table-hover mt-20">
        <thead>
          <tr>
            <th class="center-vertical" scope="col">Tên nhà xe</th>
            <th class="center-vertical" scope="col">Số điện thoại</th>
            <th class="center-vertical" scope="col">Điểm đánh giá</th>
            <th class="center-vertical" scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="transportation in transportations"
            :key="transportation.phone"
          >
            <td class="">{{ transportation.name }}</td>
            <td class="center-vertical">{{ transportation.phone }}</td>
            <td class="center-vertical">{{ transportation.rate_point }}</td>
            <td class="center-vertical">
              <button
                @click="gotoNewAccountTransportation"
                class="btn btn-success"
              >
                Thêm tài khoản
              </button>
              <button
                @click="deleteTransportation(transportation.phone)"
                class="btn btn-danger action-button"
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
import { mapActions, mapGetters, mapMutations } from "vuex";
import FormTransportation from '../../components/FormTransportation.vue'

export default {
  name: 'Transportations',
  components:{
    FormTransportation
  },
  computed: mapGetters(["transportations", "isAddNew"]),
  created() {
    this.getTransportations();
  },
  methods: {
    ...mapActions(["getTransportations", "deleteTransportation"]),
    ...mapMutations(["TOGGLE_ISADDNEW"]),
    gotoNewAccountTransportation() {
      this.$router.push("NewAccountTransportation");
    },
  },
};
</script>

<style scoped>
.transportation {
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

.center-vertical {
  vertical-align: middle;
  text-align: center;
}

.table-list {
  width: 90%;
  margin: auto;
  margin-top: 50px;
}

.mt-20 {
  margin-top: 20px;
}

.action-button{
  margin-left: 5px;
}
</style>