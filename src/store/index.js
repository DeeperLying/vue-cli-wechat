import Vue from 'vue'
import Vuex from 'vuex'
import footerStatus from './modules/footer-status'
import collection from './modules/collection'

const state = {
  count: 1
}

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  modules: {
    footerStatus,
    collection
  }
})

export default store
