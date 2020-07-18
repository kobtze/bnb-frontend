<template>
  <section class="scores flex column">
    <h4>{{scores.rating.toFixed(2)}} ({{reviews.length}} reviews)</h4>
      <section class="score-list flex justify-center space-between">

         <div class=" left">
               <!-- (scores.'something'/5)*100 is for feeling the ranking line as it computed from 100% -->
               Cleanliness<el-progress class="change" :percentage="(scores.cleanliness/5)*100"  color="#000000" :format="fiveStarsFormat" ></el-progress>
               Communication<el-progress :percentage="(scores.cleanliness/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress>
               Checkin<el-progress :percentage="(scores.checkin/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress>
         </div>
         <div class="right">
             <div>Accuracy</div><el-progress  :percentage="(scores.accuracy/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress>
             <div>Location</div><el-progress :percentage="(scores.location/5)*100" color="#000000" :format="fiveStarsFormat" ></el-progress>
             <div>Value</div> <el-progress :percentage="(scores.value/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress>
         </div>
       </section>
       
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
  methods: {
    //making 5 to be the 100% 
      fiveStarsFormat(percentage) {
        return `${parseFloat((percentage*5)/100)}`;
      },

  },
  components: {
    ReviewPreview
  }
};
</script>

<style>
</style>