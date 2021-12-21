<template>
    <div>
        Station
        <trip-card />
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