import Vue from "vue";
import Vuex from "vuex";

import user from "./modules/user";
import coinIndex from "./modules/coinIndex";
import coinDetails from "./modules/coinDetails";
import news from "./modules/news";
import transactions from "./modules/transactions";
import wallet from "./modules/wallet";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    news,
    coinIndex,
    coinDetails,
    transactions,
    wallet,
  },
});
