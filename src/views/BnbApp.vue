<template>
  <section>
    <main-nav/>
    <div class="container">
        <house-list :houses="houses" />
    </div>
  </section>
</template>


<script>
import HouseFilter from "@/components/HouseFilter.vue";
import HouseList from "@/components/HouseList.vue";
import MainNav from "@/components/MainNav.vue";

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
    HouseFilter,
    MainNav, 
  }
};
</script>

<style>
</style>