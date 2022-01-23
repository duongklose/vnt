<template>
  <form @submit="onSubmit">
    <h3>Thêm công ty vận tải mới</h3>
    <div v-if="phoneIsRegited" class="alert alert-danger" role="alert">
      Số điện thoại này đã được đăng ký.
    </div>
    <div class="form-group field">
      <label for="name">Tên công ty vận tải</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Tên công ty vận tải"
        v-model="name"
        required
      />
    </div>
    <div class="form-group field">
      <label for="phone">Số điện thoại</label>
      <input
        type="text"
        class="form-control"
        id="phone"
        placeholder="0123456789"
        v-model="phone"
        required
      />
    </div>
    <div class="form-group field">
      <label for="description">Mô tả</label>
      <textarea
        class="form-control"
        id="description"
        rows="3"
        v-model="description"
      ></textarea>
    </div>
    <div class="form-group field">
      <label for="logo">Logo</label>
      <input type="file" name="upfile" @change="uploadImage($event)" required/>
    </div>
    <div class="form-group field">
      <div class="group-button">
        <button type="submit" class="btn btn-primary mr-30">Thêm</button>
        <button
          type="submit"
          class="btn btn-outline-danger"
          @click="TOGGLE_ISADDNEW"
        >
          Ẩn bớt
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      phone: "",
      description: "",
      logo: null,
    };
  },

  computed: mapGetters(["phoneIsRegited"]),
  methods: {
    ...mapActions(["addTransportation"]),
    ...mapMutations(["TOGGLE_ISADDNEW"]),
    onSubmit(event) {
      event.preventDefault();
      this.addTransportation({
        name: this.name,
        phone: this.phone,
        description: this.description,
      });
      this.name = "";
      this.phone = "";
      this.description = "";
    },
    async uploadImage(e) {
      let upfile = new FormData();
      upfile.append("name", e.target.files[0].name);
      upfile.append("file", e.target.files[0]);
      const response = await axios.post(
        "http://localhost:3000/admin/uploadfile",
        upfile
      );
      console.log("response", response);
      // this.logo = response.data.url;
    },
  },
};
</script>

<style scoped>
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