import Vue from "vue";
window.Vue = Vue;

/**
 * Load "Skote" template stuff
 */
import { BootstrapVue } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import tinymce from "vue-tinymce-editor";
// import vClickOutside from "v-click-outside";
// import VueMask from "v-mask";
// import Vuelidate from "vuelidate";
// import * as VueGoogleMaps from "vue2-google-maps";
// import VueSweetalert2 from "vue-sweetalert2";

Vue.use(BootstrapVue);
Vue.component("apexchart", VueApexCharts);
Vue.component("tinymce", tinymce);
// Vue.use(vClickOutside);
// Vue.use(VueMask);
// Vue.use(Vuelidate);
// Vue.use(require("vue-chartist"));
// Vue.use(VueSweetalert2);
// Vue.use(VueGoogleMaps, {
    //     load: {
        //         key: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
//         libraries: "places"
//     },
//     installComponents: true
// });

/**
 * Set development / prodution mode
 */
 Vue.prototype.$isDev = process.env.MIX_APP_ENV !== "production";
 Vue.config.devtools = Vue.prototype.$isDev;
 Vue.config.debug = Vue.prototype.$isDev;
 Vue.config.silent = !Vue.prototype.$isDev;

/**
 * Create the main app
 */
import router from "./router";
import i18n from "./i18n";
import MainLayout from "./layouts/MainLayout.vue";

const app = new Vue({
    el: "#app",
    render: h => h(MainLayout),
    router,
    i18n,
});
