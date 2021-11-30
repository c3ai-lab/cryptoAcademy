import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import news from "./modules/news";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    news,
  },
});
