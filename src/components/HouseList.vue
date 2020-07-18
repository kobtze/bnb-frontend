<template>
  <section class="house-list">
    <ul class="house-list-ul">
        <house-preview v-for="house in houses" :key="house._id" :house="house"/>
    </ul>
  </section>
</template>

<script>
import HousePreview from "@/components/HousePreview.vue";

export default {
  name: "HouseList",
  props: ["houses"],

  components: {
    HousePreview,
  }
};
</script>

<style>
</style>