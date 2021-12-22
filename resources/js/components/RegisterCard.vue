<template>
  <div class="main">
    <div class="card overflow-hidden">
      <div class="bg-soft bg-primary">
        <div class="row">
          <div class="col-12">
            <div class="text-primary p-4">
              <h2 class="text-primary">{{ $t("auth.welcome") }}</h2>
              <h5 class="text-primary">{{ $t("auth.register_for_free") }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body pt-1 row justify-content-center">
        <div class="p-1 col-lg-8 col-xl-6">
          <b-alert
            v-model="registerFailed"
            variant="danger"
            class="mt-3"
            dismissible
          >
            {{ $t("auth.register_failed") }}
          </b-alert>
          <b-form class="p-2" @submit.prevent="register">
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
                :state="emailState"
                :placeholder="$t('auth.enter_email')"
              />
              <b-form-invalid-feedback>
                {{ $t("auth.invalid_email") }}
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              :label="$t('auth.username')"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-input
                id="input-2"
                name="username"
                v-model="username"
                type="text"
                :state="usernameState"
                :placeholder="$t('auth.enter_username')"
              />
              <b-form-invalid-feedback>
                {{ $t("auth.invalid_username") }}
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              :label="$t('auth.password')"
              label-for="input-3"
              class="mb-3"
            >
              <b-form-input
                id="input-3"
                v-model="password"
                name="password"
                type="password"
                :state="passwordState"
                :placeholder="$t('auth.enter_password')"
              />
              <b-form-invalid-feedback>
                {{ $t("auth.invalid_password") }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-3" class="mt-4 text-center">
              <p class="mb-0">
                <b-form-checkbox
                  id="input-3"
                  name="terms-of-use"
                  value="accepted"
                  unchecked-value="not_accepted"
                  required
                  >&nbsp; {{ $t("auth.accept_terms_of_use") }}
                  <router-link to="terms-of-use" class="fw-medium text-primary">
                    AGBs
                  </router-link>
                  !
                </b-form-checkbox>
              </p>
            </b-form-group>
            <div class="mt-3 d-grid">
              <b-button type="submit" variant="primary" class="btn-block">
                {{ $t("auth.register_now") }}
              </b-button>
            </div>
            <!---
            <div class="mt-4 text-center">
              <h5 class="font-size-14 mb-3">{{ $t("auth.register_with") }}</h5>

              <ul class="list-inline">
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="
                      social-list-item
                      bg-primary
                      text-white
                      border-primary
                    "
                  >
                    <i class="mdi mdi-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="social-list-item bg-info text-white border-info"
                  >
                    <i class="mdi mdi-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="social-list-item bg-danger text-white border-danger"
                  >
                    <i class="mdi mdi-google"></i>
                  </a>
                </li>
              </ul>
            </div>
            --->
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "RegisterCard",

  data: function () {
    return {
      email: "",
      username: "",
      password: "",

      registerFailed: false,
      emailState: null,
      usernameState: null,
      passwordState: null,
    };
  },

  methods: {
    async register() {
      const response = await this.$store.dispatch("user/register", {
        email: this.email,
        username: this.username,
        password: this.password,
        password_confirmation: this.password,
      });

      if (response.success === true) {
        this.$router.push({ name: "register-success" });
      } else if (
        response.emailError === null &&
        response.usernameError === null &&
        response.passwordError === null
      ) {
        this.registerFailed = true;
        this.emailState = true;
        this.usernameState = true;
        this.passwordState = true;
      } else {
        this.registerFailed = false;
        this.emailState = response.emailError === null;
        this.usernameState = response.usernameError === null;
        this.passwordState = response.passwordError === null;
      }
    },
  },
});
</script>
