<template>
  <section class="scores flex column">
    <h4>⭐{{scores.rating.toFixed(2)}} ({{reviews.length}} reviews)</h4>
      <section class="score-list flex">

         <div class="left">
            <!-- (scores.'something'/5)*100 is for feeling the ranking line as it computed from 100% -->
            <p>Cleanliness</p> <el-progress class="change" :percentage="(scores.cleanliness/5)*100"  color="#000000" :format="fiveStarsFormat" ></el-progress>
            <p>Communication</p> <el-progress :percentage="(scores.cleanliness/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress>
            <p>Checkin</p><el-progress :percentage="(scores.checkin/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress>
         </div>
         <div class="right">
            <p>Accuracy</p><el-progress  :percentage="(scores.accuracy/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress>
            <p>Location</p><el-progress :percentage="(scores.location/5)*100" color="#000000" :format="fiveStarsFormat" ></el-progress>
            <p>Value</p><el-progress :percentage="(scores.value/5)*100" color="#000000" :format="fiveStarsFormat"></el-progress>
         </div>
 </section>
       
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
export default {
 name: "reviewScores",
  props: ['reviews','scores'],
  methods: {
    //making 5 to be the 100% 
      fiveStarsFormat(percentage) {
        return `${parseFloat((percentage*5)/100)}`;
      },

  },
}
</script>

<style>

</style>