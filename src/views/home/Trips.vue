<template>
  <div class="trips">
    <div class="table-list">
      <h2>Danh sách chuyến đi sắp tới</h2>
      <button class="btn btn-primary" @click="gotoNewTrip">Thêm mới</button>
      <button class="btn btn-success mleft-20" @click="mergeTrip">Ghép chuyến đi</button>
      <table class="table table-hover mt-20">
        <thead>
          <tr>
            <th scope="col" class="center">STT</th>
            <th scope="col" class="center">Tuyến đường</th>
            <th scope="col" class="center">Thời gian</th>
            <th scope="col" class="center">Biển số xe</th>
            <th scope="col" class="center">Giá vé</th>
            <th scope="col" class="center">Vé đã đặt</th>
            <th scope="col" class="center">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(trip, index) in trips" :key="index"
            :class="{
              'bg-green' : checkReadyTrip(trip.start_time, trip.booked_ticket, trip.max),
              'bg-red': checkWarningTrip(trip.start_time, trip.booked_ticket, trip.max)
            }"
          >
            <td class="center">{{ index + 1 }}</td>
            <td class="center">
              {{ trip.start_province }} - {{ trip.end_province }}
            </td>
            <td class="center">{{ trip.start_time.slice(0,11) }} - {{ trip.end_time.slice(0,11) }}</td>
            <td class="center">{{ trip.license_plate }}</td>
            <td class="center">{{ trip.price }}</td>
            <td class="center">{{ trip.booked_ticket }}/{{ trip.max }}</td>
            <td class="center">
              <button v-if="trip.state == 0" class="btn btn-success action-button w-85" @click="startTrip(trip.id)">Bắt đầu</button>
              <button v-if="trip.state == 1" class="btn btn-warning action-button w-85" @click="endTrip(trip.id)">Kết thúc</button>
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
            <!-- <th scope="col" class="center">Thao tác</th> -->
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
            <!-- <td class="center">
              <button class="btn btn-primary action-button">Xem</button>
            </td> -->
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
    ...mapActions(["getTrips", "getDoneTrips", "stopTrip", "DetailTrip", "getTripByID", "startTrip", "endTrip"]),
    gotoNewTrip() {
      this.$router.push("NewTrip");
    },
    gotoDetailTrip(idTrip){
      console.log("idTrip", idTrip)
        this.getTripByID(idTrip);
        this.$router.push("DetailTrip");
    },
    mergeTrip() {
      this.$router.push("MergeTrip");
    },
    checkReadyTrip(start_time, booked_ticket, max_ticket){
      var y = parseInt(start_time.slice(12))
      var m = parseInt(start_time.slice(9,11)) - 1
      var d = parseInt(start_time.slice(6,8))
      var h = parseInt(start_time.slice(0,2))
      var min = parseInt(start_time.slice(3,5))
      var s = 0
      var s_time = new Date(y, m, d, h, min, s)
      var now = Date.now()
      if(booked_ticket >= max_ticket/2 && ((s_time.getTime() - now) < 24*60*60*1000)){
        return true
      }else{
        return false
      }
    },
    checkWarningTrip(start_time, booked_ticket, max_ticket){
      var y = parseInt(start_time.slice(12))
      var m = parseInt(start_time.slice(9,11)) - 1
      var d = parseInt(start_time.slice(6,8))
      var h = parseInt(start_time.slice(0,2))
      var min = parseInt(start_time.slice(3,5))
      var s = 0
      var s_time = new Date(y, m, d, h, min, s)
      var now = Date.now()
      if(booked_ticket < max_ticket/2 && ((s_time.getTime() - now) < 24*60*60*1000)){
        return true
      }else{
        return false
      }
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
.mleft-20{
  margin-left: 20px;
}
.action-button {
  width: 65px;
  margin-left: 5px;
}
.bg-red{
  background-color: #ffebcd;
}
.bg-green{
  background-color: #90ee90;
}
.w-85{
  width: 85px;
}
</style>