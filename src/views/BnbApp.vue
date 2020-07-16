<template>
  <section>
    <h1>Hello Bnbapp!</h1>
    <!-- <pre>{{houses}}</pre> -->
    <house-list :houses="houses" />
  </section>
</template>


<script>
import HouseFilter from "@/components/HouseFilter.vue";
import HouseList from "@/components/HouseList.vue";

export default {
    // data() {
    //     housesToShow
    // },
  created() {
    this.$store.dispatch({ type: "loadHouses" });
  },
  computed: {
    houses() {
      return this.$store.getters.houses;
    }
  },
  components: {
    HouseList,
    HouseFilter
  }
};
</script>

<style>
</style>