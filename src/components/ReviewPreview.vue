<template>
  <section class="review-preview">

      <div class="reviewer-details flex">
          <img :src="review.byUser.imgUrl" alt="">

          <div class="flex column">
            <p>{{review.byUser.name}}</p>
            <p class="review-time">{{getTime}}</p>
          </div>

      </div>
      <p>{{review.description}}</p>
  </section>
</template>

<script>
var moment = require('moment'); // require
export default {
props:['review'],


computed:{
 getTime(){
    return (moment(this.review.createdAt).format("MMM Do")) 
 }
},
}
</script>

<style>

</style>
