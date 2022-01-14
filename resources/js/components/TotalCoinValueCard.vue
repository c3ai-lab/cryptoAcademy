<template>
  <b-card>
    <b-card-text class="value">
      {{ totalValue | eur }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "TotalCoinValueCard",

  computed: {
    totalValue() {
      return this.$store.getters["wallets/totalValue"]();
    },
  },
};
</script>

<style lang="scss" scoped>
.value {
  text-align: center;
  font-size: 2rem;
}
</style>
