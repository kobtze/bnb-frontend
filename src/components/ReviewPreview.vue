<template>
  <section>
      <div class="flex">
          <img :src="review.byUser.imgUrl" alt="">
          <div>
            <p>{{review.byUser.name}}</p>
            <p>{{review.createdAt}}</p>
          </div>
      </div>
      <p>{{review.description}}</p>
  </section>
</template>

<script>
export default {
props:['review']
}
</script>

<style>

</style>
