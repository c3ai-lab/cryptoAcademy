<script>
import Vertical from "./vertical";
import Horizontal from "./horizontal";

export default {
  components: { Vertical, Horizontal },
  data() {
    return {};
  },
  computed: {
    layoutType() {
        return this.$root.layout?.type;
    }
  },
  methods: {},
  mounted() {
    // document.querySelector("html").setAttribute('dir', 'rtl');
  }
};
</script>

<template>
  <div>
    <Vertical v-if="layoutType === 'vertical'">
      <slot />
    </Vertical>

    <Horizontal v-if="layoutType === 'horizontal'">
      <slot />
    </Horizontal>
  </div>
</template>
