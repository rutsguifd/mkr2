<template>
  <div class="card">
    <div>Start Point: {{ trip.tripStart }}</div>
    <div>End Point: {{ trip.tripEnd }}</div>
    <div>Trip Duration: {{ trip.tripDuration }}</div>
    <div>Trip Price: {{ trip.tripPrice }}</div>
    <div>Vehicle Type: {{ trip.vehicle }}</div>
    <button @click="del">Delete Trip</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TripCard",
  props: ["trip"],
  methods: {
    ...mapMutations(["deleteTrip"]),
    del() {
        this.deleteTrip(this.trip.id)
    },
  },
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