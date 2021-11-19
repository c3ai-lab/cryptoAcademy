<template>
  <div class="main">
    <div class="card overflow-hidden">
      <div class="bg-soft bg-primary">
        <div class="row">
          <div class="col-12">
            <div class="text-primary p-4">
              <h5 class="text-primary">{{ $t("auth.welcome") }}</h5>
              <p>{{ $t("auth.register_for_free") }}</p>
            </div>
          </div>
          <div class="col-5 align-self-end">
            <img src="/images/profile-img.png" alt class="img-fluid" />
          </div>
        </div>
      </div>
      <div class="card-body pt-0">
        <div>
          <a href="/">
            <div class="avatar-md profile-user-wid mb-4">
              <span class="avatar-title rounded-circle bg-light">
                <img
                  src="/images/logo.svg"
                  alt
                  class="rounded-circle"
                  height="34"
                />
              </span>
            </div>
          </a>
        </div>
        <div class="p-2">
          <b-alert
            v-model="isAuthError"
            variant="danger"
            class="mt-3"
            dismissible
            >{{ authError }}</b-alert
          >
          <b-form class="p-2" :action="submitUrl" method="POST">
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

            <b-form-group
              id="input-group-2"
              :label="$t('auth.username')"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-input
                id="input-2"
                name="email"
                v-model="username"
                type="text"
                :placeholder="$t('auth.enter_username')"
              ></b-form-input>
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
                :placeholder="$t('auth.enter_password')"
              ></b-form-input>
            </b-form-group>
            <div class="mt-3 d-grid">
              <b-button type="submit" variant="primary" class="btn-block">
                {{ $t("auth.register_now") }}
              </b-button>
            </div>
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
            <div class="mt-4 text-center">
              <p class="mb-0">
                {{ $t("auth.accept_by_registration") }}
                <router-link to="terms-of-use" class="fw-medium text-primary">
                  AGBs
                </router-link>
                !
              </p>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "RegisterCard",
});
</script>

<style lang="scss" scoped>
.main {
  width: 28rem;
  margin: 5rem auto 0 auto;
}
</style>