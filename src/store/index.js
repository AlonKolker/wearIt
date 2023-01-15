import { createStore } from 'vuex'
import { shopStore } from './modules/shop.store'

export const store = createStore({
  strict: true,
  modules: {
    shopStore
  },
})

