
<script>
import i18n from "../i18n";
import simplebar from "simplebar-vue";

/**
 * Nav-bar Component
 */
export default {
  data() {
    return {
     
      components: { simplebar },
      name: "NavBar",
 
      methods: {
        toggleMenu() {
          this.$parent.toggleMenu();
        }
      }
    }
  }
}
</script>

<template>
  <header id="page-topbar" >
    <div>
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="/" class="logo">
            <span>
              <img src="/images/vendor/logo.png" alt height="50" />
            </span>
          </a>
        </div>

        <button
          id="vertical-menu-btn"
          type="button"
          class="btn btn-sm px-3 font-size-16 header-item"
          @click="toggleMenu"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

      <!--- Setting Button in Navbar
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

<style scoped>

</style>