<template>

  <section class="google-map">
  <h3>Location</h3>
      <GmapMap
  :center="markers"
  :zoom="15"
  map-type-id="terrain"
  style="width: 100%; height: 480px"
>
  <GmapMarker
    :position="markers"
    :clickable="true"
    :draggable="true"
    @click="center=markers"/>
</GmapMap>
  </section>
</template>

<script>
export default {
  name: "GoogleMap",
  props: ['location'],
    data(){
        return{
            markers:{lat:'',lng:''},

        }
    },
    computed:{

    },
    created(){
        this.markers.lat=this.location.lat
        this.markers.lng=this.location.lng

    }

}
</script>

<style>

</style>