<template>
<div>

  <div>


      <div>
          <label>Add Amount :</label>
          <div class="input-group mb-3">
              <label class="input-group-text"
                  >Amount</label
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
                disabled
                :value="total"
                  type="text"
                  class="form-control"
              />
          </div>
      </div>

      <div class="text-center">
          <button
              @click="buy"
              type="button"
              class="btn btn-danger w-md"
          >
              Verkaufen
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
      quantity: 0,
    }
  },
  computed: {
    total() {
      return this.quantity * this.price
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
      this.$store.dispatch('transactions/sell', { quantity: this.quantity, symbol: this.$route.params.symbol})
    }
  },
}
</script>

<style>

</style>
