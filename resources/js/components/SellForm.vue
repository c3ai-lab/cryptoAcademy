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
            <label class="input-group-text">{{ $t("trade.total") }}</label>
          </div>
          <input disabled :value="total" type="text" class="form-control" />
          <div class="input-group-append">
            <label class="input-group-text">{{ $t("trade.euro") }}</label>
          </div>
        </div>
      </div>

      <div class="text-center">
        <div
          v-if="sellInProgress"
          class="spinner-border text-danger"
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
        <button v-else @click="sell" type="button" class="btn btn-danger w-md">
          {{ $t("trade.sell") }}
        </button>
      </div>
    </div>

    <div v-if="sellSuccessModal">
      <SellSuccessModal v-on:close="sellSuccessModal = false" />
    </div>
  </div>
</template>

<script>
import SellSuccessModal from "../components/SellSuccessModal.vue";

export default {
  components: {
    SellSuccessModal,
  },
  props: ["price"],

  data() {
    return {
      quantity: 0.1,

      sellInProgress: false,
      sellSuccessModal: false,
    };
  },

  computed: {
    total() {
      return (this.quantity * this.price).toFixed(2);
    },
    balance() {
      return this.$store.getters["user/getUser"]().balance;
    },
  },

  methods: {
    async sell() {
      this.sellInProgress = true;
      const success = await this.$store.dispatch("transactions/sell", {
        quantity: this.quantity,
        symbol: this.$route.params.symbol,
      });
      this.sellInProgress = false;

      if (success === true) {
        this.sellSuccessModal = true;
      } else {
        alert("Sell failed!");
      }
    },
  },
};
</script>
