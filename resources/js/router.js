import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "./store/main";

import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import TradingView from "./views/TradingView.vue";
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
      component: TradingView,
    },
  ],
});

router.beforeEach((to, from, next) => {
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
