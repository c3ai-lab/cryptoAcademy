<template>
  <b-card>
    <b-card-text class="credit">
      <LoadingSpinners v-if="state === ComponentState.LOADING" />

      <div v-if="state === ComponentState.ERROR">error</div>

      <div v-if="state === ComponentState.READY">{{ credit | eur }}</div>
    </b-card-text>
  </b-card>
</template>

<script>
import { ComponentState } from "../enums";
import { dispatchAll } from "../utils";
import LoadingSpinners from "./LoadingSpinners.vue";

export default {
  name: "UserCreditCard",

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
    credit() {
      return this.$store.getters["user/credit"]();
    },
  },

  async created() {
    this.state = await dispatchAll(this, "user/refreshUserData");
  },
};
</script>

<style lang="scss" scoped>
.credit {
  text-align: center;
  font-size: 2rem;
}
</style>
