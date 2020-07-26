<template>
  <form class="list-second-filter flex" @keyup.enter="search" @submit="search">
    <input
      class="destination-picker"
      type="text"
      placeholder="LOCATION"
      v-model="filterBy.location"
    />

    <section class="date-picker-container flex">
      <el-date-picker
        clear-icon
        v-model="filterBy.checkIn"
        prefix-icon="none"
        type="date"
        placeholder="CHECK IN"
      ></el-date-picker>

      <el-date-picker
        clear-icon
        v-model="filterBy.checkOut"
        prefix-icon="none"
        type="date"
        placeholder="CHECK OUT"
      ></el-date-picker>
    </section>

    <section class="guest-number-container">
      <button @click="isShowInputs = !isShowInputs">guests {{getGuestNum}}</button>
      <div class="guests-inputs-container" v-if="isShowInputs">
        <div class="input-div flex align-center space-between">
          <p>ADULTS</p>
          <el-input-number v-model="filterBy.adultNumber" placeholder="ADULTS" :min="1" :max="10"></el-input-number>
        </div>
        <div class="input-div flex align-center space-between">
          <p>CHILDREN</p>
          <el-input-number
            v-model="filterBy.childrenNumber"
            placeholder="CHILDREN"
            :min="1"
            :max="10"
          ></el-input-number>
        </div>
      </div>
    </section>

    <el-button @click="search" class="search-btn">
      <svg
        style="fill:none;height:14px;width:14px;stroke:currentColor;stroke-width:4;overflow:visible"
        aria-hidden="true"
        role="presentation"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
          />
        </g>
      </svg>

      <span>Search</span>
    </el-button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      isShowInputs: false,
      filterBy: {
        location: "",
        checkIn: "",
        checkOut: "",
        adultNumber: "",
        childrenNumber: "",
        rating: "",
        type: "",
      },
    };
  },
  methods: {
    search() {
      //  this.router.push('/app');
      console.log("search!!!!!!!");
    },
    setFilter() {
      //  console.log("filterBy", this.filterBy);
      this.$emit("setFilter", this.filterBy);
    },
  },
  computed: {
    getGuestNum() {
      let guestNumber = this.adultNumber + this.childrenNumber;
      if ((guestNumber = "")) return 0;
      else return guestNumber;
    },
  },
};
</script>