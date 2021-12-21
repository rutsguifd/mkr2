<template>
  <h1>FAVORITE TRIPS</h1>
  <div class="fav">
    <div>Start Point: {{ trip.tripStart }}</div>
    <div>End Point: {{ trip.tripEnd }}</div>
    <div>Trip Duration: {{ trip.tripDuration }}</div>
    <div>Trip Price: {{ trip.tripPrice }}</div>
    <div>Vehicle Type: {{ trip.vehicle }}</div>
  </div>
</template>

<script>
export default {
  name: "FavoriteTrips",
  props: ["trip"],
};
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 18px;
    margin-top: 10px;
  }
.fav {
  margin: 10px 20px;
  text-align: center;
  border: 3px dashed pink;
  border-radius: 10px;
}
</style>