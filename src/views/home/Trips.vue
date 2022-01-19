<template>
  <div class="trips">
    <div class="table-list">
      <h2 v-if="!isAddNew">Quản lý chuyến đi</h2>
      <div v-if="isAddNew">
        <FormTrip />
      </div>
      <button v-else class="btn btn-primary" @click="gotoNewTrip">
        Thêm mới
      </button>
      <h2 v-if="isAddNew">Danh sách chuyến đi sắp tới</h2>
      <table class="table table-hover mt-20">
        <thead>
          <tr>
            <th scope="col" class="center">STT</th>
            <th scope="col" class="center">Tuyến đường</th>
            <th scope="col" class="center">Thời gian</th>
            <th scope="col" class="center">Biển số xe</th>
            <th scope="col" class="center">Giá vé</th>
            <th scope="col" class="center">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(trip, index) in trips" :key="index">
            <td class="center">{{ index + 1 }}</td>
            <td class="center">
              {{ trip.start_province }} - {{ trip.end_province }}
            </td>
            <td class="center">{{ trip.start_time }} - {{ trip.end_time }}</td>
            <td class="center">{{ trip.license_plate }}</td>
            <td class="center">{{ trip.price }}</td>
            <td class="center">
              <button class="btn btn-primary action-button">Xem</button>
              <button class="btn btn-danger action-button">Hoãn</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="trips">
    <h2>Thông tin chuyến đi</h2>
    <div>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import FormTrip from "../../components/FormTrip.vue";

export default {
  components: {
    FormTrip,
  },
  computed: mapGetters(["isAddNew", "id_transportation", "trips"]),
  created() {
    this.getTransportationTrips(this.id_transportation);
  },
  methods: {
    ...mapMutations(["TOGGLE_ISADDNEW"]),
    ...mapActions(["getTransportationTrips"]),
    gotoNewTrip(){
      this.$router.push("NewTrip")
    }
  },
};
</script>

<style scoped>
.trips {
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

.center {
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
.action-button {
  width: 65px;
  margin-left: 5px;
}
</style>