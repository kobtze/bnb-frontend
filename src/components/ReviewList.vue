<template>
    <section class="review-list">
      <ul>
        <review-preview v-for="review in reviews" :key="review._id" :review="review"/>
     </ul>
    </section>

</template>
<script>

import ReviewPreview from "@/components/ReviewPreview.vue";

export default {
 name: "ReviewList",
  props: ['reviews'],
    components: {
    ReviewPreview,
  }
}

</script>

<style>

</style>