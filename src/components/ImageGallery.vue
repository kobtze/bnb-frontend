<template>
  <section>
    <!-- <Gallery :images="imgNewKey"></Gallery> -->
    <div class="gallery-hero gallery-height">
      <div class="gallery-grid">
        <div :style="imgUrl1" class="placeholder image-1"></div>
        <div :style="imgUrl2" class="placeholder image-2"></div>
        <div :style="imgUrl3" class="placeholder image-3"></div>
        <div :style="imgUrl4" class="placeholder image-4"></div>
        <div :style="imgUrl5" class="placeholder image-5"></div>
      </div>
    </div>
  </section>
</template>

<script>
// vue-cover-gallery
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Gallery from "vue-cover-gallery";

export default {
  name: "ImageGallery",
  props: ["images"],
  computed: {
    imgUrl1() {
        return `background: url("${this.images[0]}");
                background-position: center center;
                background-size: cover;`
    },
    imgUrl2() {
    return `background: url("${this.images[1]}");
            background-position: center center;
            background-size: cover;`
    },
    imgUrl3() {
    return `background: url("${this.images[2]}");
            background-position: center center;
            background-size: cover;`
    },
    imgUrl4() {
    return `background: url("${this.images[3]}");
            background-position: center center;
            background-size: cover;`
    },
    imgUrl5() {
    return `background: url("${this.images[4]}");
            background-position: center center;
            background-size: cover;`
    },
    imgNewKey() {
      var imgsArray = [];
      var imgsFromProp = this.images;
      for (var i = 0; i < imgsFromProp.length; i++) {
        var imgObj = {
          // title: i,
          // description: `desc ${i}`,
          href: imgsFromProp[i]
        };
        imgsArray.push(imgObj);
      }
      return imgsArray;
    },
    imgHrefs() {
      const imgObj = { title: "", description: "", href: "" };
      const map = this.images.map(image => {
        const img = Object.create(imgObj);
        img.href = image;
      });
      return map;
    }
  },
  components: {
    // Gallery
  }
};
</script>

<style>
</style>