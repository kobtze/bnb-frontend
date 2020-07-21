<template>
  <section>
    <main-nav />
    <div class="container">
      <list-filter @filter="setFilter" /> 
      <house-list :houses="houses" />
    </div>
  </section>
</template>


<script>
import ListFilter from "@/components/ListFilter.vue";
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
  methods: {
    setFilter(filterBy) {
      this.$store.commit({
        type: "setFilter",
        filterBy: _.cloneDeep(filterBy)
      });
      this.$store.dispatch({ type: "loadHouses" });
    }
  },

  components: {
    HouseList,
    ListFilter,
    MainNav
  }
};
</script>

<style>
</style>