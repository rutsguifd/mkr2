<template>
  <div v-for="(trip, ind) in AllTrips" :key="trip.id">
    <div class="card">
      <div>Start Point: {{ trip.tripStart }}</div>
      <div>End Point: {{ trip.tripEnd }}</div>
      <div>Trip Duration: {{ trip.tripDuration }}</div>
      <div>Trip Price: {{ trip.tripPrice }}</div>
      <div>Vehicle Type: {{ trip.vehicle }}</div>
      <button @click="del(ind)">Delete Trip</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "TripCard",
  props: ["trip"],
  methods: {
    ...mapMutations(["deleteTrip"]),
    del(ind) {
      this.deleteTrip(ind);
    },
  },
  computed: mapGetters(["AllTrips"]),
};
</script>

<style lang="scss" scoped>
.card {
  text-align: center;
  margin: 10px 20px;
  border: 3px dashed pink;
  border-radius: 10px;
  div {
    margin: 5px 0px;
  }
}
</style>