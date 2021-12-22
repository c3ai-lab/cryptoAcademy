<template>
  <div>

    <div>


      <div>
        <div class="input-group mb-3">
          <label class="input-group-text"
          >{{ $t('trade.amount') }}</label
          >
          <input
            v-model="quantity"
            type="number"
            :step="quantity"
            min="0"
            class="form-control"
          />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label
              class="input-group-text"
            >{{ $t('trade.price') }}</label
            >
          </div>
          <input
            disabled
            :value="price.toFixed(2)"
            type="text"
            class="form-control"
          />
          <div class="input-group-append">
            <label class="input-group-text">{{ $t('trade.euro') }}</label>
          </div>
        </div>

        <div class="input-group mb-3">
          <div
            class="input-group-prepend"
          >
            <label
              class="input-group-text"
            >{{ $t('trade.total') }}</label
            >
          </div>
          <input
            disabled
            :value="total"
            type="text"
            class="form-control"
          />
          <div class="input-group-append">
            <label
              class="input-group-text"
            >{{ $t('trade.euro') }}</label
            >
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          @click="buy"
          type="button"
          class="btn btn-danger w-md"
        >
          {{ $t('trade.sell') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['price'],
  data() {
    return {
      quantity: 0.1,
    }
  },
  computed: {
    total() {
      return (this.quantity * this.price).toFixed(2)
    },
    balance() {
      return this.$store.getters['user/getUser']().balance;
    },
  },
  mounted() {
    console.log(this.$store.getters['user/getUser']());
  },
  methods: {
    buy() {
      this.$store.dispatch('transactions/sell', {quantity: this.quantity, symbol: this.$route.params.symbol})
    }
  },
}
</script>

<style>

</style>
