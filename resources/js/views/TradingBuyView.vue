<template>
  <div class="card">
      <div class="card-body">
          <h4 class="card-title mb-4">Buy / Sell</h4>
          <b-tabs
              pills
              nav-class="bg-light rounded"
              content-class="mt-4"
          >
          <!-- <nice-price :value='price' currency='usd' /> -->
              <b-tab title="Buy" active>
                  <b-card-text>
                    <buy-form :price='price' />
                  </b-card-text>
              </b-tab>
              <b-tab title="Sell">
                  <b-card-text>
                    <sell-form :price='price'/>
                  </b-card-text>
              </b-tab>
          </b-tabs>
      </div>
  </div>
</template>

<script>
import { MainClient, WebsocketClient } from 'binance';
import BuyForm from '../components/BuyForm.vue'
import SellForm from '../components/SellForm.vue'
import PaddedLayout from '../layouts/PaddedLayout.vue';

const binanceWs = new WebsocketClient({
  beautify: true,
});

export default {
  components: {
    BuyForm,
    SellForm,
    PaddedLayout
  },
  data() {
    return {
      price: 0,
    }
  },
  created() {
     binanceWs.subscribeKlines(this.$route.params.symbol, '1m', 'spot');

    binanceWs.on('formattedMessage', (data) => {
      if (!Array.isArray(data)) {
        if (data.eventType === 'kline') {
          this.price = data.kline.close;
        }
      }
    });
  },
  computed: {
    // price() {
    //   return this.$$store.getters['coinDetails/']
    // }
  }
}
</script>

<style>

</style>
