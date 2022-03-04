<template>
  <div class="trip">
    <h3>Thông tin chuyến đi</h3>
    <div class="form-group field">
      <label for="start_province">Nơi đi</label>
      <div class="form-control">
        {{ trip.start_province }}
      </div>
    </div>
    <div class="form-group field">
      <label for="end_province">Nơi đến</label>
      <div class="form-control">
        {{ trip.end_province }}
      </div>
    </div>
    <div class="form-group field">
      <label for="start_location">Điểm đón chính</label>
      <div class="form-control">
        {{ trip.start_station }} - {{ trip.start_address }}
      </div>
    </div>
    <div class="form-group field">
      <label for="end_location">Điểm trả chính</label>
      <div class="form-control">
        {{ trip.end_station }} - {{ trip.end_address }}
      </div>
    </div>
    <div class="form-group field">
      <label for="start_time">Ngày giờ xuất phát</label>
      <div class="form-control">
        {{ trip.start_time }}
      </div>
    </div>
    <div class="form-group field">
      <label for="end_time">Ngày giờ đến dự kiến</label>
      <div class="form-control">
        {{ trip.end_time }}
      </div>
    </div>
    <div class="form-group field">
      <label for="vehicle">Xe</label>
      <div class="form-control">
        {{ trip.license_plate }} - {{ trip.vehicle_type }}
      </div>
    </div>
    <div class="form-group field">
      <label for="price">Giá vé (VNĐ)</label>
      <div class="form-control">
        {{ trip.price }}
      </div>
    </div>
    <div class="form-group field">
      <label for="num">Số khách đã đặt vé</label>
      <div class="form-control">
        {{ trip.num }}
      </div>
    </div>
    <br /><br /><br />
    <h3>Danh sách khách đặt vé</h3>
    <table class="table table-hover mt-20">
      <thead>
        <tr>
          <th scope="col" class="center">STT</th>
          <th scope="col" class="center">Số điện thoại</th>
          <th scope="col" class="center">Điểm lên</th>
          <th scope="col" class="center">Điểm xuống</th>
          <th scope="col" class="center">Ghế</th>
          <th scope="col" class="center">Ghi chú</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ticket, index) in tickets" :key="index">
          <td class="center">{{ index + 1 }}</td>
          <td class="center">
            {{ ticket.phone }}
          </td>
          <td class="center">
            {{ ticket.departure_location }}
          </td>
          <td class="center">{{ ticket.arrival_location }}</td>
          <td class="center">{{ ticket.alias }}</td>
          <td class="center"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: { },
  computed: mapGetters(["trip", "tickets"]),
  methods: {
    ...mapActions([]),
  },
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
.center {
  vertical-align: middle;
  text-align: center;
}
</style>