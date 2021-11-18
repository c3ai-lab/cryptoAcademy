import Vue from 'vue';
import VueRouter from 'vue-router';

import MainView from "./views/MainView.vue";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import TradingView from "./views/TradingView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
        },
        {
            path: '/trading',
            name: 'trading',
            component: TradingView,
        },
    ]
});

export default router;
