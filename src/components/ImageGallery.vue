<template>
  <section>
    <h2>Image Gallery</h2>
    <Gallery :images="imgNewKey"></Gallery>
  </section>
</template>

<script>
import Gallery from "vue-cover-gallery"

export default {
    name: 'ImageGallery',
    props: ['images'],
    computed: {

        imgNewKey(){
            var imgsArray = [];
            var imgsFromProp = this.images;
            for (var i = 0; i < imgsFromProp.length; i++) {
                var imgObj = {
                // title: i,
                // description: `desc ${i}`,
                href: imgsFromProp[i]
                }
                imgsArray.push(imgObj);
            }
            return imgsArray;
        },
        imgHrefs() {
            var imgsArray = this.images.map(image => {
                {
                // title: i,
                // description: `desc ${i}`,
                href: image
                }
            })
            console.log(map1,'map1 !!!');
            return imgsArray;
        },
    },
    components: {
        Gallery
    }
}
</script>

<style>
</style>