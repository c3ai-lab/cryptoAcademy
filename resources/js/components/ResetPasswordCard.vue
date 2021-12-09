<template>
  <div class="main">
    <div class="card overflow-hidden">
      <div class="bg-soft bg-primary">
        <div class="row">
          <div class="col-12">
            <div class="text-primary p-4">
              <h2 class="text-primary">{{ $t("auth.reset_password") }}</h2>
              <h5 class="text-primary">{{ $t("auth.mail_for_password") }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body pt-1 row justify-content-center">
        <div class="p-1 col-lg-6">
          <b-alert
            v-model="registerFailed"
            variant="danger"
            class="mt-3"
            dismissible
          >
            {{ $t("auth.mail_failed") }}
          </b-alert>
          <b-form class="p-2" v-on:submit.prevent>
            <slot />
            <b-form-group
              id="input-group-1"
              :label="$t('auth.email')"
              label-for="input-1"
              class="mb-3"
            >
              <b-form-input
                id="input-1"
                name="email"
                v-model="email"
                type="text"
                :placeholder="$t('auth.enter_email')"
              ></b-form-input>
            </b-form-group>

            
            <div class="mt-3 d-grid">
              <b-button
                type="submit"
                variant="primary"
                class="btn-block"
                @click="reset_password()"
              >
                {{ $t("auth.reset_passoword_now") }}
              </b-button>
            </div>
            
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ResetPasswordCard",

  data: function () {
    return {
      email: "",

      registerFailed: null,
    };
  },

  methods: {
    reset_password: function () {
      this.$store
        .dispatch("user/password/reset", {
          email: this.email
        })
        .then(() => this.$router.push({ name: "login" }))
       
    },
  },
});
</script>
