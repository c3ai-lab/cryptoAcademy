const state = {
  leaderboard: [],
};

const getters = {
  data: (state) => () => state.leaderboard,
};

const actions = {
  async fetchHour({commit, rootGetters}) {
    const response = await fetch(`${location.origin}/api/leaderboard/hour?limit=20`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setLeaderboard", data);
    }

    return false;
  }, async fetchDay({commit, rootGetters}) {
    const response = await fetch(`${location.origin}/api/leaderboard/day?limit=20`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setLeaderboard", data);
    }

    return false;
  }, async fetchWeek({commit, rootGetters}) {
    const response = await fetch(`${location.origin}/api/leaderboard/week?limit=20`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setLeaderboard", data);
    }

    return false;
  }, async fetchYear({commit, rootGetters}) {
    const response = await fetch(`${location.origin}/api/leaderboard/year?limit=20`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setLeaderboard", data);
    }

    return false;
  }, async fetchAll({commit, rootGetters}) {
    const response = await fetch(`${location.origin}/api/leaderboard/all?limit=20`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setLeaderboard", data);
    }

    return false;
  },

};

const mutations = {
  setLeaderboard(state, leaderboard) {
    state.leaderboard = leaderboard;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
