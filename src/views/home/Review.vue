<template>
  <div class="info">
    <div class="info-left">
      <img class="avatar" :src="'http://localhost:3000/' + this.transportation.logo" />
      <div class="info-text">
        <div class="name-transportation">{{this.transportation.name}}</div>
        <div class="description">{{this.transportation.description}}</div>
      </div>
    </div>
    <div class="rate_point">
      <span>Điểm đánh giá: {{this.transportation.rate_point}}</span>
      <i class="bi bi-star-fill"></i>
    </div>
  </div>
  <div class="review">
    <h2>Đánh giá từ khách hàng</h2>
    <div v-for="review in reviews" :key="review.id" :value="review.id">
        <Comment :review=review />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import Comment from "../../components/Comment.vue";

export default {
  components: { Comment },
  computed: mapGetters(["reviews", "transportation", "logo"]),
  created() {
    this.getReviews(JSON.parse(localStorage.getItem("user")).id_transportation);
    this.getTransportationLogo(6)
  },
  methods: {
    ...mapMutations([]),
    ...mapActions(["getReviews", "getTransportationLogo"]),
  },
};
</script>

<style scoped>
.review {
  background-color: #fff;
  border-radius: 5px;
  margin: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
}
h2 {
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;
}
.info {
  background-color: #fff;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  text-align: left;
  display: flex;
}
.info-left {
  display: flex;
}
.avatar {
  width: 60px;
  height: 60px;
  margin-right: 30px;
}

.info-text {
  display: block;
  text-align: left;
}
.name-transportation {
  font-size: 1.25rem;
}
.description {
  margin-top: 3px;
  font-size: 0.88rem;
  opacity: 0.6;
}
.rate_point {
  margin: auto 0 auto auto;
  font-weight: 600;
}
.rate_point i {
  color: yellow;
  margin-left: 5px;
}
</style>