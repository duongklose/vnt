<template>
  <Navbar />
  <div class="side-bar bg-white">
    <div class="sidebar-menu">
      <router-link to="/admin/dashboard">
        <div class="sidebar-item">
          <i class="bi bi-bar-chart"></i>
          <p>Dashboard</p>
        </div>
      </router-link>
      <router-link to="/admin/manage_users">
        <div class="sidebar-item">
          <i class="bi bi-person-rolodex"></i>
          <p>Quản lý người dùng</p>
        </div>
      </router-link>
      <router-link to="/admin/manage_transportations">
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
  text-align: left;
  margin-top: 0px;
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
  padding-left: 20px;
  font-size: 30px;
}

.sidebar-item:hover{
  background-color: #eafff4;
}

.sidebar-menu {
  width: auto !important;
  padding-right: 1rem;
  margin-top: 40px;
}
.content {
  padding-left: 300px;
}

.bg-white {
  background-color: #fff;
}
</style>