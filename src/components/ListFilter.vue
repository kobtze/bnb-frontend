<template>
  <section class="list-filter">

   
<form class="flex" @keyup.enter="search">

      <input class="destination-picker" placeholder="LOCATION"  v-model="filterBy.location" type="search">

      <button @click="isShowDates = !isShowDates">CHECK IN</button>
      <button @click="isShowDates = !isShowDates">CHECK OUT</button>

    <section class="date-picker-container flex">
      <el-date-picker clear-icon  v-model="filterBy.checkIn" prefix-icon="none" type="date" placeholder="CHECK IN"></el-date-picker>

      <el-date-picker clear-icon v-model="filterBy.checkOut" prefix-icon="none" type="date" placeholder="CHECK OUT"></el-date-picker>
    </section>
      

    <section class="guest-number-container flex">
      <el-select  v-model="filterBy.adultNumber" placeholder="ADULTS">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <el-select v-model="filterBy.childrenNumber" placeholder="CHILDREN">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </section>

    <el-button @click="setFilter" class="search-btn">
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
  </section>
</template>
<script>
export default {
  data() {
    return {
      filterBy: {
        location: "",
        checkIn: "",
        checkOut: "",
        adultNumber: "",
        childrenNumber: ""
      },
      options: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        }
      ]
    };
  },
 
  methods: {
    search() {
       this.router.push('/app');
   
    },
    setFilter() {
    //  console.log("filterBy", this.filterBy);
      this.$emit("setFilter", this.filterBy);
    }
  }
};
</script>