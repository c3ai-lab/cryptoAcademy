<template>
  <header id="page-topbar">
    <div class="container px-lg-5">
      <div class="d-flex align-items-center">
        <!-- LOGO -->
        <div class="d-none d-lg-block col-2">
          <a href="/" class="logo">
            <span>
              <img src="/images/cryptocademy.svg" style="width: 100%" />
            </span>
          </a>
        </div>
        <div class="d-block d-lg-none" style="width: 100%">
          <a href="/" class="logo">
            <span>
              <img
                src="/images/cryptocademy_coin.svg"
                style="height: 35px"
                class="px-2"
              />
            </span>
          </a>
        </div>

        <div class="col-md-6 col-2"></div>
        <div class="d-flex p-1 justify-content-end col-2">
          
        </div>
        <div class="d-flex p-1 justify-content-end col-2">
          <router-link
            to="login"
          >
            <button class="btn btn-primary mx-4">
              {{ $t("common.login") }}
            </button>
          </router-link>
          <router-link
            to="register"
          >
            <button class="btn btn-warning">
              {{ $t("common.register") }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "LandingNavBar",

};
</script>

<style lang="scss" scoped>

</style>
