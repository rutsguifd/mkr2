<template>
    <div>
        <Header />
        <trip-card v-for="(trip, ind) in AllTrips" :key="ind" :trip="trip"/>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from '../components/Header.vue'
import TripCard from "../components/TripCard.vue"
    export default {
        name: "StationForm",
        components: {
            TripCard,
            Header
        },
        computed: mapGetters(['AllTrips'])
    }
</script>

<style lang="scss" scoped>

</style>