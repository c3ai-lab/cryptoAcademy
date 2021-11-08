import Vue from 'vue';
import VueRouter from 'vue-router';

import crypto from './views/dashboard/crypto.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'crypto',
            component: crypto
        },
    ]
});

export default router;
