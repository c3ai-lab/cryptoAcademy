<template>
  <b-card>
    <b-card-text class="value">
      <LoadingSpinners v-if="state === ComponentState.LOADING" />

      <div v-if="state === ComponentState.ERROR">error</div>

      <div v-if="state === ComponentState.READY">{{ totalValue | eur }}</div>
    </b-card-text>
  </b-card>
</template>

<style lang="scss" scoped>
.value {
  text-align: center;
  font-size: 2rem;
}
</style>

<script>
import { ComponentState } from "../enums";
import { dispatchAll } from "../utils";
import LoadingSpinners from "./LoadingSpinners.vue";

export default {
  name: "TotalCoinValueCard",

  components: {
    LoadingSpinners,
  },

  data() {
    return {
      ComponentState,
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
