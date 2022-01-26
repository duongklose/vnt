<template>
  <div class="dashboard">
    <div class="statistic">
      <h3 style="text-align: left">Số liệu thống kê</h3>
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
                <h5 class="card-title">Người dùng</h5>
                <p class="number">{{numOfUser}}</p>
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
                <h5 class="card-title">Công ty vận tải</h5>
                <p class="number">{{numOfTransportation}}</p>
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
                <h5 class="card-title">Vé đặt trong tháng</h5>
                <p class="number">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters(['numOfUser', 'numOfTransportation']),
  methods:{
    ...mapActions(['getNumOfUser', 'getNumOfTransportation'])
  },
  created(){
    this.getNumOfUser(),
    this.getNumOfTransportation()
  }
};
</script>

<style scoped>
.dashboard{
  margin-top: 65px;
}
.statistic{
  background-color: #fff;
  width: 99%;
  padding: 10px;
  margin-top: 58px;
}
.statistic-card {
  display: flex;
}
.card-dashboard {
  width: 330px;
}
.ml-10{
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