<template>
  <div v-if="houseToShow" class="house-details" :id="houseToShow._id">
    <section class="container">

        <section class="details-header">
            <div class="house-name">{{houseToShow.name}}</div>
            <!-- <p class="rating">{{houseToShow.scores.rating}}</p> -->
            <div class="second-row">
                <prev-scores :scores="houseToShow.scores.rating" :reviewcount="houseToShow.reviews.length" />
                <span class="seperator" aria-hidden="true">·</span>
                <div class="location">{{houseToShow.location.name}}</div>
            </div>
        </section>

        <image-gallery :images="houseToShow.imgUrls" />
        <div class="details-main">
            <div class="content-column">
                <div class="content-header">
                    {{houseToShow.type}} hosted by {{houseToShow.host.name}}
                </div>
                <div class="content-secondary-header">{{houseToShow.capacity}} guests</div>
                <!-- <p>{{houseToShow.type}}</P> -->
                <div class="content-desc">{{houseToShow.description}}</div>
                <amenities :amenities="houseToShow.amenities" />
            </div>
            <div class="booking-column">
                <div class="booking-sticky">
                    <div style="border: 1px solid rgb(221, 221, 221); border-radius: 12px; padding: 24px; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;">
                        <div>
                            <div class="1st-row-price-rating">
                                <span class="_pgfqnw">$73</span>
                                <span class="_1l0ezq0">/ night</span>
                                <span class="_bq6krt">4.80 (70)</span>
                            </div>
                            <div class="2nd-row-checkin-chekout">
                                <div class="_7eq2v2">Check-in</div>
                                <div class="_7eq2v2">Checkout</div>
                            </div>
                            <div class="3rd-row-check-availabilty">
                                <form action="/payments/book?hosting_id=31430309" method="post">
                                    <input type="hidden" name="s" value="undefined">
                                    <input type="hidden" name="hosting_id" value="31430309">
                                    <input type="hidden" name="guest_currency" value="USD">
                                    <input type="hidden" name="checkin" value="undefined">
                                    <input type="hidden" name="checkout" value="undefined">
                                    <input type="hidden" name="number_of_guests" value="1">
                                    <input type="hidden" name="selected_cancellation_policy_id" value="undefined">
                                    <button data-testid="homes-pdp-cta-btn" type="submit" class="_1ot1we5p">
                                        <span class="_163rr5i">
                                            <span class="_19di23v" style="background-position: calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%); --mouse-x:17.49; --mouse-y:11.4583;"></span></span><span class="_tcp689">Check availability </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <house-reviews :reviews="houseToShow.reviews" :scores="houseToShow.scores"/>
        <div class="google-map"><google-map :location="houseToShow.location" ></google-map></div>
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
