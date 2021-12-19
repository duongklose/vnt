<template>
  <Navbar />
  <div class="side-bar bg-white">
    <div class="sidebar-menu">
      <div class="sidebar-item">
        <router-link to="/dashboard">Dashboard</router-link>
      </div>
      <div class="sidebar-item">
        <router-link to="/transportations">Transportation</router-link>
      </div>
    </div>
  </div>
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style scoped>
.side-bar{
  position: fixed;
  width: 280px;
  height: 100vh;
  background-color: darkslategrey;
  text-align: left;
}
.sidebar-item {
  height: 50px;
  position: relative;
  display: block;
  padding: 0.1rem 0;
}

.sidebar-menu {
  width: auto !important;
  padding: 0 1.5rem 1.5rem;
  margin-top: 20px;
}
.content{
  padding-left: 300px;
}

.bg-white{
  background-color: #fff;
}
</style>