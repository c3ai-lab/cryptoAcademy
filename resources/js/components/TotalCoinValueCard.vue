<template>
  <b-card>
    <b-card-text class="value">
      <LoadingStateWrapper :state="state">
        {{ totalValue | eur }}
      </LoadingStateWrapper>
    </b-card-text>
  </b-card>
</template>

<script>
import { ComponentState } from "../enums";
import { dispatchAll } from "../utils";
import LoadingStateWrapper from "../components/utils/LoadingStateWrapper.vue";

export default {
  name: "TotalCoinValueCard",

  components: {
    LoadingStateWrapper,
  },

  data() {
    return {
      state: ComponentState.LOADING,
    };
  },

  computed: {
    totalValue() {
      return this.$store.getters["wallets/totalValue"]();
    },
  },

  async created() {
    this.state = await dispatchAll(this, "wallets/fetchAll");
  },
};
</script>

<style lang="scss" scoped>
.value {
  text-align: center;
  font-size: 2rem;
}
</style>
