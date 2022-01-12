import Vue from "vue";
import Vuex from "vuex";

import coinDetails from "./modules/coinDetails";
import coinIndex from "./modules/coinIndex";
import news from "./modules/news";
import transactions from "./modules/transactions";
import user from "./modules/user";
import wallets from "./modules/wallets";
import leaderboard from "./modules/leaderboard";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    coinDetails,
    coinIndex,
    news,
    transactions,
    user,
    wallets,
    leaderboard,
  },
});
