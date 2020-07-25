<template>
  <section class="review-preview">
    <div class="reviewer-details flex">
      <img :src="review.byUser.imgUrl" alt />

      <div class="flex column">
        <p>{{review.byUser.name}}</p>
        <p class="review-time">{{getTime}}</p>
      </div>
    </div>


    <p class="review-description">{{trucateText}}</p>
    <button v-if="isShowBtn" class="read-more-btn" @click="isReadMore=!isReadMore">read more</button>
  </section>
</template>

<script>
var moment = require("moment"); // require

export default {
  props: ["review"],
  data() {
    return {
      isShowBtn: false,
      isReadMore: false,
    };
  },

  computed: {
    getTime() {
      return moment(this.review.createdAt).format("MMM Do");
    },

    trucateText() {
      let txt = this.review.description;
      if (txt.length > 300 && !this.isReadMore) {
        this.isShowBtn = true;
        return txt.substring(0, 300) + "...";
      }

      return txt;
    },
  },
};
</script>

<style>
</style>
