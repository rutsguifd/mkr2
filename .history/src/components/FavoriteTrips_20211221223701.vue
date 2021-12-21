<template>
  <div class="fav" v-for="(trip) in AllFavoriteTrips" :key="trip.id">
    <h1>FAVORITE TRIPS</h1>
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
  props: ["trip"],
  computed: mapGetters(["AllFavoriteTrips"]),
};
</script>

<style lang="scss" scoped>
.fav{
    margin: 10px 20px;
    text-align: center;
    border: 3px dashed pink;
    border-radius: 10px;
    h1{
        font-size: 18px;
        margin-top: 10px;
    }
}
</style>