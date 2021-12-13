<template>
<div>
    <NavBarLogin />
    <div class="container px-lg-5 mt-5">
        <div class="row">
            <div class="col-12 mt-3">
                <router-view class="my-lg-4 my-3"></router-view>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import NavBarLogin from "../components/NavBarLogin";

export default {
    components: { NavBarLogin },
    name: "LoginLayout",

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