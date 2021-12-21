import { createStore } from 'vuex'

export default createStore({
  state: {
    tripInfo: [
      {
        tripStart: "Uzh",
        tripEnd: "Muk",
        tripDuration: "1 hour",
        tripPrice: "500",
        vehicle: "Bus"
      },
      {
        tripStart: "Kiev",
        tripEnd: "Muk",
        tripDuration: "2 hours",
        tripPrice: "1000",
        vehicle: "Train"
      },
      {
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
