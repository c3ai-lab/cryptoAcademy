import { DIMENSION_MAP_LOW_RES } from "../../constants";
import { Dimension } from "../../enums";
import { MainClient } from "binance";

const DIMENSION = Dimension.ONE_DAY;

const binanceRest = new MainClient({
  beautifyResponses: true,
});

const state = {
  all: [],
  eurUsdt: [],
};

const getters = {
  all: (state) => () => {
    return state.all;
  },
  favorites: (state) => () => {
    return state.all.filter((v) => v.is_favorite);
  },
};

const actions = {
  async fetchSymbols({ commit, dispatch, rootGetters }) {

    const response = await fetch("/api/user/favorites", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit(
        "setSymbols",
        data.map(
          (x) => ({ ...x, series: [] }) // needed for reactivity
        )
      );
    }
  },

  getLowResPriceData({ commit, state }, symbol) {
    binanceRest
      .getKlines({
        ...DIMENSION_MAP_LOW_RES[DIMENSION],
        symbol: symbol,
      })
      .then((response) =>
        commit("setDataForSymbol", {
          symbol,
          data: response.map((x, i) => [x[0], Number(x[3]) / Number(state.eurUsdt.data[i][1])]),
        })
      )
      .catch((error) => alert(error));
  },

  async getExchangeRates({ commit }) {
    return binanceRest
      .getKlines({
        ...DIMENSION_MAP_LOW_RES[DIMENSION],
        symbol: 'EURUSDT',
      })
      .then((response) =>
        commit("setExchangeRates", {
          data: response.map((x) => [x[0], Number(x[3])]),
        })
      )
      .catch((error) => alert(error));
  },

  addFavorite({ commit, rootGetters }, id) {
    fetch(`/api/user/favorites/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    })
      .then((response) => {
        if (response.ok === true) {
          commit("setFavoriteForSymbol", { id, isFavorite: true });
          return response.json();
        }
        return null;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  removeFavorite({ commit, rootGetters }, id) {
    fetch(`/api/user/favorites/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    })
      .then((response) => {
        if (response.ok === true) {
          commit("setFavoriteForSymbol", { id, isFavorite: false });
          return response.json();
        }
        return null;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  setSymbols(state, data) {
    state.all = data;
  },
  setDataForSymbol(state, { symbol, data }) {
    state.all.find((x) => x.symbol === symbol)["series"] = [{ data }];
  },
  setFavoriteForSymbol(state, { id, isFavorite }) {
    state.all.find((x) => x.id === id).is_favorite = isFavorite;
  },
  setExchangeRates(state, data) {
    state.eurUsdt = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
