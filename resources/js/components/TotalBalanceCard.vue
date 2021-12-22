<template>
  <b-card>
    <b-card-text class="balance">
      {{ totalBalance | eur }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "TotalBalanceCard",

  computed: {
    totalBalance() {
      return this.$store.getters["wallets/totalBalance"]();
    },
  },

  created() {
    this.$store.dispatch("wallets/fetchAll");
  },
};
</script>

<style lang="scss" scoped>
.balance {
  text-align: center;
  font-size: 2rem;
}
</style>