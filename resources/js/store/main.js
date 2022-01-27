import Vue from "vue";
import Vuex from "vuex";

import coins from "./modules/coins";
import leaderboard from "./modules/leaderboard";
import news from "./modules/news";
import prices from "./modules/prices";
import transactions from "./modules/transactions";
import user from "./modules/user";
import wallets from "./modules/wallets";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    coins,
    leaderboard,
    news,
    prices,
    transactions,
    user,
    wallets,
  },
});
