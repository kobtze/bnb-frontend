<template>
  <section class="scores flex column">
    <h3> 
     
      <span class="prev-star">
        <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; fill: currentcolor;">
        <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"/>
        </svg>
      </span>
      
     {{scores.rating.toFixed(2)}} ({{reviews.length}} reviews)
    </h3>
   


      <section class="score-list ">

         <div class="left">
              <!-- (scores.'something'/5)*100 is for feeling the ranking line as it computed from 100% -->
              <section class="flex space-between align-center">   <p>Cleanliness</p>  <el-progress :stroke-width="4" :percentage="(scores.cleanliness/5)*100"  color="#000000" :format="fiveStarsFormat"></el-progress>  </section>
               <section class="flex space-between align-center">  <p>Communication</p> <el-progress :stroke-width="4" :percentage="(scores.cleanliness/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress> </section>
               <section class="flex space-between align-center">  <p>Check-in</p>  <el-progress :stroke-width="4" :percentage="(scores.checkin/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress> </section>
         </div>

         <div class="right">
           <section class="flex space-between align-center">   <p>Accuracy</p> <el-progress :stroke-width="4" :percentage="(scores.accuracy/5)*100" color="#000000"  :format="fiveStarsFormat"></el-progress> </section>
            <section class="flex space-between align-center">   <p>Location</p>  <el-progress :stroke-width="4"  :percentage="(scores.location/5)*100" color="#000000" :format="fiveStarsFormat" ></el-progress> </section>
             <section class="flex space-between align-center">  <p>Value</p> <el-progress :stroke-width="4" :percentage="(scores.value/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress> </section>
         </div>

       </section>
       <review-list :reviews="reviews" :house="house" />

  </section>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
import ReviewList from "@/components/ReviewList.vue";
import PrevScores from '@/components/PrevScores.vue';
export default {
  name: "HouseReviews",
  props: ['reviews','scores', 'house'],

  methods: {
    //making 5 to be the 100% 
      fiveStarsFormat(percentage) {
        return `${parseFloat((percentage*5)/100)}`;
      },

  },
  components: {
    ReviewList,
    PrevScores
  }
};
</script>

<style>
</style>