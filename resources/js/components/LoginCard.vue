<template>
  <div class="main">
    <div class="card overflow-hidden">
      <div class="bg-soft bg-primary">
        <div class="row">
          <div class="col-12">
            <div class="text-primary p-4">
              <h2 class="text-primary">{{ $t("auth.welcome_back") }}</h2>
              <h5 class="text-primary">{{ $t("auth.login_to_continue") }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body pt-1 row justify-content-center">
        <div class="p-1 col-lg-8 col-xl-6">
          <b-alert
            v-model="loginFailed"
            variant="danger"
            class="mt-3"
            dismissible
          >
            {{ $t("auth.login_failed") }}
          </b-alert>
          <b-form class="p-2" v-on:submit.prevent>
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
              <b-form-invalid-feedback id="input-1-live-feedback">
                {{ $t("auth.invalid_email") }}
              </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              :label="$t('auth.password')"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-input
                id="input-2"
                v-model="password"
                name="password"
                type="password"
                :state="passwordState"
                :placeholder="$t('auth.enter_password')"
              />
              <b-form-invalid-feedback id="input-2-live-feedback">
                {{ $t("auth.invalid_password") }}
              </b-form-invalid-feedback>
            </b-form-group>
            <div class="mt-3 d-grid">
              <b-button
                type="submit"
                variant="primary"
                class="btn-block"
                @click="login()"
              >
                {{ $t("auth.login_now") }}
              </b-button>
            </div>
            <!---
            <div class="mt-4 text-center">
              <h5 class="font-size-14 mb-3">{{ $t("auth.login_with") }}</h5>

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
            <div class="mt-4 text-center">
              <router-link to="reset-password" class="text-muted">
                <i class="mdi mdi-lock mr-1"></i>
                {{ $t("auth.forgot_password") }}
              </router-link>
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
  name: "LoginCard",

  data: function () {
    return {
      email: "",
      password: "",

      loginFailed: null,
      emailState: null,
      passwordState: null,
    };
  },

  methods: {
    async login() {
      const response = await this.$store.dispatch("user/login", {
        email: this.email,
        password: this.password,
      });

      if (response.success === true) {
        this.$router.push({ name: "dashboard" });
      } else if (
        response.emailError === null &&
        response.passwordError === null
      ) {
        this.loginFailed = true;
        this.emailState = null;
        this.passwordState = null;
      } else {
        this.loginFailed = false;
        this.emailState = response.emailError === null;
        this.passwordState = response.passwordError === null;
      }
    },
  },
});
</script>
