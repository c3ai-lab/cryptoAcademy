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

const getters = {
  accessToken: (state) => () =>
    state.accessToken !== null &&
    state.accessToken.expiresAt > new Date().getTime()
      ? state.accessToken.token
      : null,
  sessionExpiresAt: (state) => () =>
    state.accessToken === null ? null : state.accessToken.expiresAt,
  getUser: (state) => () => state.user,
  credit: (state) => () => state.user === null ? 0 : state.user.balance,
};

const actions = {
  async login({ commit, dispatch }, data) {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    const result = {
      success: false,
      emailError: null,
      passwordError: null,
    };

    if (response.ok === true) {
      const data = await response.json();
      commit("setUser", data.user);
      commit("setAccessToken", {
        token: data.access_token,
        expiresIn: data.expires_in,
      });
      dispatch("save");

      result.success = true;
    } else if (response.status === 422) {
      const data = await response.json();
      if (data.email != null && data.email.length > 0) {
        result.emailError = data.email[0];
      }
      if (data.password != null && data.password.length > 0) {
        result.passwordError = data.password[0];
      }
    }

    return result;
  },

  async register({ commit }, data) {
    const response = await fetch("/api/user", {
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
    });

    const result = {
      success: false,
      emailError: null,
      usernameError: null,
      passwordError: null,
    };

    if (response.status === 201) {
      const data = await response.json();
      commit("setUser", data.user);

      result.success = true;
    } else if (response.status === 400) {
      const data = await response.json();
      if (data.email != null && data.email.length > 0) {
        result.emailError = data.email[0];
      }
      if (data.name != null && data.name.length > 0) {
        result.usernameError = data.name[0];
      }
      if (data.password != null && data.password.length > 0) {
        result.passwordError = data.password[0];
      }
    }

    return result;
  },

  async refreshSession({ commit, dispatch, getters }) {
    const response = await fetch("/api/auth/refresh", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getters["accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setUser", data.user);
      commit("setAccessToken", {
        token: data.access_token,
        expiresIn: data.expires_in,
      });
      dispatch("save");
      return true;
    }
    return false;
  },

  async refreshUserData({ commit, rootGetters }) {
    const response = await fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setUser", data);
      return true;
    }
    return false;
  },

  async resetPassword({}, email) {
    const response = await fetch("/api/user/password/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    return response.ok;
  },

  async resetAccount({ dispatch, rootGetters }) {
    const response = await fetch("/api/user/resetAll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      dispatch("user/refreshUserData", null, { root: true });
      return true;
    }
    return false;
  },

  async logout({ commit, dispatch, rootGetters }) {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      commit("clear");
      dispatch("save");
      return true;
    }
    return false;
  },

  async deleteAccount({ commit, dispatch, rootGetters }) {
    const response = await fetch("/api/user", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    if (response.ok === true) {
      commit("clear");
      dispatch("save");
      return true;
    }

    return false;
  },

  async changePassword({ commit, dispatch, rootGetters }, data) {
    const response = await fetch("/api/user/password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
      body: JSON.stringify({
        password: data.oldPassword,
        new_password: data.newPassword,
        new_password_confirmation: data.newPassword2,
      }),
    });

    if (response.ok === true) return response;
  },

  async updateUserData({ commit, rootGetters }, newData) {
    const response = await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
      body: JSON.stringify(newData),
    });

    if (response.ok === true) {
      const data = await response.json();
      commit("setUser", data.user);
      return true;
    }
    return false;
  },

  async modalShown({ rootGetters }) {
    const response = await fetch("/api/user/modal-shown", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    });

    return response.ok;
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
