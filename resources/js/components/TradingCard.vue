<template>
  <div class="card">
    <div class="card-body">
      <b-tabs pills nav-class="bg-light rounded" content-class="mt-4">
        <b-tab :title="$t('trade.buy')" active>
          <b-card-text>
            <BuyForm :price="price" />
          </b-card-text>
        </b-tab>
        <b-tab :title="$t('trade.sell')">
          <b-card-text>
            <SellForm :price="price" />
          </b-card-text>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import PaddedLayout from "../layouts/PaddedLayout.vue";
import BuyForm from "./BuyForm.vue";
import SellForm from "./SellForm.vue";

export default {
  name: "TradingCard",

  props: {
    price: Number,
  },

  components: {
    PaddedLayout,
    BuyForm,
    SellForm,
  },
};
</script>
