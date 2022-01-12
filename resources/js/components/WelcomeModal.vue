<template>
  <div
    id="modal-lg___BV_modal_outer_"
    style="position: absolute; z-index: 1040"
  >
    <div
      id="modal-lg"
      role="dialog"
      aria-labelledby="modal-lg___BV_modal_title_"
      aria-describedby="modal-lg___BV_modal_body_"
      class="modal fade show"
      style="display: block"
      aria-modal="true"
    >
      <div class="modal-dialog modal-lg">
        <span tabindex="0"></span>
        <div
          id="modal-lg___BV_modal_content_"
          tabindex="-1"
          class="modal-content"
        >
          <header id="modal-lg___BV_modal_header_" class="modal-header">
            <h5 id="modal-lg___BV_modal_title_" class="modal-title font-18">
              {{ $t("dashboard.welcome_modal.hello") }} {{ username }}
            </h5>
            <button type="button" class="close" @click="close">×</button>
          </header>
          <div id="modal-lg___BV_modal_body_" class="modal-body">
            <p>
              {{ $t("dashboard.welcome_modal.trading") }}
            </p>

            <router-link
              to="trading"
              class="fw-medium text-primary d-flex justify-content-center"
            >
              <b-button variant="primary" class="btn-block mb-3">
                {{ $t("dashboard.welcome_modal.trade_now") }}
              </b-button>
            </router-link>
            <p>
              {{ $t("dashboard.welcome_modal.academy") }}
            </p>
            <router-link
              to="academy"
              class="fw-medium text-primary d-flex justify-content-center"
            >
              <b-button variant="primary" class="btn-block mb-3">
                {{ $t("dashboard.welcome_modal.academy_now") }}
              </b-button>
            </router-link>
          </div>
          <!---->
        </div>
        <span tabindex="0"></span>
      </div>
    </div>
    <div id="modal-lg___BV_modal_backdrop_" class="modal-backdrop"></div>
  </div>
</template>

<script>
export default {
  name: "WelcomeModal",

  computed: {
    username() {
      return this.$store.getters["user/getUser"]().name;
    },
  },
  methods: {
    close() {
      document.getElementById("modal-lg___BV_modal_outer_").style.display =
        "none";
    },
  },

  created() {
    this.$store.dispatch("user/modalShown");
  },
};
</script>
