<template>
  <div>
    <NavBarLogin />
    <div class="container">
      <div class="row">
        <div class="col-12 offset-sm-1 col-sm-10 offset-md-2 col-md-8">
          <router-view class="my-lg-4 my-3"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarLogin from "../components/NavBarLogin";

export default {
  name: "LoginLayout",
  components: {
    NavBarLogin,
  },
};
</script>

<style scoped>
div.container {
  border-radius: 0.4rem;
}
</style>


<style>
.card-body {
  padding: 1rem 0.5rem;
}
</style>
