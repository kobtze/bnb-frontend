<template>
  <section>
    <div class="app-header sticky">
      <main-nav @onShowFilter="onShowFilter" />

      <div v-show="isFilterShow" class="filter-modal ">
        <section class="container flex column space-around">
            <button class="hide-filter-btn align-end" @click="onShowFilter">X</button>
            <house-filter @setFilter="setFilter" :isFilterFlatten="isFilterFlatten" />
        </section>
      </div>
    </div>
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
  data() {
    return {
      isFilterFlatten: "",
      isFilterShow: false
    };
  },
  created() {
    this.isFilterFlatten = true;
    this.$store.dispatch({ type: "loadHouses" });
  },
  computed: {
    houses() {
      return this.$store.getters.houses;
    }
  },
  methods: {
    onShowFilter() {
      // console.log("isFilterShow", toggleFilter);
      this.isFilterShow =  !this.isFilterShow ;
    },
    setFilter(filterBy) {
      console.log("filterby", filterBy);
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