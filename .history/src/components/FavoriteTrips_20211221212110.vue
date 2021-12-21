<template>
  <div v-for="(trip) in FavoriteTrips" :key="trip.id">
    FAVORITE TRIPS
    <div>Start Point: {{ trip.tripStart }}</div>
    <div>End Point: {{ trip.tripEnd }}</div>
    <div>Trip Duration: {{ trip.tripDuration }}</div>
    <div>Trip Price: {{ trip.tripPrice }}</div>
    <div>Vehicle Type: {{ trip.vehicle }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FavoriteTrips",
  computed: mapGetters(["FavoriteTrips"]),
  props: ["trip"],
};
</script>

<style lang="scss" scoped>
</style>