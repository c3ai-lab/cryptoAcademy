<template>
  <div class="card">
      <div class="card-body">
          <h4 class="card-title mb-4">Buy / Sell</h4>

          <b-tabs
              pills
              nav-class="bg-light rounded"
              content-class="mt-4"
          >
              <b-tab title="Buy" active>
                  <b-card-text>
                    <buy-form />
                  </b-card-text>
              </b-tab>
              <b-tab title="Sell">
                  <b-card-text>
                    <sell-form />
                  </b-card-text>
              </b-tab>
          </b-tabs>
      </div>
  </div>
</template>

<script>
import BuyForm from '../components/BuyForm.vue'
import SellForm from '../components/SellForm.vue'
export default {
  components: {
    BuyForm,
    SellForm
  }
}
</script>

<style>

</style>
