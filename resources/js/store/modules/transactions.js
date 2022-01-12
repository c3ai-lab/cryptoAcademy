const state = {
  transactions: [],
};

const getters = {
  getTransactions: (state) => {
    return state.transactions;
  },
  getTransactionsBySymbol: (state) => (symbol) => {
    return state.transactions.filter((t) => t.api_symbol === symbol);
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

  fetchReturns({ commit, rootGetters }) {
    fetch(`${location.origin}/api/user/returns/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${rootGetters['user/accessToken']()}`,
      },
    })
      .then((response) => {
        if (response.ok === true) {
          console.log(response);
          // commit('setTransactions', response.data);
          return response.json();
        }
        return null;
      })
      .catch((error) => {
        console.log(error);
      });
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
