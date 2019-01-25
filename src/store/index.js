import Vue from 'vue'
import Vuex from 'vuex'

import warehouse from './modules/warehous'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    warehouse
  }
})
