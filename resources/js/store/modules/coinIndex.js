import { DIMENSION_MAP_LOW_RES } from "../../constants";
import { Dimension } from "../../enums";
import { MainClient } from 'binance';

const DIMENSION = Dimension.ONE_DAY;

const binanceRest = new MainClient({
  beautifyResponses: true,
});

const state = {
  all: [],
  favorites: [],
}

const getters = {
  all: (state) => () => {
    return state.all;
  },
  favorites: (state) => () => {
    return state.favorites;
  },
}

const actions = {
  fetchSymbols({ commit, rootGetters }) {
    return new Promise((resolve, reject) => {
      fetch("/api/auth/symbols", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${rootGetters['user/accessToken']()}`,
        },
      })
        .then((response) => {
          if (response.ok === true) {
            return response.json();
          }
          return null;
        })
        .then((data) => {
          if (data === null) {
            reject();
          } else {
            commit("setSymbols", data.map(
              x => ({ ...x, series: [] }) // needed for reactivity
            ));
            resolve();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  getLowResPriceData({ commit }, symbol) {
    binanceRest.getKlines({
      ...DIMENSION_MAP_LOW_RES[DIMENSION],
      symbol: symbol,
    }).then(response =>
      commit('setDataForSymbol', { symbol, data: response.map(x => [x[0], Number(x[3])]) })
    ).catch(error =>
      alert(error)
    );
  },
  fetchFavorites({ commit }) {

  },
  addFavorite({ commit }, id) {

  },
  removeFavorite({ commit }, id) {

  },
}

const mutations = {
  setSymbols(state, data) {
    state.all = data;
  },
  setDataForSymbol(state, { symbol, data }) {
    state.all.find(x => x.api_symbol === symbol)['series'] = [{ data }];
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
