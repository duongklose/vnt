<template>
  <div class="trips">
    <div class="table-list">
      <h2>Danh sách chuyến đi sắp tới</h2>
        <button @click="mergeTrip()" class="btn btn-success" type="submit">Ghép</button>
        <table class="table table-hover mt-20">
          <thead>
            <tr>
              <th scope="col" class="center">STT</th>
              <th scope="col" class="center">Tuyến đường</th>
              <th scope="col" class="center">Thời gian</th>
              <th scope="col" class="center">Biển số xe</th>
              <th scope="col" class="center">Giá vé</th>
              <th scope="col" class="center">Vé đã đặt</th>
              <th scope="col" class="center">Chọn</th>
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
              <td class="center">
                {{ trip.start_time.slice(0,11) }} - {{ trip.end_time.slice(0,11) }}
              </td>
              <td class="center">{{ trip.license_plate }}</td>
              <td class="center">{{ trip.price }}</td>
              <td class="center">{{ trip.booked_ticket }}/{{ trip.max }}</td>
              <td class="center">
                <input @change="chooseTrip(trip.id)" type="checkbox" name="idtrip"/>
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
  computed: mapGetters(["trips", "list_merge_trip"]),
  created() {
    this.getTrips(JSON.parse(localStorage.getItem('user')).id_transportation)
    this.CLEAR_LIST_MERGE_TRIP()
  },
  methods: {
    ...mapMutations(["CLEAR_LIST_MERGE_TRIP", "ADD_MERGE_TRIP", "REMOVE_MERGE_TRIP"]),
    ...mapActions(["getTrips", "mergeTrip"]),
    chooseTrip(idTrip){
        var ch = 0;
        for(var i =0; i<this.list_merge_trip.length; i++){

            if(this.list_merge_trip[i] == idTrip)   ch=1
        }
        if(ch==0){
            this.ADD_MERGE_TRIP(idTrip)
        }else{
            this.REMOVE_MERGE_TRIP(idTrip)
        }
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
</style>