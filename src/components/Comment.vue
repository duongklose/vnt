<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-8">
      <div class="comment">
        <img class="avatar" src="../assets/logo.png" />
        <div class="info-text">
          <div class="first">
            <div class="name">{{ review.name }}</div>
            <div class="point">Điểm đánh giá: {{ review.point }}</div>
          </div>
          <div class="content">{{ review.comment }}</div>
        </div>
      </div>
      <div v-if="review.return_comment == ''">
        <form class="form-return-comment">
          <div class="form-group">
            <input v-model="comment" class="form-control return_comment" />
          </div>
        </form>
        <button @click="reply" class="btn btn-primary">Gửi</button>
      </div>
      <div v-else>
        <div class="info-text form-return-comment">
          <div class="content">{{ review.return_comment }}</div>
        </div>
        <button @click="deleteC" class="btn btn-danger">Xóa</button>
      </div>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
// import HomeServices from "../apis/home";

export default {
  props: { review: Object },
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    ...mapMutations(["UPDATE_REVIEW"]),
    ...mapActions(["returnComment", "deleteTransportationComment"]),
    reply() {
      this.returnComment({
        comment: this.comment,
        id: this.review.id,
      });
    },
    deleteC() {
      this.deleteTransportationComment(this.review.id);
    },
  },
};
</script>

<style scoped>
.comment {
  display: flex;
  margin-bottom: 10px;
}
.form-return-comment {
  width: 90%;
  float: right;
  margin-bottom: 10px;
}
.return_comment {
  width: 90%;
  float: right;
}
.avatar {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50px;
  border: solid 1px #f0f2f5;
}

.info-text {
  display: block;
  text-align: left;
  width: 90%;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #f0f2f5;
  border-radius: 20px;
}
.first {
  display: flex;
  position: relative;
}
.name {
  font-size: 17px;
  font-weight: 600;
}
.point {
  font-weight: 600;
  font-style: italic;
  position: absolute;
  font-size: 17px;
  right: 0;
}
.content {
  margin-top: 3px;
  font-size: 17px;
}
.return_comment {
  background-color: #f0f2f5;
  border-radius: 20px;
  width: 100%;
}
</style>