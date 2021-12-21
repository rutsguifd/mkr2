<template>
    <div>
        <Header />
        <AddTrip />
        <trip-card />
        <favorite-trips/>
    </div>
</template>

<script>
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