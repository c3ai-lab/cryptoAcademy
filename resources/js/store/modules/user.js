const state = () => {
  let state = {
    user: null,
    accessToken: null,
  };

  const data = localStorage.getItem("user");
  if (data !== null) {
    state = JSON.parse(data);
  }

  return state;
};

const getters = {
  current: (state) => () => state.user,
  accessToken: (state) => () => state.accessToken,
};

const actions = {
  login({ commit, dispatch }, data) {
    return new Promise((resolve, reject) => {
      fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      })
        .then((response) => {
          if (response.ok === true) {
            return response.json();
          }
          return null;
        })
        .then((data) => {
          if (data === null) {
            reject();
          } else {
            commit("setUser", data.user);
            commit("setAccessToken", data.access_token);
            dispatch("save");
            resolve();
          }
        });
    });
  },

  register({ commit }, data) {
    return new Promise((resolve, reject) => {
      fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          name: data.username,
          password: data.password,
          password_confirmation: data.password_confirmation,
        }),
      })
        .then((response) => {
          if (response.status === 201) {
            return response.json();
          } else {
            return null;
          }
        })
        .then((data) => {
          if (data === null) {
            reject();
          } else {
            commit("setUser", data.user);
            resolve();
          }
        });
    });
  },

  save({ state }) {
    localStorage.setItem("user", JSON.stringify(state));
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
