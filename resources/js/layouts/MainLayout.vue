<template>
  <div>
    <NavBar />
    <router-view class="my-lg-4 my-3"></router-view>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
    components: { NavBar },
    name: "MainLayout",
    mounted() {
      this.$store.dispatch('transactions/fetchReturns');
    }
}
</script>

<style scoped>
div.container {
  border-radius: 0.4rem;
}
</style>


<style>
.card-body {
  padding: 1rem;
}
</style>
