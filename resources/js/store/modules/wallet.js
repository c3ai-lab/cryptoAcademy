const state = {
  walletsymbol: [],
};

const getters = {
  walletsymbol: (state) => () =>
    state.walletsymbol
};
const actions = {
  walletsymbol({ commit, rootGetters }) {
    fetch(`${location.origin}/api/user/wallet`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${rootGetters['user/accessToken']()}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        data
        // commit("walletsymbol", data)
        // console.log(data)
      );
  }
};

const mutations = {
  walletsymbol(state, walletsymbol) {
    console.log(state.walletsymbol);
    state.walletsymbol = walletsymbol;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
