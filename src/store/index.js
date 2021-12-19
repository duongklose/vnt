import Vuex from "vuex";

import auth from './modules/auth'

const storeData = {
  modules: {auth}
}

const store = new Vuex.Store(storeData)

export default store
