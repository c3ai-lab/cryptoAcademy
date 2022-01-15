const state = {
  transactions: [],
  returnsPerSymbol: {},
  returns: [],
};

const getters = {
  getTransactions: (state) => {
    return state.transactions;
  },
  getTransactionsBySymbol: (state) => (symbol) => {
    return state.transactions.filter((t) => t.api_symbol === symbol);
  },
  getReturns: (state) => () => {
    return state.returns;
  },
  getTransactionsBySymbol: (state) => (symbol) => {
    return state.returnsPerSymbol[symbol]//.filter((t) => t.api_symbol === symbol);

  },
};

const actions = {
  async fetchTransactions({ commit, rootGetters }) {
    const response = await fetch(`${location.origin}/api/user/transaction`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setTransactions", data);
      return true;
    }
    return false;
  },

  async fetchReturns({ commit, rootGetters }) {
    const response = await fetch(`${location.origin}/api/user/returns`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${rootGetters['user/accessToken']()}`,
      },
    })

    if (response.ok === true) {
      const data = await response.json();
      commit(
        'setReturns',
        data.data
      );
      return true;
    }
    return false;
  },

  async fetchReturnsPerSymbol({ commit, rootGetters }, { symbol }) {
    const response = await fetch(`${location.origin}/api/user/returns/${symbol.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${rootGetters['user/accessToken']()}`,
      },
    })

    if (response.ok === true) {
      const data = await response.json();
      commit('setReturnsPerSymbol', { data: data.data, symbol: symbol.api_symbol});
      return true;
    }
    return false;
  },

  async buy({ dispatch, rootGetters }, { symbol, quantity }) {
    const response = await fetch(
      `${location.origin}/api/user/transaction/buy`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
        },
        body: JSON.stringify({
          symbol: symbol,
          quantity: quantity,
        }),
      }
    );

    if (response.ok === true) {
      dispatch("fetchTransactions");
      dispatch("user/refreshUserData", null, { root: true });
      dispatch("wallets/fetchAll", null, { root: true });
      dispatch("coinIndex/fetchSymbols", null, { root: true });
      return true;
    }
    return false;
  },

  async sell({ dispatch, rootGetters }, { symbol, quantity }) {
    const response = await fetch(
      `${location.origin}/api/user/transaction/sell`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
        },
        body: JSON.stringify({
          symbol: symbol,
          quantity: quantity,
        }),
      }
    );

    if (response.ok === true) {
      dispatch("fetchTransactions");
      dispatch("user/refreshUserData", null, { root: true });
      dispatch("wallets/fetchAll", null, { root: true });
      dispatch("coinIndex/fetchSymbols", null, { root: true });
      return true;
    }
    return false;
  },
};

const mutations = {
  setTransactions(state, transactions) {
    state.transactions = transactions;
  },
  setReturns(state, returns) {
    state.returns = returns;
  },
  setReturnsPerSymbol(state, { data, symbol }) {
    state.returnsPerSymbol[symbol] = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
