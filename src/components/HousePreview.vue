<template >
  <li class="house-preview flex column">
    <el-row>
      <el-card :body-style="{ padding: '0px' }" shadow="never">
        <preview-carousel :imgs="imgs"></preview-carousel>
        <router-link :to="{path: `/details/${house._id}`}">
          <div class="prev-text">
            <div class="prev-scores">
              <span class="prev-star">
                <svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; fill: currentcolor;">
                  <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z"/>
                </svg>
              </span>
              <span class="rating">{{house.scores.rating}}</span>
              <span class="review-count">({{house.reviewCount}})</span>
            </div>
            <section class="flex" >
            <div class="prev-type">{{house.type}}{{getCityName}}</div>
            </section>
            <div class="prev-name">{{house.name}}</div>
            <div class="prev-price">
              <span class="bold">${{house.price}}</span>
              / night
            </div>
          </div>
        </router-link>
      </el-card>
    </el-row>
  </li>
</template>


<script>
import "element-ui/lib/theme-chalk/index.css";
import PreviewCarousel from "./PreviewCarousel.vue";

export default {
  props: ["house"],
  data() {
    return {
      imgs: this.house.imgUrls
    };
  },
  computed: {
  // guestsCountLabel
    getGuests() {
      const guestNum = this.house.capacity;
      if (guestNum > 1) return `${guestNum} guests`;
      else return `1 guest`;
    },
      getCityName(){
     const locationStrs = this.house.location.name.split(',');
     return  " · " + locationStrs[0] ;
    }
  },
  components: {
    PreviewCarousel
  }

};
</script>

<style>
</style>
