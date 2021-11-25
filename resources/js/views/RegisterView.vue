<template>
  <div>
    <RegisterCard />
    <div class="mt-4 text-center">
      <p>
        {{ $t("auth.already_account") }}
        <router-link to="login" class="fw-medium text-primary">
          {{ $t("auth.login_now") }}
        </router-link>
      </p>
      <Copyright />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import RegisterCard from "../components/RegisterCard.vue";
import Copyright from "../components/Copyright.vue";

export default Vue.extend({
  name: "RegisterView",
  components: {
    RegisterCard,
    Copyright,
  },
});
</script>