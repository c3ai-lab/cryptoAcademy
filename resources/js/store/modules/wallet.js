const state = {
  walletsymbol: [],
};

const getters = {
  getWalletsymbol: (state) => {
    return state.walletsymbol
  }
};
const actions = {
  fetchWalletsymbol({commit, rootGetters}) {
    fetch(`${location.origin}/api/user/wallet`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${rootGetters['user/accessToken']()}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        commit("setWalletsymbol", data)
      );
  }
};

const mutations = {
  setWalletsymbol(state, walletsymbol) {
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
