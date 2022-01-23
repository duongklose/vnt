<template>
  <div class="vehicles">
    <div class="table-list">
      <h2 v-if="!isAddNew">Quản lý xe</h2>
      <div v-if="isAddNew">
        <FormVehicle />
      </div>
      <button v-else class="btn btn-primary" @click="TOGGLE_ISADDNEW">
        Thêm mới
      </button>
      <h2 v-if="isAddNew">Danh sách xe của công ty</h2>
      <table class="table table-hover mt-20">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Biển số</th>
            <th scope="col">Loại xe</th>
            <th scope="col">SĐT xe</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vehicle, index) in vehicles" :key="index">
            <td class="center-vertical">{{ index+1 }}</td>
            <td class="center-vertical">{{vehicle.license_plate}}</td>
            <td class="center-vertical">{{vehicle.type}}</td>
            <td class="center-vertical">{{vehicle.phone}}</td>
            <td class="center-vertical">
              <button @click="deleteVehicles(vehicle.phone)" class="btn btn-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import FormVehicle from "../../components/FormVehicle.vue";
export default {
  components: {
    FormVehicle,
  },
  computed: mapGetters(["isAddNew", "vehicles", "id_transportation"]),
  created(){
    this.getTransportationVehicles(JSON.parse(localStorage.getItem('user')).id_transportation);
    this.getAllVehicleType();
  },
  methods: {
    ...mapMutations(["TOGGLE_ISADDNEW"]),
    ...mapActions(["getAllVehicleType", "getTransportationVehicles", "deleteVehicles"])
  },
};
</script>

<style scoped>
.vehicles {
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
}

.table-list {
  width: 90%;
  margin: auto;
  margin-top: 50px;
}

.mt-20 {
  margin-top: 20px;
}
</style>