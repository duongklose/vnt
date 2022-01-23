<template>
  <nav class="navbar navbar-expand-lg bg-grey">
    <a class="navbar-brand" href="#">
      <img
        src="../assets/bus-ticket-icon.png"
        alt="Vinatravel"
        width="40"
        height="40"
      />
    </a>
    <button @click="logout" type="button" class="btn btn-primary mg-auto">
      Đăng xuất
    </button>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style scoped>
nav {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 56px;
  box-shadow: 0 0.46875rem 2.1875rem rgb(7 13 10 / 3%),
    0 0.9375rem 1.40625rem rgb(7 13 10 / 3%),
    0 0.25rem 0.53125rem rgb(7 13 10 / 5%),
    0 0.125rem 0.1875rem rgb(7 13 10 / 3%);
}
nav a {
  padding: 0px;
}
.mg-auto {
  margin-left: auto;
}
.bg-grey {
  background-color: #fafbfc;
}
</style>