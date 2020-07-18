<template >
<li class="house-preview flex column align-start">
  <el-row>
    <el-card :body-style="{ padding: '0px' }">

         <preview-carousel :imgs="imgs"></preview-carousel>

        <router-link :to="{path: `/details/${house._id}`}">
        <div style="padding: 14px;">

          <!-- <img :src="house.mainImgUrl" class="preview-image" /> -->
          <p>⭐ {{house.scores.rating}}</p>
          <p>{{house.type}}</p>
          <p>{{getGuests}}</p>
          <p>{{house.name}}</p>
          <p>{{house.price}} / night</p>
          <p>{{house.host.name}}</p>
 
        </div>
      </router-link>
    </el-card>
  </el-row>
  </li>
</template>


<script>
import PreviewCarousel from "./PreviewCarousel.vue";

export default {
  props: ["house"],
  data() {
    return {
      imgs: this.house.imgUrls
    };
  },
  computed: {
    getGuests() {
      const guestNum = this.house.capacity;
      if (guestNum > 1) return `${guestNum} guests`;
      else return `1 guest`;
    }
  },
  components: {
    PreviewCarousel
  }
};
</script>



<style>
 .time {
        font-size: 13px;
        color: #999;
      }
      
      .bottom {
        margin-top: 13px;
        line-height: 12px;
      }
      
      .button {
        padding: 0;
        float: right;
      }
      
      .image {
        width: 100%;
        display: block;
      }
      
      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      
      .clearfix:after {
        clear: both;
      }

</style>






