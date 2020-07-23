<template>
  <div v-if="houseToShow" class="house-details" :id="houseToShow._id">
    <section class="container">

        <section class="details-header">
            <h1 class="alt">{{houseToShow.name}}</h1>
            <div class="second-row">
                <prev-scores :scores="houseToShow.scores.rating" :reviewcount="houseToShow.reviews.length" />
                <span class="seperator" aria-hidden="true">·</span>
                <div class="location">{{houseToShow.location.name}}</div>
            </div>
        </section>

        <image-gallery :images="houseToShow.imgUrls" />

        <div class="details-main">
            <div class="content-column">

                <section>
                    <h3 class="content-header">
                        {{houseToShow.type}} hosted by {{houseToShow.host.name}}
                    </h3>
                    <div class="content-secondary-header">
                        {{houseToShow.capacity}} guests
                    </div>
                </section>

                <section class="content-desc">
                    {{houseToShow.description}}
                </section>
                
                <amenities :amenities="houseToShow.amenities" />

            </div>

            <div class="booking-column">

                <section class="booking-sticky">
                    <div style="border: 1px solid rgb(221, 221, 221); border-radius: 12px; padding: 24px; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;">

                        <div class="price-rating">
                            <span class="">$73</span>
                            <span class="">/ night</span>
                            <span class="">4.80 (70)</span>
                        </div>

                        <div class="checkin-chekout">
                            <div class="">Check-in</div>
                            <div class="">Checkout</div>
                        </div>

                        <div class="call-to-action">
                            <form action="" method="post">
                                <input type="hidden" name="house_id" value="">
                                <input type="hidden" name="guest_currency" value="USD">
                                <input type="hidden" name="checkin" value="undefined">
                                <input type="hidden" name="checkout" value="undefined">
                                <input type="hidden" name="number_of_guests" value="1">
                                <button type="submit" class="">
                                <span class="">Check availability </span>
                                </button>
                            </form>
                        </div>
                        
                    </div>
                </section>
            </div>
        </div>
        <house-reviews :reviews="houseToShow.reviews" :scores="houseToShow.scores"/>

        <google-map :location="houseToShow.location"></google-map>
        <date-picker />
    </section>
  </div>
</template>

<script>

import {houseService} from '../services/house.service.js';
import PrevScores from '@/components/PrevScores.vue';
import ImageGallery from '@/components/ImageGallery.vue';
import Amenities from '@/components/Amenities.vue';
import HouseReviews from '@/components/HouseReviews.vue';
import DatePicker from '@/components/DatePicker.vue';
import GoogleMap from '@/components/GoogleMap.vue';

export default {
    name: 'BnbDetails',
    data(){
        return {
            houseToShow: null
        }
    },
    components: {
        PrevScores,
        ImageGallery,
        Amenities,
        HouseReviews,
        DatePicker,
        GoogleMap,
    },
     methods: {
    async loadHouse(){
        let {id} = this.$route.params;
        try {
           this.houseToShow= await houseService.getById(id)
        } catch(err) {
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
