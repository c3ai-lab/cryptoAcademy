import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "./store/main";

import { SESSION_REFRESH_AFTER_MINUTES } from "./constants";

import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import TradingIndexView from "./views/TradingIndexView.vue";
import TradingShowView from "./views/TradingShowView.vue";
import TradingBuyView from "./views/TradingBuyView.vue";
import ResetPasswordView from "./views/ResetPasswordView.vue";
import DashboardView from "./views/DashboardView.vue";
import AcademyView from "./views/AcademyView.vue";
import ProfileView from "./views/ProfileView.vue";
import RegisterSuccessView from "./views/RegisterSuccessView.vue";
import NewPasswordView from "./views/NewPasswordView.vue";
import DeleteAccountView from "./views/DeleteAccountView.vue";
import WalletsView from "./views/WalletsView.vue";
import LeaderboardView from "./views/LeaderboardView.vue";
import LandingpageView from "./views/LandingPageView.vue";

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
      path: "/register-success",
      name: "register-success",
      component: RegisterSuccessView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/leaderboard",
      name: "leaderboard",
      component: LeaderboardView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/wallets",
      name: "wallets",
      component: WalletsView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/reset-password",
      name: "reset-password",
      component: ResetPasswordView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/new-password",
      name: "new-password",
      component: NewPasswordView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/delete-account",
      name: "delete-account",
      component: DeleteAccountView,
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
      path: "/academy/:target?",
      name: "academy",
      component: AcademyView,
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
      path: "/trading",
      name: "trading",
      component: TradingIndexView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/trading/:symbol",
      name: "trading.show",
      component: TradingShowView,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/trading/:symbol/buy",
      name: "trading.buy",
      component: TradingBuyView,
      props: true,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/landing",
      name: "landing",
      component: LandingpageView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const sessionExpiresAt = store.getters["user/sessionExpiresAt"]();
  const refreshData = () => !["login", "register"].includes(to.name);
  const refreshToken = () =>
    sessionExpiresAt <
    new Date().getTime() + SESSION_REFRESH_AFTER_MINUTES * 60 * 1000;

  if (refreshToken() && refreshData()) {
    store.dispatch("user/refreshSession");
  }

  const accessToken = store.getters["user/accessToken"]();
  if (to.meta.requiresAuth === true && accessToken === null) {
    // store original target and redirect user to it after login / registration
    next({ name: "login" });
  } else if (to.meta.requiresAuth === false && accessToken !== null) {
    next({ name: "dashboard" });
  } else {
    if (refreshData()) store.dispatch("user/refreshUserData");
    next();
  }
});

export default router;
