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
      <router-link to="/transportations">
        <div class="sidebar-item">
          <i class="bi bi-truck"></i>
          <p>Công ty vận tải</p>
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
export default {
  components: { Navbar },
};
</script>

<style scoped>
.side-bar {
  position: fixed;
  width: 280px;
  height: 100vh;
  background-color: darkslategrey;
  text-align: left;
}
.sidebar-item {
  height: 50px;
  position: relative;
  display: flex;
  padding: 0.1rem 0;
  margin-left: 30px;
}
.sidebar-item p {
  font-size: 20px;
  margin-bottom: 0;
  margin-left: 20px;
  line-height: 45px;
}

.sidebar-item i {
  font-size: 30px;
}

.sidebar-menu {
  width: auto !important;
  padding: 0 1.5rem 1.5rem;
  margin-top: 20px;
}
.content {
  padding-left: 300px;
}

.bg-white {
  background-color: #fff;
}
</style>