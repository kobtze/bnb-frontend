<template>
  <section class="house-list">
    <h3>Stays in {{getLocationName}}</h3>
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
    locationToShow: {
      type: String,
      required: false,
    },
  },
  // computed: {
  //   getLocationName() {
  //     const locationName = this.locationToShow;
  //     var patt = new RegExp(locationName, "i");

  //     if (patt.match("tokyo")) return "Tokyo";
  //     if (patt.test("new york new-york")) return "New York";
   
  //       // var str = "new york new-york";
  //       // var res = patt.test(str);
  //       // if (res) return "New York";

      
  //   },
  // },
  components: {
    HousePreview,
  },
  created() {
    console.log(this.locationToShow);
  },
};
</script>

<style>
</style>