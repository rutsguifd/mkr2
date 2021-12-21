<template>
    <div>
        Station
        <trip-card v-for="(trip, ind) in AllTrips" :key="ind" :trip="trip"/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TripCard from "../components/TripCard.vue"
    export default {
        name: "StationForm",
        components: {
            TripCard
        },
        computed: mapGetters(['AllTrips'])
    }
</script>

<style lang="scss" scoped>

</style>