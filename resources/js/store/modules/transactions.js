const state = {
  transactions: [],
};

const getters = {
  getTransactions: (state) => {
    return state.transactions
  },
  getTransactionsBySymbol: (state) => (symbol) => {
    return state.transactions.filter(t => t.api_symbol === symbol)
  },
};

const actions = {
  fetchTransactions({commit, rootGetters}) {
    fetch(`${location.origin}/api/user/transaction`, {
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
        commit('setTransactions', data);
      })
      .catch((error) => {
        console.log(error);
      });
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
  buy({commit, dispatch, rootGetters}, {symbol, quantity}) {
    fetch(`${location.origin}/api/user/transaction/buy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${rootGetters['user/accessToken']()}`,
      },
      body: JSON.stringify({
        symbol: symbol,
        quantity: quantity,
      }),
    })
      .then((response) => {
        if (response.ok === true) {
          dispatch("user/refreshUserdata", null, {root: true});
          return response.json();
        }
        return null;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  sell({commit, dispatch, rootGetters}, {symbol, quantity}) {
    fetch(`${location.origin}/api/user/transaction/sell`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${rootGetters['user/accessToken']()}`,
      },
      body: JSON.stringify({
        symbol: symbol,
        quantity: quantity,
      }),
    })
      .then((response) => {
        if (response.ok === true) {
          dispatch("user/refreshUserdata", null, {root: true});
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
