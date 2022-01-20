<template>
  <b-card>
    <b-card-text class="quantity">
      <LoadingStateWrapper :state="state">
        {{ quantity | crypto }} {{ symbol | symbol }}
      </LoadingStateWrapper>
    </b-card-text>
  </b-card>
</template>

<script>
import { ComponentState } from "../enums";
import { dispatchAll } from "../utils";
import LoadingStateWrapper from "../components/utils/LoadingStateWrapper.vue";

export default {
  name: "WalletCoinQuantityCard",

  components: {
    LoadingStateWrapper,
  },

  props: {
    symbol: {
      type: String,
    },
  },

  data() {
    return {
      state: ComponentState.LOADING,
    };
  },

  computed: {
    quantity() {
      const wallet = this.$store.getters["wallets/bySymbol"](this.symbol);
      if (wallet == null) return 0;
      return wallet.user_quantity;
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
