<template>
  <div class="newtrip">
    <form @submit="onSubmit">
      <h3>Thêm chuyến đi mới</h3>
      <!-- <div v-if="failed != ''" class="alert alert-danger" role="alert">
      {{failed}}
    </div> -->
      <div class="form-group field">
        <label for="start_province">Nơi đi</label>
        <select class="form-control" v-model="start_province" required>
          <option
            v-for="province in provinces"
            :key="province.id"
            :value="province.id"
          >
            {{ province.name }}
          </option>
        </select>
      </div>
      <div class="form-group field">
        <label for="end_province">Nơi đến</label>
        <select class="form-control" v-model="end_province" required>
          <option
            v-for="province in provinces"
            :key="province.id"
            :value="province.id"
          >
            {{ province.name }}
          </option>
        </select>
      </div>
      <div class="form-group field">
        <label for="start_location">Điểm đón chính</label>
        <select class="form-control" v-model="start_station" required>
          <option v-for="station in start_stations" :key="station.id" :value="station.id">
            {{ station.name }}
          </option>
        </select>
      </div>
      <div class="form-group field">
        <label for="end_location">Điểm trả chính</label>
        <select class="form-control" v-model="end_station" required>
          <option v-for="station in end_stations" :key="station.id" :value="station.id">
            {{ station.name }}
          </option>
        </select>
      </div>
      <div class="form-group field">
        <label for="start_time">Ngày giờ xuất phát</label>
        <div style="margin-left: -67px">
          <Datepicker v-model="start_time" :format="format" />
        </div>
      </div>
      <div class="form-group field">
        <label for="end_time">Ngày giờ đến dự kiến</label>
        <div style="margin-left: -67px">
          <Datepicker v-model="end_time" :format="format" />
        </div>
      </div>
      <div class="form-group field">
        <label for="vehicle">Xe</label>
        <select class="form-control" v-model="vehicle" required>
          <option
            v-for="vehicle in vehicles"
            :key="vehicle.id"
            :value="vehicle.id"
          >
            {{ vehicle.license_plate + " - " + vehicle.type }}
          </option>
        </select>
      </div>
      <div class="form-group field">
        <label for="price">Giá vé (VNĐ)</label>
        <input
          type="text"
          class="form-control"
          id="price"
          placeholder="200000"
          v-model="price"
          required
        />
      </div>
      <div class="form-group field">
        <div class="group-button">
          <button type="submit" class="btn btn-primary mr-30">Thêm</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { ref } from 'vue';
import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css'
import moment from 'moment';

export default {
  components: { Datepicker },
  setup() {
        const date = ref(new Date());
        const format = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hour = date.getHours();
            const minute = date.getMinutes();
            var d = day;
            var m = month;
            var h = hour;
            var min = minute;
            if(day<10){
              d = "0" + day;
            }
            if(month<10){
              m = "0" + month;
            }
            if(hour<10){
              h = "0" + hour;
            }
            if(minute<10){
              min = "0" + minute;
            }
            
            return `${d}/${m}/${year} ${h}:${min}`;
        }
        
        return {
            date,
            format,
        }
    },
  data() {
    return {
      start_province: "",
      end_province: "",
      start_station: "",
      end_station: "",
      start_time: "",
      end_time: "",
      vehicle: "",
      price: "",
    };
  },
  created() {
    this.getAllVehicle(JSON.parse(localStorage.getItem('user')).id_transportation);
    this.getAllProvince();
  },
  computed: mapGetters([
    "failed",
    "vehicles",
    "vehicle_type",
    "id_transportation",
    "provinces",
    "start_stations",
    "end_stations",
  ]),
  watch: {
    start_province() {
      this.getStartStations(this.start_province);
    },
    end_province() {
      this.getEndStations(this.end_province);
    },
  },
  methods: {
    ...mapMutations([""]),
    ...mapActions([
      "getAllVehicle",
      "getAllProvince",
      "getStartStations",
      "getEndStations",
      "addTrip",
    ]),
    onSubmit(event) {
      event.preventDefault();
      // console.log("new trip", {
      //     id_coach: this.vehicle,
      //     price: parseInt(this.price),
      //     start_time: moment.utc(this.start_time).local().format('YYYY-MM-DD HH:mm:ss'),
      //     end_time: moment.utc(this.end_time).local().format('YYYY-MM-DD HH:mm:ss'),
      //     id_start_station: this.start_station,
      //     id_end_station: this.end_station
      //   });
        this.addTrip({
          id_coach: this.vehicle,
          price: parseInt(this.price),
          start_time: moment.utc(this.start_time).local().format('YYYY-MM-DD HH:mm:ss'),
          end_time: moment.utc(this.end_time).local().format('YYYY-MM-DD HH:mm:ss'),
          id_start_station: this.start_station,
          id_end_station: this.end_station
        });
        this.vehicle = "";
    },
  },
};
</script>

<style scoped>
.newtrip {
  background-color: #fff;
  border-radius: 5px;
  margin: 20px;
  padding: 40px;
  text-align: left;
}
h3 {
  margin-bottom: 20px;
}
.field {
  display: flex;
  margin-top: 10px;
}
.field label {
  width: 30%;
  vertical-align: middle;
  margin: 0px;
  font-weight: bold;
}
.group-button {
  margin: auto;
}
.field button {
  width: 85px;
  height: 40px;
}
.mr-30 {
  margin-right: 30px;
}
</style>