<script>
import NavBar from "../components/nav-bar";
import SideBar from "../components/side-bar";
import RightBar from "../components/right-bar";
import Footer from "../components/footer";

export default {
    components: { NavBar, SideBar, RightBar, Footer },
    data() {
        return {
            isMenuCondensed: false
        };
    },
    created: () => {
        document.body.removeAttribute("data-layout", "horizontal");
        document.body.removeAttribute("data-topbar", "dark");
    },
    mounted() {
        const layout = JSON.parse(localStorage.getItem("layout")) || {};
        if (layout.loader == true) {
            document.getElementById("preloader").style.display = "block";
            document.getElementById("status").style.display = "block";

            setTimeout(function() {
                document.getElementById("preloader").style.display = "none";
                document.getElementById("status").style.display = "none";
            }, 2500);
        } else {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("status").style.display = "none";
        }
    },
    methods: {
        toggleMenu() {
            document.body.classList.toggle("sidebar-enable");

            if (window.screen.width >= 992) {
                // eslint-disable-next-line no-unused-vars
                document.body.classList.toggle("vertical-collpsed");
            } else {
                // eslint-disable-next-line no-unused-vars
                document.body.classList.remove("vertical-collpsed");
            }
            this.isMenuCondensed = !this.isMenuCondensed;
        },
        toggleRightSidebar() {
            document.body.classList.toggle("right-bar-enabled");
        },
        hideRightSidebar() {
            document.body.classList.remove("right-bar-enabled");
        }
    }
};
</script>

<template>
    <div>
        <div id="preloader">
            <div id="status">
                <div class="spinner-chase">
                    <div class="chase-dot"></div>
                    <div class="chase-dot"></div>
                    <div class="chase-dot"></div>
                    <div class="chase-dot"></div>
                    <div class="chase-dot"></div>
                    <div class="chase-dot"></div>
                </div>
            </div>
        </div>
        <div id="layout-wrapper">
            <NavBar />
            <SideBar :is-condensed="isMenuCondensed" />
            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="main-content">
                <div class="page-content">
                    <!-- Start Content-->
                    <div class="container-fluid">
                        <slot />
                    </div>
                </div>
                <Footer />
            </div>
            <RightBar />
        </div>
    </div>
</template>
