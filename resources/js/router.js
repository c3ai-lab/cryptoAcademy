import Vue from 'vue';
import VueRouter from 'vue-router';

import CryptoDashboard from "./views/CryptoDashboard.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'CryptoDashboard',
            component: CryptoDashboard
        },
    ]
});

export default router;
