<template>
  <b-card>
    <b-card-text class="credit">
      {{ credit | eur }}
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "CurrentCreditCard",

  computed: {
    credit() {
      return this.$store.getters["user/balance"]();
    },
  },
};
</script>

<style lang="scss" scoped>
.credit {
  text-align: center;
  font-size: 2rem;
}
</style>
