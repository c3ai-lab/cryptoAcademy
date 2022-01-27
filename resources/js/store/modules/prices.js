import { debounce } from "debounce";

/**
 * Actions
 */
const fetchAll = async ({ commit, rootGetters }) => {
  const response = await fetch(`${location.origin}/api/prices`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
    },
  });

  if (response.ok === true) {
    const data = await response.json();
    commit("setSimplePrices", data);
    return true;
  }

  return false;
};

const fetchDetailedForSymbol = async ({ commit, rootGetters }, symbol) => {
  const response = await fetch(`${location.origin}/api/prices/${symbol}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
    },
  });

  if (response.ok === true) {
    const data = await response.json();
    commit("setDetailedPrices", data);
    return true;
  }

  return false;
};

/**
 * Store
 */
const state = {
  simplePrices: {},
  detailedPrices: {},
};

const getters = {
  all: (state) => () => state.simplePrices,
  bySymbol: (state) => (symbol) => state.simplePrices[symbol],

  detailed: (state) => () => state.detailedPrices,
  detailedByResolution: (state) => (resolution) =>
    state.detailedPrices[resolution],
};

const actions = {
  fetchAll: debounce(fetchAll, 1000, true),
  fetchDetailedForSymbol: fetchDetailedForSymbol,
};

const mutations = {
  setSimplePrices(state, simplePrices) {
    state.simplePrices = simplePrices;
  },

  setDetailedPrices(state, detailedPrices) {
    state.detailedPrices = detailedPrices;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
