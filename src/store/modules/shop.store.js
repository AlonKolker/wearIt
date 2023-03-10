import { shopService } from "../../services/shop.service"

export const shopStore = {
  state: {
    cloths: [],
    bag: [],
    bagTotalPrice: 0,
    currUser: null,
    users: [{ email: "alonkolk@gmail.com" }],
    filter: "",
  },
  getters: {
    shirts({ cloths }) {
      return cloths.filter((c) => c.category === "shirts")
    },
    pants({ cloths }) {
      return cloths.filter((c) => c.category === "pants")
    },
    shoes({ cloths }) {
      return cloths.filter((c) => c.category === "shoes")
    },
    accsesories({ cloths }) {
      return cloths.filter((c) => c.category === "accseories")
    },
    bag({ bag }) {
      return bag
    },
    totalPrice({ bagTotalPrice }) {
      return bagTotalPrice
    },
    currUser({ currUser }) {
      return currUser
    },
    users({ users }) {
      return users
    },
  },
  mutations: {
    setCloths(state, { cloths }) {
      state.cloths = cloths
    },

    updateBag(state, { item, bagTotalPrice }) {
      let bag = JSON.parse(JSON.stringify(state.bag))
      bag.push(item)
      state.bag = bag
      state.bagTotalPrice = state.bagTotalPrice + item.price
      console.log(state.balTotalPrice)
    },
    removeBagItem(state, { bagId, bagTotalPrice }) {
      let bag = JSON.parse(JSON.stringify(state.bag))
      let remvoedPrice = bag.filter((item) => item.bagId === bagId)[0].price
      state.bagTotalPrice = state.bagTotalPrice - remvoedPrice
      bag = bag.filter((item) => item.bagId !== bagId)
      state.bag = bag
    },
    setCurrUser(state, { currUser }) {
      state.currUser = currUser
      console.log(state.currUser)
    },
    verifyUser(state, { currUser }) {
      state.filter = text
    },
  },
  actions: {
    async loadClothes({ commit, state }) {
      try {
        const cloths = await shopService.query()
        commit({ type: "setCloths", cloths })
      } catch (err) {
        console.log("loadClothes failure", err)
        throw err
      }
    },

    setBag({ commit }, { item }) {
      commit({ type: "updateBag", item })
    },
    setCurrUser({ commit }, { currUser }) {
      commit({ type: "setCurrUser", currUser })
    },

    verifyUser({ commit }, { currUser }) {
      commit({ type: "verifyUser", currUser })
    },
    removeBagItem({ commit }, { bagId }) {
      commit({ type: "removeBagItem", bagId })
    },
  },
}
