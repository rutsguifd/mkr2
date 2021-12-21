import { createStore } from 'vuex'

export default createStore({
  state: {
    tripInfo: [
      {
        id: 1,
        tripStart: "Uzh",
        tripEnd: "Muk",
        tripDuration: "1 hour",
        tripPrice: "500",
        vehicle: "Bus"
      },
      {
        id: 2,
        tripStart: "Kiev",
        tripEnd: "Muk",
        tripDuration: "2 hours",
        tripPrice: "1000",
        vehicle: "Train"
      },
      {
        id: 3,
        tripStart: "Lviv",
        tripEnd: "Uzh",
        tripDuration: "1.5 hours",
        tripPrice: "500",
        vehicle: "Bus"
      }
    ],
    favoriteTrips: [],
    searchT: ""
  },
  mutations: {
    addTrip(state, trip) {
      state.tripInfo.push({
        tripStart: trip.start,
        tripEnd: trip.end,
        tripDuration: trip.dur,
        tripPrice: trip.price,
        vehicle: trip.veh
      })
    },
    deleteTrip(state, ind) {
      state.tripInfo.splice(ind, 1)
    },
    updateFavorites(state, fav) {
      state.favoriteTrips.push(fav)
      console.log(state.favoriteTrips)
    },
    updateTripInfo(state, list) {
      state.tripInfo = list
    },
    searchTitle(state, search) {
      state.searchT = search
    }
  },
  actions: {
    addToFavorites(context, trip) {
      let fav = {
        id: trip.id,
        tripStart: trip.start,
        tripEnd: trip.end,
        tripDuration: trip.dur,
        tripPrice: trip.price,
        vehicle: trip.veh
      }
      context.commit("updateFavorites", fav)
      //console.log(context.state.favoriteTrips)
    },
    filter(context, search) {
      let list = context.state.tripInfo;
      if (search)
        list = context.state.tripInfo.filter((x) =>
          x.tripStart.startsWith(search)
        );
      context.commit("updateTripInfo", list)
      console.log(list)
    },
  },
  getters: {
    AllTrips(state) {
      return state.tripInfo
    },
    AllFavoriteTrips(state) {
      return state.favoriteTrips
    }
  }
})
