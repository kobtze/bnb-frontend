<template>
  <section>
    <h1>HouseList</h1>
    <ul>
        <!-- <house-preview v-for="house in houses" :key="house._id" :house="house"/> -->
        <house-preview-card v-for="house in houses" :key="house._id" :house="house"/>
    </ul>
  </section>
</template>

<script>
import HousePreview from "@/components/HousePreview.vue";
import HousePreviewCard from "@/components/HousePreviewCard.vue";

export default {
  name: "HouseList",
  props: ["houses"],

  components: {
    HousePreview,
    HousePreviewCard
  }
};
</script>

<style>
</style>