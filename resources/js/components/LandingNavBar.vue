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
        <div class="d-block d-lg-none col-6" >
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
<div class="d-none d-lg-block col-4"></div>
       
        <div class="d-flex p-1 justify-content-end col-6">
          <router-link
            to="login"
          >
            <button class="btn btn-primary">
              {{ $t("common.get_started") }}
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
