<template>
 
  <div class="block ">
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
/* .el-carousel{
    width:100%
}*/
.carousel-img{
 /* width: 300px; */
object-fit: fill;
} 
</style>