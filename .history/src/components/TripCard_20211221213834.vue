<template>
  <div v-for="(trip, ind) in AllTrips" :key="trip.id">
    <div class="card">
      <div>Start Point: {{ trip.tripStart }}</div>
      <div>End Point: {{ trip.tripEnd }}</div>
      <div>Trip Duration: {{ trip.tripDuration }}</div>
      <div>Trip Price: {{ trip.tripPrice }}</div>
      <div>Vehicle Type: {{ trip.vehicle }}</div>
      <button @click="del(ind)">Delete Trip</button>
      <button @click="favorite">Add To Favorites</button>
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
    ...mapMutations(["addToFavorites"]),
    del(ind) {
      this.deleteTrip(ind);
    },
    favorite() {
        this.addToFavorites({
        id: Date.now(),
        start: this.tripStart,
        end: this.tripEnd,
        dur: this.tripDuration,
        price: this.tripPrice,
        veh: this.vehicle,
        })
    }
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