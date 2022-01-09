<template>
  <div class="card">
    <div class="card-body">
      <b-tabs
        pills
        nav-class="bg-light rounded"
        content-class="mt-4"
      >
        <!-- <nice-price :value='price' currency='usd' /> -->
        <b-tab :title="$t('trade.buy')" active>
          <b-card-text>
            <buy-form :price='(price/exchangerate)'/>
          </b-card-text>
        </b-tab>
        <b-tab :title="$t('trade.sell')">
          <b-card-text>
            <sell-form :price='(price/exchangerate)'/>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import {WebsocketClient} from 'binance';
import BuyForm from '../components/BuyForm.vue';
import SellForm from '../components/SellForm.vue';
import PaddedLayout from '../layouts/PaddedLayout.vue';


const binanceWs = new WebsocketClient({
  beautify: true,
});

export default {
  components: {
    BuyForm,
    SellForm,
    PaddedLayout,
  },
  data() {
    return {
      price: 0,
      exchangerate: 1.130, // @todo aus binance api holen
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
