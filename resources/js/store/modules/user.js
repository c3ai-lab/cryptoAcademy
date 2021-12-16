const state = () => {
  let state = {
    user: null,
    accessToken: null,
  };

  const user = localStorage.getItem("user");
  if (user !== null) {
    state.user = JSON.parse(user);
  }

  const accessToken = localStorage.getItem("accessToken");
  if (accessToken !== null) {
    state.accessToken = JSON.parse(accessToken);
  }

  return state;
};

const processUserResponse = ({
  response,
  commit,
  dispatch,
  resolve,
  reject,
}) => {
  response
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
};

const getters = {
  accessToken: (state) => () =>
    state.accessToken !== null &&
    state.accessToken.expiresAt > new Date().getTime()
      ? state.accessToken.token
      : null,
  sessionExpiresAt: (state) => () =>
    state.accessToken === null ? null : state.accessToken.expiresAt,
  getUser: (state) => () => state.user,
};

const actions = {
  login({ commit, dispatch }, data) {
    return new Promise((resolve, reject) => {
      const response = fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      processUserResponse({
        response,
        commit,
        dispatch,
        resolve,
        reject,
      });
    });
  },

  refreshSession({ commit, dispatch, getters }) {
    return new Promise((resolve, reject) => {
      const response = fetch("/api/auth/refresh", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getters["accessToken"]()}`,
        },
      });

      processUserResponse({
        response,
        commit,
        dispatch,
        resolve,
        reject,
      });
    });
  },

  register({ commit }, data) {
    return new Promise((resolve, reject) => {
      fetch("/api/user", {
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
            console.log(data.user);
            commit("setUser", data.user);
            resolve();
          }
        });
    });
  },

  resetPassword({}, email) {
    return new Promise((resolve, reject) => {
      fetch("/api/user/password/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }).then((response) => (response.ok === true ? resolve() : reject()));
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
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("accessToken", JSON.stringify(state.accessToken));
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
