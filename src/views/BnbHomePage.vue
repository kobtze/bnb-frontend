<template>
  <section class="bnb-home-page">
    <div class="hero-container">
      <home-page-navbar></home-page-navbar>
      <section class="container">
        <house-filter @setFilter="setFilter" :isFilterFlatten="isFilterFlatten"/> 
      </section>
      
      <!-- <div class="home-page-content p-under-filter flex space-around align-center">
        <p> Earn up to $2,995/month hosting your place in Tel Aviv </p>
        <p> Become a host </p>
        <span><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height:1em;width:1em;display:block;fill:currentColor"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg></span>
     </div> -->
    </div>

    <homePageSuggestions/>
    <homePagePromotion></homePagePromotion>
    <homePagePopularDest @setFilter="setFilter"/>
      
          
  </section>

</template>

<script>
import houseFilter from "@/components/HouseFilter.vue";
import homePagePromotion from "@/components/HomePagePromotion.vue";
import homePageNavbar from "@/components/HomePageNavbar.vue";
import homePageSuggestions from "@/components/HomePageSuggestions.vue";
import homePagePopularDest from "@/components/HomePagePopularDest.vue";
export default {
   data() {
    return{
      isFilterFlatten:'',
    }
  },
  components:{
    houseFilter,
    homePagePromotion,
    homePageNavbar,
    homePageSuggestions,
    homePagePopularDest,
  },
  created() {
    this.isFilterFlatten = false;
    this.$store.commit({type: "setFilter", filterBy: ''});
    
  },
   methods: {
    setFilter(filterBy) {
      this.$store.commit({type: "setFilter", filterBy: _.cloneDeep(filterBy)});
      this.$store.dispatch({ type: "loadHouses" });
    }
  },

}
</script>


<style>

</style>

