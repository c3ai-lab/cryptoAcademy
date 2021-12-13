<template>
  <div class="card">
    <div class="card-body">
      <div class="mt-4 text-center">
        <p>
          {{ $t("auth.delete_account") }}
        </p>
          <div class="my-3 d-grid">
              <router-link to="register" class="fw-medium text-primary">
              <b-button
                variant="primary"
                class="btn-block"
              >
                {{ $t("auth.register_now") }}
              </b-button>
            
          </router-link>

      </div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteAccountView",
};
</script>