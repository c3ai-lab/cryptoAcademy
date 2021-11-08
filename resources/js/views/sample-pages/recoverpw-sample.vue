<script>

/**
 * Recover password Sample page
 */
export default {
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
                      <h5 class="text-primary">Reset Password</h5>
                      <p>Re-Password with Skote.</p>
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
                        <img src="/images/logo.svg" alt class="rounded-circle" height="34" />
                      </span>
                    </div>
                  </a>
                </div>

                <div class="p-2">
                  <div
                    class="alert alert-success text-center mb-4"
                    role="alert"
                  >Enter your Email and instructions will be sent to you!</div>
                  <form class="form-horizontal">
                    <div class="mb-3">
                      <label for="useremail">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="useremail"
                        placeholder="Enter email"
                      />
                    </div>

                    <div class="form-group row mb-0">
                      <div class="col-12 text-end">
                        <button class="btn btn-primary w-md" type="submit">Reset</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center">
              <p>
                Remember It ?
                <a
                  href="/auth/login-1"
                  class="fw-medium text-primary"
                >Sign In here</a>
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