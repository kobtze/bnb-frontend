<template>
  <div v-if="houseToShow" class="house-details" :id="houseToShow._id">
    <!-- <div class="bnb-container"> -->
        <p class="name">{{houseToShow.name}}</P>
        <!-- <p>Imgs: {{houseToShow.imgUrls}}</p> -->
        <image-gallery :images="houseToShow.imgUrls" />
        <p>Price: {{houseToShow.price}}</P>
        <p>Type: {{houseToShow.type}}</P>
        <p class="description">description: {{houseToShow.description}}</P>
        <p>capacity: {{houseToShow.capacity}}</P>
        <amenities :amenities="houseToShow.amenities" />
        <house-reviews :reviews="houseToShow.reviews" :scores="houseToShow.scores"/>
        <div class="google-map"><google-map :location="houseToShow.location" ></google-map></div>
        <date-picker />
    <!-- </div> -->
  </div>
</template>

<script>

import {houseService} from '../services/house.service.js';
import GoogleMap from '@/components/GoogleMap.vue';
import ImageGallery from '@/components/ImageGallery.vue';
import Amenities from '@/components/Amenities.vue';
import HouseReviews from '@/components/HouseReviews.vue';
import DatePicker from '@/components/DatePicker.vue';

export default {
    name: 'BnbDetails',
    data(){
        return {
            houseToShow: null
        }
    },
    components: {
        ImageGallery,
        Amenities,
        HouseReviews,
        GoogleMap,
        DatePicker,
    },
     methods: {
    async loadHouse(){
           let {id} = this.$route.params;
         try{
           this.houseToShow= await houseService.getById(id)
         }catch(err){
             console.log('didnt get any house');
         }
             
    },
   
},
 created() {
         this.loadHouse();
    }
}
</script>

<style>

</style>
