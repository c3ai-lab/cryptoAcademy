<template>
  <header id="page-topbar">
    <div>
      <div class="d-flex">
        <button
          id="open-btn"
          type="button"
          class="open btn btn-sm px-3 font-size-16 header-item col-1"
          @click="openNav"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>

        <button
          id="close-button"
          type="button"
          style="display: none"
          class="close btn btn-sm px-3 font-size-16 header-item col-1"
          @click="closeNav"
        >
          <i class="fa fa-fw fa-bars"></i>
        </button>
        <!-- LOGO -->
        <div class="navbar-brand-box d-none d-lg-block col-2">
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
        <div class="col-md-7 col-2"></div>
        <div class="d-flex balance p-4 justify-content-end">
          <span style="line-height: 1">
            Konto: <b>{{ balance | eur }}</b></span
          >
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
    <div
      id="background"
      class="background d-xxl-none"
      @click="closeNav()"
    ></div>
    <div id="nav-menu" class="vertical-menu font-heading">
      <router-link :to="{ name: 'dashboard' }" @click.native="closeNav()">
        {{ $t("navigation.dashboard") }}
      </router-link>
      <br />
      <router-link :to="{ name: 'leaderboard' }" @click.native="closeNav()">
        {{ $t("navigation.leaderboard") }}
      </router-link>
      <br />
      <router-link :to="{ name: 'wallets' }" @click.native="closeNav()">
        {{ $t("navigation.wallets") }}
      </router-link>
      <br />
      <router-link :to="{ name: 'trading' }" @click.native="closeNav()">
        {{ $t("navigation.trading") }}
      </router-link>
      <br />
      <router-link :to="{ name: 'academy' }" @click.native="closeNav()">
        {{ $t("navigation.academy") }}
      </router-link>
      <br />
      <router-link :to="{ name: 'profile' }" @click.native="closeNav()">
        {{ $t("navigation.profile") }}
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",

  computed: {
    balance() {
      return this.$store.getters["user/getUser"]().balance;
    },
  },

  methods: {
    openNav() {
      document.getElementById("open-btn").style.display = "none";
      document.getElementById("close-button").style.display = "block";
      document.getElementById("nav-menu").style.display = "block";
      document.getElementById("background").style.display = "block";
    },

    closeNav() {
      document.getElementById("close-button").style.display = "none";
      document.getElementById("open-btn").style.display = "block";
      document.getElementById("nav-menu").style.display = "none";
      document.getElementById("background").style.display = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
#nav-menu {
  padding: 20px;
  font-size: 15px;
  line-height: 3;
  display: none;
  background-color: #2a3042;
}

.vertical-menu {
  width: 180px;
}

a {
  color: white;
}

.background {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
}

.navbar-brand-box {
  padding: 0;
}

.balance {
  float: right;
  right: 0;
}
</style>
