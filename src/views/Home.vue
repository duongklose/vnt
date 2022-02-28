<template>
  <Navbar />
  <div class="side-bar bg-white">
    <div class="sidebar-menu">
      <router-link to="/dashboard">
        <div class="sidebar-item">
          <i class="bi bi-bar-chart"></i>
          <p>Dashboard</p>
        </div>
      </router-link>
      <router-link to="/vehicles">
        <div class="sidebar-item">
          <i class="bi bi-truck"></i>
          <p>Quản lý xe</p>
        </div>
      </router-link>
      <router-link to="/trips">
        <div class="sidebar-item">
          <i class="bi bi-ticket-perforated"></i>
          <p>Quản lý chuyến đi</p>
        </div>
      </router-link>
      <router-link to="/review">
        <div class="sidebar-item">
          <i class="bi bi-star"></i>
          <p>Khách hàng đánh giá</p>
        </div>
      </router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { mapActions } from "vuex";
export default {
  components: { Navbar },
  created(){
    this.getTransportation(JSON.parse(localStorage.getItem("user")).id_transportation)
  },
  methods: {
    ...mapActions(["getTransportation"]),
  },
};
</script>

<style scoped>
.side-bar {
  position: fixed;
  width: 250px;
  height: 100vh;
  text-align: left;
  margin-top: 56px;
}
.sidebar-item {
  height: 50px;
  position: relative;
  display: flex;
  padding: 0.1rem 0;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
}
.sidebar-item p {
  font-size: 18px;
  margin-bottom: 0;
  margin-left: 20px;
  line-height: 45px;
}

.sidebar-item i {
  padding-left: 10px;
  font-size: 25px;
  margin-top: 5px;
}

.sidebar-item:hover {
  background-color: #eafff4;
}

.sidebar-menu {
  width: auto !important;
  margin-top: 40px;
}
.content {
  padding-left: 250px;
  padding-top: 56px;
}

.bg-white {
  background-color: #fff;
}
</style>