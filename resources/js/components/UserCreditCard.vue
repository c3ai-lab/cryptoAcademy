<template>
  <b-card>
    <b-card-text class="credit">
      <LoadingStateWrapper :state="state">
        {{ credit | eur }}
      </LoadingStateWrapper>
    </b-card-text>
  </b-card>
</template>

<script>
import { ComponentState } from "../enums";
import { dispatchAll } from "../utils";
import LoadingStateWrapper from "../components/utils/LoadingStateWrapper.vue";

export default {
  name: "UserCreditCard",

  components: {
    LoadingStateWrapper,
  },

  data() {
    return {
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
