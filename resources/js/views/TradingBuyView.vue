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
            <buy-form :price='price'/>
          </b-card-text>
        </b-tab>
        <b-tab :title="$t('trade.sell')">
          <b-card-text>
            <sell-form :price='price'/>
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
  props: {
    price: Number,
  },
  components: {
    BuyForm,
    SellForm,
    PaddedLayout,
  },
}
</script>

<style>

</style>
