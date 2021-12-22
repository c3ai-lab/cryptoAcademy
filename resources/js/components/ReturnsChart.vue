<template>

</template>

<script>
export default {
  props: {
    symbol: String,
  },
  created() {
    this.$store.dispatch('transactions/fetchReturns');
  },
  computed: {
    series() {
      this.$store.dispatch('transactions/fetchReturns');
    }
  },
}
</script>

<style>

</style>
