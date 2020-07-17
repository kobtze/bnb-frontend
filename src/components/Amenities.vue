<template>
    <section>
        <h3>Amenities</h3>
        <ul>
            <Amenity
                v-for="amenity in amenities"
                :amenity="amenity"
                :key="amenity"
            />
        </ul>
    </section>
</template>

<script>

import Amenity from "@/components/Amenity.vue";

export default {
    name: 'Amenities',
    props: ['amenities'],
    components: {
        Amenity,
    }
}

</script>

<style scoped>
ul {
    list-style:none
}
</style>