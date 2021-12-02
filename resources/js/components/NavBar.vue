
<script>
/**
 * Nav-bar Component
 */
export default {
  data() {
    return {
      name: "NavBar",
    };
  },

  data: function () {
    return {};
  },

  methods: {
    openNav() {
      document.getElementById("open-btn").style.display = "none";
      document.getElementById("close-button").style.display = "block";
      document.getElementById("nav-menu").style.display = "block";
    },
    closeNav() {
      document.getElementById("close-button").style.display = "none";
      document.getElementById("open-btn").style.display = "block";
      document.getElementById("nav-menu").style.display = "none";
    },
  },
};
</script>

<template>
  <header id="page-topbar">
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
          id="open-btn"
          type="button"
          class="open btn btn-sm px-3 font-size-16 header-item"
          @click="openNav"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

        <button
          id="close-button"
          type="button"
          style="display: none"
          class="close btn btn-sm px-3 font-size-16 header-item"
          @click="closeNav"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

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
    <div id="nav-menu" class="vertical-menu">
      <router-link :to="{ name: 'dashboard' }">
        {{ $t("navigation.dashboard") }}
      </router-link>
      <br />
      <router-link :to="{ name: 'trading' }">
        {{ $t("navigation.trading") }}
      </router-link>
      <br />
      <router-link :to="{ name: 'academy' }">
        {{ $t("navigation.academy") }}
      </router-link>
      <br />
      <router-link :to="{ name: 'profile' }">
        {{ $t("navigation.profile") }}
      </router-link>
    </div>
  </header>
</template>

<style scoped>
#nav-menu {
  padding: 20px;
  font-size: 15px;
  line-height: 3;
  display: none;
  background-color: #2a3042;
}

a {
  color: white;
}
</style>