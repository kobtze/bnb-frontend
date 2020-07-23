<template>
  <section class="review-list">
    <ul>
      <review-preview v-for="review in reviews" :key="review._id" :review="review" />
    </ul>
    <button @click="addReviews">Show all reviews</button>
  </section>
</template>
<script>

import ReviewPreview from "@/components/ReviewPreview.vue";

export default {
 name: "ReviewList",
 props: ['reviews'],
 fakeReviews:[],

  methods:{
  addReviews() {
const fakeReview = { "_id" : "fake101", "createdAt": Date.now(), 
  "byUser": { 
    "imgUrl": "https://res.cloudinary.com/dinlnfywr/image/upload/v1595532211/download_nqnvgz.jpg",
    "name": "Donald J Trump", 
  },
  "description": "This was Amazing. Great Place! Highly recommend. Make AirBnB Great Again!"
  }
  this.reviews.push(fakeReview)
  }
  },
    components: {
    ReviewPreview,
  }
}

</script>

<style>
</style>