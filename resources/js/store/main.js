import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import coins from "./modules/coins";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    coins,
  },
});
