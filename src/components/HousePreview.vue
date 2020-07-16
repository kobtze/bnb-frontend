<template>
  <section>
    <router-link :to="{path: `/details/${house._id}`}">
      <img :src="house.mainImgUrl" alt />
      <p>⭐ {{house.scores.rating}}</p>
      <p>{{house.type}}</p>
      <p>{{getGuests}}</p>
      <p>{{house.name}}</p>
      <p>{{house.price}} / night</p>
      <p>{{house.host.name}} </p>
      <img :src="house.host.imgUrl" alt="">

    </router-link>
  </section>
</template>

<script>
export default {
  props: ["house"],

  computed: {
    getGuests(){
      const guestNum = this.house.capacity;
      if (guestNum > 1) return `${guestNum} guests`;
      else return `1 guest`;
    }
  }
};
</script>

<style>
a{
  text-decoration: none;
}
</style>