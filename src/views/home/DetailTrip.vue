<template>
  <div class="trip">
    <h3>Thông tin chuyến đi</h3>
    <div class="form-group field">
      <label for="start_province">Nơi đi</label>
      <div class="form-control">
          {{trip.start_province}}
      </div>
    </div>
    <div class="form-group field">
      <label for="end_province">Nơi đến</label>
      <div class="form-control">
          {{trip.end_province}}
      </div>
    </div>
    <div class="form-group field">
      <label for="start_location">Điểm đón chính</label>
      <div class="form-control">
          {{trip.start_station}} - {{trip.start_address}}
      </div>
    </div>
    <div class="form-group field">
      <label for="end_location">Điểm trả chính</label>
      <div class="form-control">
          {{trip.end_station}} - {{trip.end_address}}
      </div>
    </div>
    <div class="form-group field">
      <label for="start_time">Ngày giờ xuất phát</label>
      <div class="form-control">
          {{trip.start_time}}
      </div>
    </div>
    <div class="form-group field">
      <label for="end_time">Ngày giờ đến dự kiến</label>
      <div class="form-control">
          {{trip.end_time}}
      </div>
    </div>
    <div class="form-group field">
      <label for="vehicle">Xe</label>
      <div class="form-control">
          {{trip.license_plate}} - {{trip.vehicle_type}}
      </div>
    </div>
    <div class="form-group field">
      <label for="price">Giá vé (VNĐ)</label>
      <div class="form-control">
          {{trip.price}}
      </div>
    </div>
    <div class="form-group field">
      <label for="num">Số khách đã đặt vé</label>
      <div class="form-control">
          {{trip.num}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {  },
  computed: mapGetters(["trip"]),

};
</script>

<style scoped>
.trip {
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