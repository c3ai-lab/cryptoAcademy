<template>
  <div class="card">
    <div class="card-body">
      <div class="mt-4 text-center">
        <p>
          {{ $t("auth.register_success") }}
        </p>
          <div class="my-3 d-grid">
              <router-link to="login" class="fw-medium text-primary">
              <b-button
                variant="primary"
                class="btn-block"
              >
                {{ $t("auth.login_now") }}
              </b-button>
            
          </router-link>

      </div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterSuccessView",
};
</script>