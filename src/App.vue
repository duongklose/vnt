<template>
  <!-- <div>INDEX</div> -->
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <router-view /> -->
  <div v-if="isAuthenticated">
    <div v-if="isAdmin">
      <admin />
    </div>
    <div v-else>
      <home />
    </div>
  </div>
  <div v-else>
    <login />
  </div>
</template>

<script>
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import { mapGetters } from "vuex";
import Admin from "./views/Admin.vue";

export default {
  components: { Login, Home, Admin },
  computed: mapGetters(["isAuthenticated", "isAdmin"]),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
