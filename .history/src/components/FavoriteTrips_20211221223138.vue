<template>
  <div>
    FAVORITE TRIPS
    <div>Start Point: {{ trip.tripStart }}</div>
    <div>End Point: {{ trip.end }}</div>
    <div>Trip Duration: {{ trip.dur }}</div>
    <div>Trip Price: {{ trip.price }}</div>
    <div>Vehicle Type: {{ trip.veh }}</div>
  </div>
</template>

<script>
export default {
  name: "FavoriteTrips",
  props: ["trip"],
};
</script>

<style lang="scss" scoped>
</style>