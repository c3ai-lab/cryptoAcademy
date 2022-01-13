<template>
  <div>
    <div>
      <div>
        <div class="input-group mb-3">
          <label class="input-group-text">{{ $t("trade.amount") }}</label>
          <input
            v-model="quantity"
            type="number"
            :step="quantity"
            min="0"
            class="form-control"
          />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text">{{ $t("trade.price") }}</label>
          </div>
          <input
            disabled
            :value="price.toFixed(2)"
            type="text"
            class="form-control"
          />
          <div class="input-group-append">
            <label class="input-group-text">{{ $t("trade.euro") }}</label>
          </div>
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text">
              {{ $t("trade.total") }}
            </label>
          </div>
          <input
            :value="total"
            disabled
            type="text"
            class="form-control disabled"
          />
          <div class="input-group-append">
            <label class="input-group-text">{{ $t("trade.euro") }}</label>
          </div>
        </div>
      </div>

      <div class="text-center">
        <div
          v-if="buyInProgress"
          class="spinner-border text-success"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
        <button v-else @click="buy" type="button" class="btn btn-success w-md">
          {{ $t("trade.buy") }}
        </button>
      </div>
    </div>

    <div v-if="buySuccessModal === true">
      <BuySuccessModal v-on:close="buySuccessModal = false" />
    </div>
  </div>
</template>

<script>
import BuySuccessModal from "../components/BuySuccessModal.vue";

export default {
  components: {
    BuySuccessModal,
  },
  props: ["price"],

  data() {
    return {
      quantity: 0.1,

      buyInProgress: false,
      buySuccessModal: false,
    };
  },

  computed: {
    total() {
      return (this.quantity * this.price).toFixed(2);
    },
  },

  methods: {
    async buy() {
      this.buyInProgress = true;
      const success = await this.$store.dispatch("transactions/buy", {
        quantity: this.quantity,
        symbol: this.$route.params.symbol,
      });
      this.buyInProgress = false;

      if (success === true) {
        this.buySuccessModal = true;
      } else {
        alert("Buy failed!");
      }
    },
  },
};
</script>
