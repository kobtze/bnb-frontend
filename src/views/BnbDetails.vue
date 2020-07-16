<template>
  <div v-if="houseToShow"  class="house-details">
    <h1>House Details:</h1>
    <p>ID: {{houseToShow._id}}</P>
    <p>Name: {{houseToShow.name}}</P>
    <p>Price: {{houseToShow.price}}</P>
    <p>Type: {{houseToShow.type}}</P>
    <p>description: {{houseToShow.description}}</P>
    <p>capacity: {{houseToShow.capacity}}</P>
    
  </div>
</template>

<script>

import {houseService} from '../services/house.service.js'

export default {
    data(){
        return {
            houseToShow: null
        }
    },
    components: {

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
