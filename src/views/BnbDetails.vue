<template>
    

  <div v-if="houseToShow" class="house-details" :id="houseToShow._id">
    <div class="app-header sticky">
          <main-nav @onShowFilter="onShowFilter" />

      <div v-show="isFilterShow" class="filter-modal ">
        <section class="container flex space-between align-center">
            <house-filter @setFilter="setFilter" :isFilterFlatten="isFilterFlatten" :isBnbPage="isBnbPage"/>
            <button class="hide-filter-btn" @click="onShowFilter">X</button>
        </section>
      </div>
    </div>

    <section class="container">
      <section class="details-header">
        <h1 class="alt">{{houseToShow.name}}</h1>
        <div class="second-row">
          <prev-scores
            :scores="houseToShow.scores.rating"
            :reviewcount="houseToShow.reviews.length"
          />
          <span class="seperator" aria-hidden="true">·</span>
          <div class="location">{{houseToShow.location.name}}</div>
        </div>
      </section>

      <image-gallery :images="houseToShow.imgUrls" />

      <div class="details-main">
        <div class="content-column">
          <section class="host-house-details flex space-between">
            <section>
              <h3 class="content-header">{{houseToShow.type}} hosted by {{houseToShow.host.name}}</h3>
              <div class="content-secondary-header">{{houseToShow.capacity}} guests</div>
            </section>
            <img class="host-img" :src="houseToShow.host.imgUrl" alt />
          </section>

          <section class="content-desc">{{houseToShow.description}}</section>

          <amenities :amenities="houseToShow.amenities" />
        </div>

        <div class="booking-column">
          <section class="booking-sticky">
            <!-- <div>   style="border: 1px solid rgb(221, 221, 221); border-radius: 12px; padding: 24px; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;"</div> -->
            <div>
              <div class="price-rating flex space-between align-center">
                <p>
                  <span class="price">${{houseToShow.price}}</span> / night
                </p>
                <prev-scores
                  :scores="houseToShow.scores.rating"
                  :reviewcount="houseToShow.reviews.length"
                />
              </div>

              <section class="date-picker-container flex">
                <el-date-picker
                  v-model="checkIn"
                  class="check-in"
                  type="date"
                  placeholder="CHECK-IN"
                ></el-date-picker>
                <el-date-picker
                  v-model="checkOut"
                  class="check-out"
                  type="date"
                  placeholder="CHECKOUT"
                ></el-date-picker>
              </section>

              <section class="guest-number-container">
                <button @click="isShowInputs = !isShowInputs">GUESTS {{getGuestNum}}</button>
                <div class="guests-inputs-container" v-if="isShowInputs">
                  <div class="input-div flex align-center space-between">
                    <p>ADULTS</p>
                    <el-input-number
                      @click="getGuestNum"
                      class="flex align-center"
                      v-model="guests.adultNumber"
                      placeholder="ADULTS"
                      :min="1"
                      :max="10"
                    ></el-input-number>
                  </div>
                  <div class="input-div flex align-center space-between">
                    <p>CHILDREN</p>
                    <el-input-number
                      @click="getGuestNum"
                      v-model="guests.childrenNumber"
                      placeholder="CHILDREN"
                      :min="0"
                      :max="10"
                    ></el-input-number>
                  </div>
                </div>
              </section>
              <button>Check Availability</button>
            </div>
          </section>
        </div>
      </div>
      <house-reviews :reviews="houseToShow.reviews" :scores="houseToShow.scores" />

      <google-map :location="houseToShow.location"></google-map>
      <date-picker />
    </section>
  </div>
</template>

<script>
import { houseService } from "../services/house.service.js";
import PrevScores from "@/components/PrevScores.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import Amenities from "@/components/Amenities.vue";
import HouseReviews from "@/components/HouseReviews.vue";
import DatePicker from "@/components/DatePicker.vue";
import GoogleMap from "@/components/GoogleMap.vue";
import MainNav from "@/components/MainNav.vue";
import HouseFilter from "@/components/HouseFilter.vue";

export default {
  name: "BnbDetails",
  data() {
    return {
      isBnbPage:false,
      isFilterShow: false,
      isShowInputs: false,
      checkIn: "",
      checkOut: "",
      guests: {
        adultNumber: 1,
        childrenNumber: 0
      },

      houseToShow: null
    };
  },
  components: {
    PrevScores,
    ImageGallery,
    Amenities,
    HouseReviews,
    DatePicker,
    GoogleMap,
    MainNav,
    HouseFilter
  },
  methods: {
    onShowFilter() {
      // console.log("isFilterShow", toggleFilter);
      this.isFilterShow = !this.isFilterShow;
    },
    setFilter(filterBy) {
    //   console.log("filterby", filterBy);
      this.$store.commit({
        type: "setFilter",
        filterBy: _.cloneDeep(filterBy)
      });
      this.$store.dispatch({ type: "loadHouses" });
    },

    async loadHouse() {
      let { id } = this.$route.params;
      try {
        this.houseToShow = await houseService.getById(id);
      } catch (err) {
        console.log("didnt get any house");
      }
    }
  },
  computed: {
    getGuestNum() {
      let guestNumber = this.guests.adultNumber + this.guests.childrenNumber;
      return guestNumber;
    }
  },
  created() {
    this.isFilterFlatten = true;
    this.loadHouse();
  }
};
</script>

<style>
</style>
