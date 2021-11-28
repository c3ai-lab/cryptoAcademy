<template>
    <div class="container bg-white px-lg-5 my-lg-5">
        <div class="row">
            <div class="col-12">
                <router-view class="my-5"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainLayout",
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
