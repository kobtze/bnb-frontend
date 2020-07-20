<template>
  <section class="bnb-home-page">
    <div class="hero-container">
      <home-page-navbar></home-page-navbar>
      <house-filter></house-filter>
      
      <div class="home-page-content p-under-filter flex space-around align-center">
        <p> Earn up to $2,995/month hosting your place in Tel Aviv </p>
        <p> Become a host </p>
        <span><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="height:1em;width:1em;display:block;fill:currentColor"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fill-rule="evenodd"></path></svg></span>
     </div>
    </div>

    <homePagePromotion></homePagePromotion>
      
          
    
    
  </section>

</template>

<script>
import houseFilter from "@/components/HouseFilter.vue";
import homePagePromotion from "@/components/HomePagePromotion.vue";
import homePageNavbar from "@/components/HomePageNavbar.vue";

export default {

  components:{
    houseFilter,
    homePagePromotion,
    homePageNavbar
  }
}
</script>


<style>

</style>

