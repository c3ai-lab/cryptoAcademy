import { debounce } from "debounce";

/**
 * Actions
 */
const fetchAll = async ({ commit, rootGetters }) => {
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
};

const state = {
  all: [],
};

const getters = {
  all: (state) => () => state.all,
  favorites: (state) => () => state.all.filter((v) => v.is_favorite),
  bySymbol: (state) => (symbol) => state.all.find((v) => v.symbol === symbol),
};

const actions = {
  fetchAll: debounce(fetchAll, 1000, true),

  addFavorite({ commit, rootGetters }, symbol) {
    fetch(`/api/user/favorites/${symbol}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    })
      .then((response) => {
        if (response.ok === true) {
          commit("setFavoriteForSymbol", { symbol, isFavorite: true });
          return response.json();
        }
        return null;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  removeFavorite({ commit, rootGetters }, symbol) {
    fetch(`/api/user/favorites/${symbol}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    })
      .then((response) => {
        if (response.ok === true) {
          commit("setFavoriteForSymbol", { symbol, isFavorite: false });
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
  setSymbols(state, symbols) {
    state.all = symbols;
  },

  setFavoriteForSymbol(state, { symbol, isFavorite }) {
    state.all.find((x) => x.symbol === symbol).is_favorite = isFavorite;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
