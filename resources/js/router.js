import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "./store/main";

import { SESSION_REFRESH_AFTER_MINUTES } from "./constants";

import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import TradingIndexView from "./views/TradingIndexView.vue";
import TradingShowView from "./views/TradingShowView.vue";
import DashboardView from "./views/DashboardView.vue";
import ProfileView from "./views/ProfileView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/trading',
      name: 'trading',
      component: TradingIndexView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/trading/:symbol',
      name: 'trading.show',
      component: TradingShowView,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const sessionExpiresAt = store.getters["user/sessionExpiresAt"]();
  if (
    sessionExpiresAt <
    new Date().getTime() + SESSION_REFRESH_AFTER_MINUTES * 60 * 1000
  ) {
    store.dispatch("user/refreshSession");
  }

  const accessToken = store.getters["user/accessToken"]();
  if (to.meta.requiresAuth === true && accessToken === null) {
    // store original target and redirect user to it after login / registration
    next({ name: "login" });
  } else if (to.meta.requiresAuth === false && accessToken !== null) {
    next({ name: "dashboard" });
  } else {
    next();
  }
});

export default router;
