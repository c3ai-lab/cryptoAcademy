<template>
    <div class="main">
        <router-view></router-view>
    </div>
</template>

<style lang="sass" scoped>
.main {
    width: 75vw;
    margin: 2rem auto;
}
</style>

<script>
export default {
    name: "MainLayout",
}
</script>