<template>
    <div>
        <Header />
        <AddTrip />
        <trip-card />
        <favorite-trips v-for="(trip, ind) in AllFavoriteTrips" :key="ind" :trip="trip"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import FavoriteTrips from '../components/FavoriteTrips.vue'
import AddTrip from '../components/AddTrip.vue'
import Header from '../components/Header.vue'
import TripCard from '../components/TripCard.vue'
    export default {
        name: "StationForm",
        components: {
            TripCard,
            Header,
            AddTrip,
            FavoriteTrips
        },
        computed: mapGetters(["AllFavoriteTrips"]),
    }
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}
</style>