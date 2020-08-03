<template>
  <section class="house-list">
    <h3 v-if="getLocation">Stays in {{getLocation}}</h3>
    <ul v-if="houses" class="house-list-ul">
      <house-preview v-for="house in houses" :key="house._id" :house="house" />
    </ul>
  </section>
</template>

<script>
import HousePreview from "@/components/HousePreview.vue";

export default {
  name: "HouseList",
  props: {
    houses: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterBy: {
        location: "",
        checkIn: "",
        checkOut: "",
        adultNumber: "",
        childrenNumber: "",
        rating: "",
        type: "",
      },
    };
  },

  components: {
    HousePreview,
  },
  computed: {
    getLocation(){
    console.log(this.$store.getters.filterBy, "this.$store.getters.filterBy");
    this.filterBy = this.$store.getters.filterBy;
    return this.filterBy.location
    }
  }
};
</script>

<style>
</style>