<template>
  <div class="info">
    <div class="info-left">
      <img class="avatar" src="../../assets/logo.png" />
      <div class="info-text">
        <div class="name-transportation">Tên nhà xe</div>
        <div class="description">Mô tả của nhà xe</div>
      </div>
    </div>
    <div class="rate_point">
      <span>Điểm đánh giá: 5.0</span>
      <i class="bi bi-star-fill"></i>
    </div>
  </div>
  <div class="dashboard">
    <div class="statistic">
      <h3 style="text-align: left">Số liệu thống kê trong tháng</h3>
      <div class="statistic-card">
        <div class="card mb-3 card-dashboard">
          <div class="row no-gutters">
            <div class="col-md-5">
              <div class="icon-item bg-yellow">
                <i class="bi bi-people"></i>
              </div>
            </div>
            <div class="col-md-7">
              <div class="pt-18">
                <h5 class="card-title">Doanh thu</h5>
                <p class="number">0</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card-dashboard ml-10">
          <div class="row no-gutters">
            <div class="col-md-5">
              <div class="icon-item bg-red">
                <i class="bi bi-truck"></i>
              </div>
            </div>
            <div class="col-md-7">
              <div class="pt-18">
                <h5 class="card-title">Số chuyến đã đi</h5>
                <p class="number">0</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 card-dashboard ml-10">
          <div class="row no-gutters">
            <div class="col-md-5">
              <div class="icon-item bg-green">
                <i class="bi bi-ticket-perforated"></i>
              </div>
            </div>
            <div class="col-md-7">
              <div class="pt-18">
                <h5 class="card-title">Vé bán được</h5>
                <p class="number">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters([]),
  created() {
    this.getAllTypeVehicle();
  },
  methods: {
    ...mapActions(["getAllTypeVehicle"]),
  },
};
</script>

<style scoped>
.info {
  background: hsla(0, 0%, 100%, 0.45);
  display: flex;
  padding: 30px 30px 30px 45px;
}
.info-left {
  display: flex;
}
.avatar {
  width: 60px;
  height: 60px;
  margin-right: 30px;
}

.info-text {
  display: block;
  text-align: left;
}
.name-transportation {
  font-size: 1.25rem;
}
.description {
  margin-top: 3px;
  font-size: 0.88rem;
  opacity: 0.6;
}
.rate_point {
  margin: auto 0 auto auto;
  font-weight: 600;
}
.rate_point i {
  color: yellow;
  margin-left: 5px;
}
.dashboard {
  padding: 30px 30px 0;
}
.statistic {
  background-color: #fff;
  padding: 0.75rem 1.25rem;
}
.statistic-card {
  display: flex;
}
.card-dashboard {
  width: 330px;
}
.ml-10 {
  margin-left: 10px;
}
.icon-item {
  width: 90px;
  height: 90px;
  border-radius: 50px;
  margin: auto;
  margin-top: 25px;
  font-size: 4rem;
}
.bg-yellow {
  background-color: #ffce67;
}
.bg-red {
  background-color: #ff7851;
}
.bg-green {
  background-color: #56cc9d;
}
.number {
  font-size: 4rem;
  margin-bottom: 0;
}
.pt-18 {
  padding-top: 18px;
}
</style>