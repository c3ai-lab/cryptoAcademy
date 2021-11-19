<template>
  <div>
    <LoginCard />
    <div class="mt-4 text-center">
      <p>
        {{ $t("auth.no_account") }}
        <router-link to="register" class="fw-medium text-primary">
          {{ $t("auth.register_now") }}
        </router-link>
      </p>
      <Copyright />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import LoginCard from "../components/LoginCard.vue";
import Copyright from "../components/Copyright.vue";

export default Vue.extend({
  name: "LoginView",
  components: {
    LoginCard,
    Copyright,
  },
});
</script>