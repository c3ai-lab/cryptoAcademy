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
              {{ $t("profile.reset_account_modal.title") }} 
            </h5>
            <button type="button" class="close" @click="close">×</button>
          </header>
          <div id="modal-lg___BV_modal_body_" class="modal-body">
            <p>
              {{ $t("profile.reset_account_modal.message") }}
            </p>
            
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
  name: "AccountResetModal",

 methods: {
    close() {
      document.getElementById("modal-lg___BV_modal_outer_").style.display = "none";
    },
  },
  };
</script>