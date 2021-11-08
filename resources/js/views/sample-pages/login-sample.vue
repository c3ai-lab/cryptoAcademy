<script>
/**
 * Login sample page
 */
export default {
  data() {
    return {
      email: "admin@themesbrand.com",
      password: "123456",
      tryingToLogIn: false,
      isAuthError: false,
    };
  },
  props: {
    submitUrl: {
      type: String,
      required: true,
    },
    authError: {
      type: String,
      required: false,
      default: () => null,
    },
  },
  mounted() {
    this.isAuthError = !!this.authError;
  },
};
</script>

<template>
  <div>
    <div class="account-pages my-5 pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card overflow-hidden">
              <div class="bg-soft bg-primary">
                <div class="row">
                  <div class="col-7">
                    <div class="text-primary p-4">
                      <h5 class="text-primary">Welcome Back !</h5>
                      <p>Sign in to continue to Skote.</p>
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
              label="Email"
              label-for="input-1"
              class="mb-3"
            >
              <b-form-input
                id="input-1"
                name="email"
                v-model="email"
                type="text"
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password"
              label-for="input-2"
              class="mb-3"
            >
              <b-form-input
                id="input-2"
                v-model="password"
                name="password"
                type="password"
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>
            <b-form-checkbox
              class="form-check"
              id="customControlInline"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              Remember me
            </b-form-checkbox>
            <div class="mt-3 d-grid">
              <b-button type="submit" variant="primary" class="btn-block"
                >Log In</b-button
              >
            </div>
            <div class="mt-4 text-center">
              <h5 class="font-size-14 mb-3">Sign in with</h5>

              <ul class="list-inline">
                <li class="list-inline-item">
                  <a
                    href="javascript: void(0);"
                    class="social-list-item bg-primary text-white border-primary"
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
              <a href="/reset/password" class="text-muted">
                <i class="mdi mdi-lock mr-1"></i> Forgot your password?
              </a>
            </div>
          </b-form>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center">
              <p>
                Don't have an account ?
                <a tag="a" to="/auth/register-1" class="fw-medium text-primary"
                  >Signup now</a
                >
              </p>
              <p>
                © 2020 Skote. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by Themesbrand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
