import Vue from "vue";
// Use it to import all Vue file containing this folder as Components
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component("home", require("./home").default);

Vue.component("dashboard-crypto", require("./dashboard/crypto").default);
Vue.component("dashboard-saas", require("./dashboard/saas").default);
Vue.component("dashboard-blog", require("./dashboard/blog").default);

Vue.component("login", require("./account/login").default);
Vue.component("register", require("./account/register").default);
Vue.component("forgot-password", require("./account/forgot-password").default);
Vue.component("reset-password", require("./account/reset-password").default);

Vue.component("calendar", require("./calendar/calendar").default);
Vue.component("chat", require("./chat/chat").default);
Vue.component("file-manager", require("./file-manager/index").default);

Vue.component("charts-apex", require("./charts/apex").default);
Vue.component("charts-chartist", require("./charts/chartist").default);
Vue.component("charts-chartjs", require("./charts/chartjs").default);

Vue.component("contacts-grid", require("./contacts/contacts-grid").default);
Vue.component("contacts-list", require("./contacts/contacts-list").default);
Vue.component(
    "contacts-profile",
    require("./contacts/contacts-profile").default
);

Vue.component("blog-list", require("./blog/list").default);
Vue.component("blog-grid", require("./blog/grid").default);
Vue.component("blog-detail", require("./blog/detail").default);


Vue.component("crypto-wallet", require("./crypto/wallet").default);
Vue.component("crypto-buy-sell", require("./crypto/buy-sell").default);
Vue.component("crypto-lending", require("./crypto/lending").default);
Vue.component("crypto-exchange", require("./crypto/exchange").default);
Vue.component("crypto-orders", require("./crypto/orders").default);
Vue.component(
    "crypto-kyc-application",
    require("./crypto/kyc-application").default
);
Vue.component("crypto-ico-landing", require("./crypto/ico-landing").default);

Vue.component("ecommerce-products", require("./ecommerce/products").default);
Vue.component(
    "ecommerce-product-detail",
    require("./ecommerce/product-detail").default
);
Vue.component("ecommerce-orders", require("./ecommerce/orders").default);
Vue.component("ecommerce-customers", require("./ecommerce/customers").default);
Vue.component("ecommerce-cart", require("./ecommerce/cart").default);
Vue.component("ecommerce-checkout", require("./ecommerce/checkout").default);
Vue.component("ecommerce-shops", require("./ecommerce/shops").default);
Vue.component(
    "ecommerce-add-product",
    require("./ecommerce/add-product").default
);

Vue.component("email-inbox", require("./email/inbox").default);
Vue.component("email-reademail", require("./email/reademail").default);
Vue.component("email-templates-basic", require("./email/templates/basic").default);
Vue.component("email-templates-alert", require("./email/templates/alert").default);
Vue.component("email-templates-billing", require("./email/templates/billing").default);

Vue.component("form-elements", require("./forms/elements").default);
Vue.component("form-layouts", require("./forms/layouts").default);
Vue.component("form-validation", require("./forms/validation").default);
Vue.component("form-advanced", require("./forms/advanced").default);
Vue.component("form-editor", require("./forms/ckeditor").default);
Vue.component("form-uploads", require("./forms/uploads").default);
Vue.component("form-repeater", require("./forms/repeater").default);
Vue.component("form-wizard", require("./forms/wizard").default);
Vue.component("form-mask", require("./forms/mask").default);

Vue.component("icons-boxicons", require("./icons/boxicons").default);
Vue.component(
    "icons-materialdesign",
    require("./icons/materialdesign").default
);
Vue.component("icons-dripicons", require("./icons/dripicons").default);
Vue.component("icons-fontawesome", require("./icons/fontawesome").default);

Vue.component("invoices-list", require("./invoices/list").default);
Vue.component("invoices-detail", require("./invoices/detail").default);

Vue.component("layout-horizontal", require("./layout/horizontal").default);

Vue.component("maps-google", require("./maps/google").default);
Vue.component("maps-leaflet", require("./maps/leaflet/index").default);

Vue.component("projects-grid", require("./projects/projects-grid").default);
Vue.component("projects-list", require("./projects/projects-list").default);
Vue.component("projects-overview", require("./projects/overview").default);
Vue.component("projects-create", require("./projects/create").default);

Vue.component("auth-login-1", require("./sample-pages/login-sample").default);
Vue.component("auth-login-2", require("./sample-pages/login-2").default);
Vue.component("auth-register-1",require("./sample-pages/register-sample").default);
Vue.component("auth-register-2",require("./sample-pages/register-2").default);
Vue.component("auth-recoverpw",require("./sample-pages/recoverpw-sample").default);
Vue.component("auth-recoverpwd-2",require("./sample-pages/recoverpwd-2").default);
Vue.component("auth-lock-screen", require("./sample-pages/lockscreen").default);
Vue.component("auth-lock-screen-2", require("./sample-pages/lockscreen-2").default);
Vue.component("auth-confirm-mail", require("./sample-pages/confirm-mail").default);
Vue.component("auth-confirm-mail-2", require("./sample-pages/confirm-mail-2").default);
Vue.component("auth-email-verification", require("./sample-pages/email-verification").default);
Vue.component("auth-email-verification-2", require("./sample-pages/email-verification-2").default);
Vue.component("auth-two-step-verification", require("./sample-pages/two-step-verification").default);
Vue.component("auth-two-step-verification-2", require("./sample-pages/two-step-verification-2").default);

Vue.component("tables-basic", require("./tables/basictable").default);
Vue.component("tables-advanced", require("./tables/advancedtable").default);

Vue.component("tasks-list", require("./tasks/task-list").default);
Vue.component("tasks-kanban", require("./tasks/kanbanboard").default);
Vue.component("tasks-create", require("./tasks/task-create").default);

Vue.component("ui-alerts", require("./ui/alerts").default);
Vue.component("ui-buttons", require("./ui/buttons").default);
Vue.component("ui-cards", require("./ui/cards").default);
Vue.component("ui-carousel", require("./ui/carousel").default);
Vue.component("ui-dropdowns", require("./ui/dropdowns").default);
Vue.component("ui-grid", require("./ui/grid").default);
Vue.component("ui-images", require("./ui/images").default);
Vue.component("ui-modals", require("./ui/modals").default);
Vue.component("ui-rangeslider", require("./ui/rangeslider").default);
Vue.component("ui-progressbars", require("./ui/progressbars").default);
Vue.component("ui-sweet-alert", require("./ui/sweet-alert").default);
Vue.component("ui-tabs-accordions", require("./ui/tabs-accordions").default);
Vue.component("ui-typography", require("./ui/typography").default);
Vue.component("ui-video", require("./ui/video").default);
Vue.component("ui-general", require("./ui/general").default);
Vue.component("ui-colors", require("./ui/colors").default);
Vue.component("ui-lightbox", require("./ui/lightbox").default);
Vue.component("ui-image-cropper", require("./ui/cropper").default);
Vue.component("ui-drawer", require("./ui/drawer").default);

Vue.component("pages-starter", require("./utility/starter").default);
Vue.component("pages-maintenance", require("./utility/maintenance").default);
Vue.component("pages-coming-soon", require("./utility/coming-soon").default);
Vue.component("pages-timeline", require("./utility/timeline").default);
Vue.component("pages-faqs", require("./utility/faqs").default);
Vue.component("pages-pricing", require("./utility/pricing").default);
Vue.component("pages-404", require("./utility/404").default);
Vue.component("pages-500", require("./utility/500").default);
