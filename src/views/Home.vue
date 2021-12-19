<template>
  <Nav />
  <div class="side-bar">
    <!-- <router-link to="/transportations">Transportation</router-link> |
    <router-link to="dashboard">Dashboard</router-link> -->
  </div>
  <div>HOME</div>
  <!-- <router-view/> -->
</template>

<script>
import Nav from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Nav
  },
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
</style>