<template>
<div>
  <div>


      <div>
          <div class="input-group mb-3">
              <label class="input-group-text"
                  >Menge</label
              >
              <input
                  v-model="quantity"
                  type="number"
                  class="form-control"
              />
          </div>

          <div class="input-group mb-3">
              <div
                  class="input-group-prepend"
              >
                  <label
                      class="input-group-text"
                      >Price</label
                  >
              </div>
              <input
              disabled
              :value="price"
                  type="text"
                  class="form-control"
              />
              <div class="input-group-append">
                  <label
                      class="input-group-text"
                      >$</label
                  >
              </div>
          </div>

          <div class="input-group mb-3">
              <div
                  class="input-group-prepend"
              >
                  <label
                      class="input-group-text"
                      >Total</label
                  >
              </div>
              <input
                  :value="total"
                  disabled
                  type="text"
                  class="form-control disabled"
              />
          </div>
      </div>

      <div class="text-center">
          <button
              @click="buy"
              type="button"
              class="btn btn-success w-md"
          >
              Kaufen
          </button>
      </div>
  </div>
</div>
</template>

<script>
import {store} from "../store/main";

export default {
  props: ['price'],
  data() {
    return {
      quantity: 0,
    }
  },
  computed: {
    total() {
      return this.quantity * this.price
    }
  },
  mounted() {
    console.log(this.$route, location);
  },
  methods: {
    buy() {
      this.$store.dispatch('transactions/buy', { quantity: this.quantity, symbol: this.$route.params.symbol})
    }
  },
}
</script>

<style>

</style>
