<template>
<div>
     <NavBar />
            <SideBar :is-condensed="isMenuCondensed" />
    <div class="container bg-white px-lg-5 my-lg-5">
        <div class="row">
            <div class="col-12">
                <router-view class="my-5"></router-view>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default {
    components: { NavBar, SideBar },
    name: "MainLayout",

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
    }
}
</script>

<style scoped>
    div.container 
    {
        border-radius: 0.4rem;
    }

    
</style>


<style>
    .card-body
    {
        padding: 1rem 0.5rem;
    }
</style>