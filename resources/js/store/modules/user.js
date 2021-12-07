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
  accessToken: (state) => () =>
    state.accessToken !== null &&
    state.accessToken.expiresAt > new Date().getTime()
      ? state.accessToken.token
      : null,
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
            commit("setAccessToken", {
              token: data.access_token,
              expiresIn: data.expires_in,
            });
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

  logout({ commit, dispatch, rootGetters }, callback) {
    fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    }).then((response) => {
      if (response.ok === true) {
        commit("clear");
        dispatch("save");
        callback();
      }
    });
  },

  save({ state }) {
    localStorage.setItem("user", JSON.stringify(state));
  },
};

const mutations = {
  clear(state) {
    state.user = null;
    state.accessToken = null;
  },
  setUser(state, user) {
    state.user = user;
  },
  setAccessToken(state, { token, expiresIn }) {
    state.accessToken = {
      token: token,
      expiresAt: new Date().getTime() + expiresIn * 1000,
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
