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
            const map1 = this.images.map(image => {
                 image.href = image
                 return image.href
            })
            console.log(map1,'map1 !!!');
            return map1 
        },
    },
    components: {
        Gallery
    }
}
</script>

<style>
</style>