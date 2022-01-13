const state = {
  wallets: [],
};

const getters = {
  all: (state) => () => state.wallets,

  bySymbol: (state) => (symbol) =>
    state.wallets.find((v) => v.symbol === symbol),

  totalValue: (state) => () =>
    state.wallets
      .map((v) => v.user_balance)
      .reduce((previous, current) => previous + current, 0),
};

const actions = {
  async fetchAll({ commit, rootGetters }) {
    const response = await fetch(`${location.origin}/api/user/wallet`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setWallets", data);
      return true;
    }

    return false;
  },
};

const mutations = {
  setWallets(state, wallets) {
    state.wallets = wallets;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
