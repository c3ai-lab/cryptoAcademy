<template>
  <div><ResetPasswordCard />
    <div class="mt-4 text-center">
      <p>
        {{ $t("auth.remember_password") }}
        <router-link to="login" class="fw-medium text-primary">
          {{ $t("auth.login_now") }}
        </router-link>
      </p>
      <Copyright />
    </div></div>
</template>

      
<script>

import ResetPasswordCard from "../components/ResetPasswordCard.vue";
import Copyright from "../components/Copyright.vue";
export default {
  name: "ResetPasswordView",
  components: {
    ResetPasswordCard,
    Copyright,
  },
};
</script>