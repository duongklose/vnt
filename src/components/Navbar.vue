<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="../assets/bus-ticket-icon.png" alt="Vinatravel" width="40" height="40">
    </a>
    <button @click="logout" type="button" class="btn btn-primary mg-auto">Đăng xuất</button>
  </nav>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods:{
    ...mapActions(['logout'])
  }
};
</script>

<style>
nav {
  display: flex;
}
.mg-auto{
  margin-left: auto;
}
</style>