<template>
<section class="house-filter home-page-content">
<p>Find places to stay in Tel Aviv-Yafo on Airbnb</p>
<p>Discover entire homes and private rooms perfect for any trip.</p>
<section class="destination-picker">
  <el-input placeholder="LOCATION" v-model="destination"></el-input>
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

     <el-button class="search-btn"> 
   <svg style="fill:none;height:14px;width:14px;stroke:currentColor;stroke-width:4;overflow:visible" aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg> 
   <span> Search</span> 
       </el-button>

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