
<script>
/**
 * Nav-bar Login Component
 */
export default {
  data() {
    return {
      name: "NavBarLogin",
    };
  },
};
</script>

<template>
  <header id="page-topbar" class="container px-lg-4 ">
    <div>
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box d-none d-lg-block">
          <a href="/" class="logo">
            <span>
              <img src="/images/cryptocademy.svg" style="width: 100%" />
            </span>
          </a>
        </div>
        <div class="d-block d-lg-none" style="width: 35px">
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

        <!---
      Setting Button in Navbar
        <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle toggle-right"
            @click="toggleRightSidebar"
          >
            <i class="bx bx-cog bx-spin toggle-right"></i>
          
          </button>
        </div>
        --->
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#page-topbar
{
background-color: unset;
box-shadow: none;
}


</style>