<template>
  <section>
    <Gallery :images="imgNewKey"></Gallery>
  </section>
</template>

<script>

// vue-cover-gallery
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            const imgObj = {title: "", description: "", href: ""}
            const map = this.images.map(image => {
                const img = Object.create(imgObj);
                img.href = image
            })
            return map 
        },
    },
    components: {
        Gallery
    }
}
</script>

<style>
</style>