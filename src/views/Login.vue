<template>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4 bg-white mt-50">
        <h1 class="mt-50">Đăng nhập</h1>
        <br />
        <br />
        <form @submit.prevent="login({ username, password })">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Tên đăng nhập"
              v-model="username"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Mật khẩu"
              v-model="password"
            />
          </div>
          <button type="submit" class="btn btn-primary mb-30">Đăng nhập</button>
        </form>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    // login() {
    //   console.log("Log in function...", this.username, this.password );
    //   this.$store.dispatch("login", {
    //     username: this.username,
    //     password: this.password
    //   })
    // }
  },
};
</script>

<style>
.mt-50 {
  margin-top: 50px;
}
.bg-white {
  background-color: #fff;
}
.mb-30 {
  margin-bottom: 30px;
}
</style>