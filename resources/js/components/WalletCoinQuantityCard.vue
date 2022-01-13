<template>
  <b-card>
    <b-card-text class="quantity">
      <LoadingSpinners v-if="state === ComponentState.LOADING" />

      <div v-if="state === ComponentState.ERROR">error</div>

      <div v-if="state === ComponentState.READY">
        {{ quantity | crypto }} {{ symbol | symbol }}
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
import { ComponentState } from "../enums";
import { dispatchAll } from "../utils";
import LoadingSpinners from "./LoadingSpinners.vue";

export default {
  name: "WalletCoinQuantityCard",

  components: {
    LoadingSpinners,
  },

  props: {
    symbol: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      ComponentState,
      state: ComponentState.LOADING,
    };
  },

  computed: {
    quantity() {
      return this.$store.getters["wallets/bySymbol"](this.symbol).user_quantity;
    },
  },

  async created() {
    this.state = await dispatchAll(this, "wallets/fetchAll");
  },
};
</script>

<style lang="scss" scoped>
.quantity {
  text-align: center;
  font-size: 2rem;
}
</style>
