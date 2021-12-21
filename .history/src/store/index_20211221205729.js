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
    ]
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
    }
  },
  actions: {
  },
  getters: {
    AllTrips(state) {
      return state.tripInfo
    }
  }
})
