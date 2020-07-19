<template>
  <div class="block">
    <el-carousel height="200px" :autoplay="false" trigger="click">
      <el-carousel-item v-for="img in imgs" :key="img">
        <img class="carousel-img" :src="img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
export default {
  props: ["imgs"]
};
</script>


<style>
/* .el-carousel{
    width:100%
}*/
.carousel-img {
  /* width: 300px; */
  height: 100%;
  width: 100%;
  /* object-fit: fill; */
  object-fit: cover;
}
</style>