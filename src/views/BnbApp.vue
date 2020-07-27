<template>
  <section>
    <div class="app-header sticky">
      <main-nav @onShowFilter="onShowFilter"/>

      <div v-show="isFilterShow" class="filter-modal">
        <section class="container flex space-around align-center">
            <house-filter @setFilter="setFilter" :isFilterFlatten="isFilterFlatten" :isBnbPage="isBnbPage"/>
            <button class="hide-filter-btn" @click="onShowFilter"> X </button>
        </section>
      </div>

    </div>
    <div class="container">
      <house-list :houses="houses" :locationToShow="locationToShow"/>
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
      isBnbPage: true,
      isFilterFlatten: '',
      isFilterShow: false,
      locationToShow : '',
    };
  },
  created() {
    this.isFilterFlatten = true;
    this.$store.dispatch({ type: "loadHouses", filterBy : null });
  },
  computed: {
    houses() {
      return this.$store.getters.houses;
    }
  },
  methods: {
    onShowFilter() {
      this.isFilterShow =  !this.isFilterShow ;
    },
    setFilter(filterBy) {
       this.isFilterShow =  !this.isFilterShow ;
       this.locationToShow = filterBy.location
    //   this.$store.commit({ type: "setFilter", filterBy: _.cloneDeep(filterBy)});
      this.$store.dispatch({ type: "loadHouses", filterBy : filterBy });
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