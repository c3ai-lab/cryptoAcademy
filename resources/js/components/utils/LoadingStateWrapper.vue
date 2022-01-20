<template>
  <div>
    <b-card v-if="card && state !== ComponentState.READY">
      <b-card-text class="loading">
        <LoadingSpinners v-if="state === ComponentState.LOADING" />

        <div v-if="state === ComponentState.ERROR">error</div>
      </b-card-text>
    </b-card>

    <div v-if="!card && state !== ComponentState.READY">
      <LoadingSpinners v-if="state === ComponentState.LOADING" />

      <div v-if="state === ComponentState.ERROR">error</div>
    </div>

    <slot v-if="state === ComponentState.READY"></slot>
  </div>
</template>

<script>
import { ComponentState } from "../../enums";
import LoadingSpinners from "./LoadingSpinners.vue";

export default {
  name: "LoadingStateWrapper",

  props: {
    state: {
      type: String,
      required: true,
      validator: (value) => {
        return Object.values(ComponentState).includes(value);
      },
    },

    card: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    ComponentState,
    LoadingSpinners,
  },

  data() {
    return {
      ComponentState,
    };
  },
};
</script>

<style lang="scss" scoped>
.loading {
  text-align: center;
  padding: 1rem 0;
}
</style>
