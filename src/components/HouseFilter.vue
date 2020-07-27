<template>
  <section :class="{ isFlat: isFilterFlatten , compact: isCompact }" class="house-filter">

    <h1>Find places to stay around the world  on Airbgc</h1>
    <p>Discover entire homes and private rooms perfect for any trip.</p>

    <form @keyup.enter="onSubmit">
      
      <section class="destination-picker">
        <el-input placeholder="LOCATION" v-model="filterBy.location" type="search"></el-input>
      </section>

      <section class="date-picker-container flex">
        <el-date-picker v-model="filterBy.checkIn" type="date" placeholder="CHECK IN"> </el-date-picker>

        <el-date-picker
          v-model="filterBy.checkOut" type="date" placeholder="CHECK OUT">  
        </el-date-picker>
      </section>

      <section class="guest-number-container flex">
        <el-select v-model="filterBy.adultNumber" placeholder="ADULTS">
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

      <el-button @click="onSubmit" class="search-btn">
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
        <span class="search">Search</span>
      </el-button>
    </form>
  </section>
</template>
<script>
export default {
  name: "HouseFilter",
  props: ["isFilterFlatten","isBnbPage"],
  
  data() {
    return {
   
      windowWidth: window.innerWidth,
      filterBy: {
        location: "",
        checkIn: "",
        checkOut: "",
        adultNumber: "",
        childrenNumber: ""
      },
      options: [
        {
          value: "0",
          label: "0"
        },
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
  created() {
    this.filterBy = this.$store.getters.filterBy;
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    //   console.log(this.isMobile)
    })
  },
  methods: {
    onSubmit() {
      this.setFilter()
      if(!this.isBnbPage)this.$router.push("/app");

    },
    setFilter() {
    //   console.log('setFilter.filterBy:',this.filterBy );
      this.$emit("setFilter", this.filterBy);
    }
  },
  computed: {
    // isMobile() {
    //   return this.windowWidth <= 768
    // },
    isCompact(){
       return this.windowWidth <= 950
    }
  }
};
</script>
