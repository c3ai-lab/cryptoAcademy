<template>
    <div class="bg-white">
        <div>
            <div>
                <router-view></router-view>
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
