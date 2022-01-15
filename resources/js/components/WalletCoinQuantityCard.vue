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
  name: "LoadingStateWrapper",

  components: {
    LoadingStateWrapper,
  },

  props: {
    symbol: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
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
