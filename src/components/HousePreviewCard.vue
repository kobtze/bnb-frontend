<template>
<el-row>
    <el-card :body-style="{ padding: '0px' }">

    <router-link :to="{path: `/details/${house._id}`}">
    
      <div style="padding: 14px;">
          <img :src="house.mainImgUrl" class="image" />
          <p>⭐ {{house.scores.rating}}</p>
          <p>{{house.type}}</p>
          <p>{{getGuests}}</p>
          <p>{{house.name}}</p>
          <p>{{house.price}} / night</p>
          <p>{{house.host.name}} </p>
          <img :src="house.host.imgUrl" alt="">
     </div>

    </router-link>

    </el-card>
</el-row>
</template>


<script>

export default {
  props: ["house"],

  computed: {
    getGuests(){
      const guestNum = this.house.capacity;
      if (guestNum > 1) return `${guestNum} guests`;
      else return `1 guest`;
    }
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
      clear: both
  }
</style>
