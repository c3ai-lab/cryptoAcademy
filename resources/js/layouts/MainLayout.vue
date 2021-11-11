<template>
    <div class="main-layout">
        <router-view></router-view>
    </div>
</template>

<style lang="sass" scoped>
    .main-layout {
        margin: 2rem auto;
        width: 75vw;
    }
</style>

<script>
export default {
    name: "MainLayout",
}
</script>