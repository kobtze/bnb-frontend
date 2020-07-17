<template>
  <section>
   
        <h4>{{scores.rating}}({{reviews.length}} reviews)</h4>
               <p>Accuracy: {{scores.accuracy}}</p>
               <p>Checkin: {{scores.checkin}}</p>
               <p>Communication: {{scores.communication}}</p>
               <p>Location: {{scores.location}}</p>
               <p>Value: {{scores.value}}</p>
               <el-progress :percentage="scores.accuracy">Accuracy</el-progress>
             
      <ul>
        <review-preview v-for="review in reviews" :key="review._id" :review="review"/>
      </ul>
  </section>
</template>

<script>
import ReviewPreview from "@/components/ReviewPreview.vue";

export default {
  name: "reviewList",
  props: ['reviews','scores'],

  components: {
    ReviewPreview
  }
};
</script>

<style>
</style>