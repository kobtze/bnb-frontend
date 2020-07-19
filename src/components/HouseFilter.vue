<template>
<section class="house-filter ">
<p>Vacation rentals in Tel Aviv District</p>
<p>Find and book unique accommodations on Airbnb</p>
<section class="destination-picker">
  <el-input placeholder="Destination" v-model="destination"></el-input>
</section>

  <section class="date-picker-container flex">
        <el-date-picker  v-model="checkIn" type="date" placeholder="CHECK IN"> </el-date-picker>

        <el-date-picker  v-model="checkOut" type="date" placeholder="CHECK OUT"> </el-date-picker>
  </section>

  <section class="guest-number-container flex">
        <el-select v-model="adultNumber" placeholder="ADULTS">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>

        <el-select v-model="childrenNumber" placeholder="CHILDREN">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
  </section>

     <el-button class="search-btn">Search</el-button>

</section>
</template>
<script>
  export default {
    data() {
      return {
         options: [
        {
          value: '1',
          label: '1'
        }, {
          value: '2',
          label: '2'
        }, {
          value: '3',
          label: '3'
        }, {
          value: '4',
          label: '4'
        }, {
          value: '5',
          label: '5'
        }],
        destination:'',
        adultNumber: '',
        childrenNumber: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>