import Vuex from "vuex";

import auth from './modules/auth'
import admin from './modules/admin'
import home from './modules/home'

const storeData = {
  modules: { auth, admin, home }
}

const store = new Vuex.Store(storeData)

export default store
