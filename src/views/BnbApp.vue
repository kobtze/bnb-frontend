<template>
  <section>
    <main-nav />
    <div class="container">
      <house-filter @filter="setFilter" :isFilterFlatten="isFilterFlatten"/> 
      <house-list :houses="houses" />
    </div>
  </section>
</template>


<script>
import HouseFilter from "@/components/HouseFilter.vue";
import HouseList from "@/components/HouseList.vue";
import MainNav from "@/components/MainNav.vue";

export default {
  data() {
    return{
      isFilterFlatten:'',
    }
  },
  created() {
    this.isFilterFlatten=true;
    this.$store.dispatch({ type: "loadHouses" });
  },
  computed: {
    houses() {
      return this.$store.getters.houses;
    }
  },
  methods: {
    setFilter(filterBy) {
      console.log('filterby',filterby);
      this.$store.commit({
        type: "setFilter",
        filterBy: _.cloneDeep(filterBy)
      });
      this.$store.dispatch({ type: "loadHouses" });
    }
  },

  components: {
    HouseList,
    HouseFilter,
    MainNav
  }
};
</script>

<style>
</style>