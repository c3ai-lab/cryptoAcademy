<template>
<div>
  <div v-if="0" class="float-end ms-2">
      <h5 class="font-size-14">
          <i
              class="bx bx-wallet text-primary font-size-16 align-middle me-1"
          ></i>
          {{balance}}
      </h5>
  </div>
  <h5 class="font-size-14 mb-4">Buy Coin</h5>

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
  data() {
    return {
      quantity: null,
    }
  },
  computed: {
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
