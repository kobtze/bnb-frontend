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
 isReviewsAdded: false,

  methods:{
  addReviews() {

    if (this.isReviewsAdded){
        this.reviews.splice(-4,4)
    }  else {

    const fakeReviews = 
    [
    { 
     "_id" : "fake101", "createdAt":  Date.now(),
     "byUser": { 
     "imgUrl": "https://res.cloudinary.com/dinlnfywr/image/upload/v1595532211/download_nqnvgz.jpg",
     "name": "Donald J Trump", 
     },
     "description": "THIS WAS AMAZING.TREMENDOUS VACATION. GREAT PLACE! HIGHLY RECOMMEND. MAKE AMERICA GREAT AGAIN!"
    },
    { 
     "_id" : "fake102", "createdAt": Date.now(), 
     "byUser": { 
     "imgUrl": "https://res.cloudinary.com/dinlnfywr/image/upload/v1595535388/download_jwjvnt.jpg",
     "name": "Barack Obama", 
     },
     "description": "Had a blast Thank you for your hospitality. Yes we can!"
    },
    { 
     "_id" : "fake103", "createdAt": Date.now(), 
     "byUser": { 
     "imgUrl": "https://res.cloudinary.com/dinlnfywr/image/upload/v1595536853/download-1_srmhoh.jpg",
     "name": "Vladimir Putin", 
     },
     "description": "Da!"
    },
    { 
     "_id" : "fake104", "createdAt": Date.now(), 
     "byUser": { 
     "imgUrl": "https://res.cloudinary.com/dinlnfywr/image/upload/v1595536961/download-2_wkilio.jpg",
     "name": "Angela Merkel", 
     },
     "description": "Was ist der Unterschied zwischen einem Saxen und einem Ausländer? Den Ausländer versteht man, wenn er Deutsch spricht."
    },

  ]
    fakeReviews.forEach(review => this.reviews.push(review))
   }
      this.isReviewsAdded = !this.isReviewsAdded
  }
  },
    components: {
    ReviewPreview,
  }
}

</script>

<style>
</style>