<template>
  <div class="ratio-2-3">
    <el-carousel :autoplay="false" trigger="click" arrow="always">
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
.el-carousel,
.el-carousel__container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}
.carousel-img {
  position: relative;
  height: 100%;
  width: 100%;
  /* object-fit: fill; */
  object-fit: cover;
}
</style>