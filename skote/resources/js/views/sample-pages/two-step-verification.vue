<script>
import CodeInput from "vue-verification-code-input";

export default {
  data() {
    return {};
  },
  components: { CodeInput },
  methods: {},
};
</script>

<template>
  <div class="account-pages my-5 pt-sm-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center mb-5 text-muted">
            <a href="/" class="d-block auth-logo">
              <img
                src="/images/logo-dark.png"
                alt=""
                height="20"
                class="auth-logo-dark mx-auto"
              />
              <img
                src="/images/logo-light.png"
                alt=""
                height="20"
                class="auth-logo-light mx-auto"
              />
            </a>
            <p class="mt-3">Responsive Bootstrap 5 Admin Dashboard</p>
          </div>
        </div>
      </div>
      <!-- end row -->
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card">
            <div class="card-body">
              <div class="p-2">
                <div class="text-center">
                  <div class="avatar-md mx-auto">
                    <div class="avatar-title rounded-circle bg-light">
                      <i class="bx bxs-envelope h1 mb-0 text-primary"></i>
                    </div>
                  </div>
                  <div class="p-2 mt-4">
                    <h4>Verify your email</h4>
                    <p class="mb-5">
                      Please enter the 6 digit code sent to
                      <span class="fw-semibold">example@abc.com</span>
                    </p>

                    <CodeInput :loading="false" class="input" />

                    <div class="mt-4">
                      <a href="/" class="btn btn-success w-md">Confirm</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <p>
              Did't receive a code ?
              <a href="#" class="fw-medium text-primary"> Resend </a>
            </p>
            <p>
              ©
              {{ new Date().getFullYear() }}
              Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by
              Themesbrand
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>