<template>
 
  <div class="block">
    <el-carousel :autoplay="false" trigger="click">
      <el-carousel-item  v-for="img in imgs" :key="img">
          <img class="carousel-img" :src="img"  />
      </el-carousel-item>
    </el-carousel>
  </div>
  
</template>

<script>
export default {
  props: ["imgs"],

};
</script>


<style>
.el-carousel{
    width:100%
}
.carousel-img{
 width: 300px;
object-fit: fill;
}
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
</style>