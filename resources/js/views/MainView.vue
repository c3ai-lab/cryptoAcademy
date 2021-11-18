<template>
  <div>
    <h1>Views</h1>
    <ul>
      <li><router-link to="login">LoginView</router-link></li>
      <li><router-link to="register">RegisterView</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MainView",
});
</script>