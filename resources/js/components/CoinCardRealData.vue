<template>
  <div class="card" v-if="hasLoadedData">
    <div class="card-body">
      <div
        style="font-size: 32px; display: flex; justify-content: space-between;"
      >
      <div style="display: flex">
        {{tradeSymbol}}
        <span
          class="text-muted"
          style="font-size: 13px; margin-top: 11px; margin-left: 6px"
        >({{ name }})
        </span>
      </div>
        <div
          class="text-muted text-truncate mb-0"
          style="font-size: 13px; margin-top: 11px;"
          >
          {{ absoluteChange >= 0 ? `+${absoluteChange}` : absoluteChange }}
          (
          {{ relativeChange >= 0 ? `+${relativeChange}` : relativeChange }}%
          )

          <i class="mdi ml-1" :class="[arrowClasses]"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div>
            <nice-price
              style="font-size: 20px"
              :value="currentValue"
              currency="usd"
            />

          </div>
        </div>
        <div class="col-6">
          <div>
            <apexchart
              class="apex-charts"
              :height="50"
              :options="chartOptions"
              :series="series"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { COIN_CARD_APEXCHART_OPTIONS } from "../constants";

export default {
  props: {
    name: String,
    symbol: String,
    price: Number,
    series: Array,
  },
  created() {
    this.$store.dispatch('coinIndex/getLowResPriceData', this.symbol);
  },
  computed: {
    hasLoadedData() {
      return this.series.length > 0
    },
    tradeSymbol() {
      return this.symbol.split('USDT')[0];
    },
    currentValue: function () {
      if (this.hasLoadedData) {
        const data = this.series[0].data;
        return data[data.length - 1][1];
      }
      return null;
    },
    absoluteChange: function () {
      if (this.hasLoadedData) {
        const data = this.series[0].data;
        const absoluteChange = data[data.length - 1][1] - data[0][1];
        return absoluteChange.toFixed(2);
      }
      return null;

    },
    relativeChange: function () {
      if (this.hasLoadedData) {
        const data = this.series[0].data;
        const relativeChange = (data[data.length - 1][1] / data[0][1] - 1) * 100;
        return relativeChange.toFixed(2);
      }
      return null;
    },

    chartOptions: function () {
      return {
        ...COIN_CARD_APEXCHART_OPTIONS,

        colors: [this.coinColor],
      };
    },

    // iconClass: function () {
    //   switch (this.coin) {
    //     case Coin.BTC:
    //       return "mdi-bitcoin";
    //     case Coin.ETH:
    //       return "mdi-ethereum";
    //   }
    // },
    coinColor: function () {
      return "#3c3c3d";
    },
    arrowClasses: function () {
      if (this.absoluteChange >= 0) {
        return "mdi-arrow-up text-success";
      } else {
        return "mdi-arrow-down text-danger";
      }
    },
  },
};
</script>
