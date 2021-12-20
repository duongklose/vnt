import Vuex from "vuex";

import auth from './modules/auth'
import admin from './modules/admin'

const storeData = {
  modules: { auth, admin }
}

const store = new Vuex.Store(storeData)

export default store
