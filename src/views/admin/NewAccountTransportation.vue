<template>
  <div class="newaccount">
    <form @submit="onSubmit">
      <h3>Thêm tài khoản mới</h3>
      <div class="form-group field">
        <label for="username">Username</label>
        <input
          type="text"
          class="form-control"
          id="price"
          v-model="username"
          required
        />
      </div>
      <div class="form-group field">
        <label for="price">Mật khẩu</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          required
        />
      </div>
      <div class="form-group field">
        <label for="price">Nhập lại mật khẩu</label>
        <input
          type="password"
          class="form-control"
          v-model="repassword"
          required
        />
      </div>
      <div class="form-group field">
        <div class="group-button">
          <button type="submit" class="btn btn-primary mr-30">Thêm</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      repassword: ""
    };
  },
  computed: mapGetters([]),
  methods: {
    ...mapMutations(["addAccountTransportation"]),
    ...mapActions([ ]),
    onSubmit(event) {
      event.preventDefault();
    //   if(this.password != this.repassword){

    //   }else{

    //   }
        this.addAccountTransportation({
            username: this.username,
            password: this.password
        });
        //check trung username
        this.username = ""
    },
  },
};
</script>

<style scoped>
.newaccount {
  background-color: #fff;
  border-radius: 5px;
  margin: 20px;
  margin-top: 50px;
  padding: 40px;
  text-align: left;
}
h3 {
  margin-bottom: 20px;
}
.field {
  display: flex;
  margin-top: 10px;
}
.field label {
  width: 30%;
  vertical-align: middle;
  margin: 0px;
  font-weight: bold;
}
.group-button {
  margin: auto;
}
.field button {
  width: 85px;
  height: 40px;
}
.mr-30 {
  margin-right: 30px;
}
</style>