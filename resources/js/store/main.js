import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import coinDetails from "./modules/coinDetails";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    coinDetails,
  },
});
