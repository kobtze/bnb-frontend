<template>
<section>
  <h1>HouseList</h1>
    <house-preview v-for="house in houses" :key="house._id" :house="house" />
<!-- <pre>{{houses}}</pre> -->
</section>

</template>

<script>
import HousePreview from "@/components/HousePreview.vue";

export default {
    name: 'HouseList',
    props: ['houses'],
    components: {
        HousePreview,
    }
}
</script>

<style>

</style>