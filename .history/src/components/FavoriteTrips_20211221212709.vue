<template>
  <div v-for="(trip) in AllFavoriteTrips" :key="trip.id">
    FAVORITE TRIPS
    <div>Start Point: {{ trip.start }}</div>
    <div>End Point: {{ trip.end }}</div>
    <div>Trip Duration: {{ trip.dur }}</div>
    <div>Trip Price: {{ trip.price }}</div>
    <div>Vehicle Type: {{ trip.veh }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FavoriteTrips",
  props: ["trip"],
  computed: mapGetters(["AllFavoriteTrips"]),
};
</script>

<style lang="scss" scoped>
</style>