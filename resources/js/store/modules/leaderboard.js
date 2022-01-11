const state = {
  leaderboardHour: [],
  leaderboardDay: [],
  leaderboardWeek: [],
  leaderboardYear: [],
  leaderboardAll: [],
};

const getters = {
  hour: (state) => () => state.leaderboardHour,
  day: (state) => () => state.leaderboardDay,
  week: (state) => () => state.leaderboardWeek,
  year: (state) => () => state.leaderboardYear,
  all: (state) => () => state.leaderboardAll,
};

const actions = {
  async fetchHour({commit, rootGetters}) {
    const response = await fetch(`${location.origin}/api/leaderboard/hour`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setLeaderboardHour", data);
    }

    return false;
  }, async fetchDay({commit, rootGetters}) {
    const response = await fetch(`${location.origin}/api/leaderboard/day`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setLeaderboardDay", data);
    }

    return false;
  }, async fetchWeek({commit, rootGetters}) {
    const response = await fetch(`${location.origin}/api/leaderboard/week`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setLeaderboardWeek", data);
    }

    return false;
  }, async fetchYear({commit, rootGetters}) {
    const response = await fetch(`${location.origin}/api/leaderboard/year`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setLeaderboardYear", data);
    }

    return false;
  }, async fetchAll({commit, rootGetters}) {
    const response = await fetch(`${location.origin}/api/leaderboard/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setLeaderboardAll", data);
    }

    return false;
  },

};

const mutations = {
  setLeaderboardHour(state, leaderboard) {
    state.leaderboardHour = leaderboard;
  },
  setLeaderboardDay(state, leaderboard) {
    state.leaderboardDay = leaderboard;
  },
  setLeaderboardWeek(state, leaderboard) {
    state.leaderboardWeek = leaderboard;
  },
  setLeaderboardYear(state, leaderboard) {
    state.leaderboardYear = leaderboard;
  },
  setLeaderboardAll(state, leaderboard) {
    state.leaderboardAll = leaderboard;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
