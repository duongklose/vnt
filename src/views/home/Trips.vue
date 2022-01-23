<template>
  <div class="trips">
    <div class="table-list">
      <h2>Danh sách chuyến đi sắp tới</h2>
      <button class="btn btn-primary" @click="gotoNewTrip">Thêm mới</button>
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
              <button class="btn btn-primary action-button" @click="gotoDetailTrip(trip.id)">Xem</button>
              <button class="btn btn-danger action-button" @click="stopTrip(trip.id)">Hoãn</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="trips">
    <h2>Lịch sử các chuyến đã đi</h2>
    <div>
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
          <tr v-for="(trip, index) in done_trips" :key="index">
            <td class="center">{{ index + 1 }}</td>
            <td class="center">
              {{ trip.start_province }} - {{ trip.end_province }}
            </td>
            <td class="center">{{ trip.start_time }} - {{ trip.end_time }}</td>
            <td class="center">{{ trip.license_plate }}</td>
            <td class="center">{{ trip.price }}</td>
            <td class="center">
              <button class="btn btn-primary action-button">Xem</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {},
  computed: mapGetters(["trips", "done_trips"]),
  created() {
    this.getTrips(JSON.parse(localStorage.getItem('user')).id_transportation);
    this.getDoneTrips(JSON.parse(localStorage.getItem('user')).id_transportation)
  },
  methods: {
    ...mapMutations([""]),
    ...mapActions(["getTrips", "getDoneTrips", "stopTrip", "DetailTrip", "getTripByID"]),
    gotoNewTrip() {
      this.$router.push("NewTrip");
    },
    gotoDetailTrip(idTrip){
      console.log("idTrip", idTrip)
        this.getTripByID(idTrip);
        this.$router.push("DetailTrip");
    },
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