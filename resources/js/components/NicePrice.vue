<template>
  <div style="display: flex">
    <div v-if="isUsd" class="pt-1">{{symbol}}</div>

    <div style="font-size: 1.5em">{{digitsBeforeComma}}</div>
    <div class="pt-2"><span v-if="digitsAfterComma">{{comma}}</span>{{digitsAfterComma}}</div>

    <div v-if="!isUsd" class="pt-2">{{symbol}}</div>

  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    currency: String, // 'usd' or 'eur'
  },
  computed: {
    isUsd() {
      return this.currency == 'usd'
    },
    displayPrice() {
      return this.$options.filters[this.currency](this.value)
    },
    symbol() {
      return this.isUsd ? '$' : '€'
    },
    comma() {
      return this.isUsd ? '.' : ','
    },
    digitsBeforeComma() {
      let res = this.displayPrice.split(this.comma)[0]

      if (this.isUsd) {
        res = res.split(this.symbol)[1]
      }

      return res
    },
    digitsAfterComma() {
      if (!this.isUsd) {
        return this.displayPrice.split(this.comma)[1].split(this.symbol)[0]
      }
      return this.displayPrice.split(this.comma)[1]
    },
  }
}
</script>

<style>

</style>
