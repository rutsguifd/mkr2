<template>
  <div>
    <Header />
    <AddTrip />
    <div>
      <label>
        Search by Start Point:
        <input type="text" v-model="search" />
        <button @click="srch">search</button>
      </label>
    </div>
    <trip-card v-for="(trip, ind) in AllTrips" :key="ind" :trip="trip" />
    <hr />
    <favorite-trips
      v-for="trip in AllFavoriteTrips"
      :key="trip.id"
      :trip="trip"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import FavoriteTrips from "../components/FavoriteTrips.vue";
import AddTrip from "../components/AddTrip.vue";
import Header from "../components/Header.vue";
import TripCard from "../components/TripCard.vue";
export default {
  name: "StationForm",
  components: {
    TripCard,
    Header,
    AddTrip,
    FavoriteTrips,
  },
  data() {
      return {
          search: ""
      }
  },
  computed: {
    ...mapGetters(["AllFavoriteTrips"]),
    ...mapGetters(["AllTrips"]),
  },
  methods: {
      ...mapActions(["filter"]),
          ...mapMutations(["searchTitle"]),
      srch() {
          this.searchTitle(this.search)
      }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}
</style>