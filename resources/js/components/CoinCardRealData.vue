<template>
  <div class="card" v-if="hasLoadedData">
    <div class="card-body">
      <div
        class="row"
        style="font-size: 32px;"
      >
        <div class="col-6" style="display: flex">
          {{tradeSymbol}}
          <span
            class="text-muted"
            style="font-size: 13px; margin-top: 15px; margin-left: 6px"
          >{{ name }}
          </span>
        </div>
        <div class="col-6" style="display: flex; justify-content: space-between; align-items: center">
          <div
            class="text-muted text-truncate mb-0"
            style="font-size: 13px; margin-top: 1px"
          >
            {{ absoluteChange >= 0 ? `+${absoluteChange}` : absoluteChange }}
            (
            {{ relativeChange >= 0 ? `+${relativeChange}` : relativeChange }}%
            )
            <i class="mdi ml-1" :class="[arrowClasses]" />
          </div>

          <div style="margin-top: -6px">
            <i @click.prevent="favoriteMethod" class="mdi ml-4" :class="[favoriteClasses]" style="font-size: 24px;"/>
          </div>
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
          <div style="position: relative">
          </div>
        </div>
      </div>
    </div>
            <apexchart
              class="apex-charts"
              :height="50"
              width="100%"
              :options="chartOptions"
              :series="series"
              style="position: absolute; width: 100vw; left: 0; right: 0; bottom: 0"
            />
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
    id: Number,
    isFavorite: Boolean,
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
    currentValue() {
      if (this.hasLoadedData) {
        const data = this.series[0].data;
        return data[data.length - 1][1];
      }
      return null;
    },
    absoluteChange() {
      if (this.hasLoadedData) {
        const data = this.series[0].data;
        const absoluteChange = data[data.length - 1][1] - data[0][1];
        return absoluteChange.toFixed(2);
      }
      return null;

    },
    relativeChange() {
      if (this.hasLoadedData) {
        const data = this.series[0].data;
        const relativeChange = (data[data.length - 1][1] / data[0][1] - 1) * 100;
        return relativeChange.toFixed(2);
      }
      return null;
    },

    chartOptions() {
      return {
        ...COIN_CARD_APEXCHART_OPTIONS,
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0,
            opacityFrom: 0.5,
            opacityTo: 0.4,
            stops: [0, 60],
          },
        },
        tooltip: {
          enabled: false,
        },
        colors: [this.coinColor],
      };
    },

    // iconClass() {
    //   switch (this.coin) {
    //     case Coin.BTC:
    //       return "mdi-bitcoin";
    //     case Coin.ETH:
    //       return "mdi-ethereum";
    //   }
    // },
    coinColor() {
      return "#556ee6";
    },
    arrowClasses() {
      if (this.absoluteChange >= 0) {
        return "mdi-arrow-up text-success";
      } else {
        return "mdi-arrow-down text-danger";
      }
    },
    favoriteClasses() {
      if (this.isFavorite) {
        return "mdi-heart text-danger";
      } else {
        return "mdi-heart-outline";
      }
    },
    favoriteMethod() {
      return this.isFavorite ? this.removeFavorite : this.setFavorite;
    }
  },
  methods: {
    setFavorite() {
      this.$store.dispatch('coinIndex/addFavorite', this.id);
    },
    removeFavorite() {
      this.$store.dispatch('coinIndex/removeFavorite', this.id);
    },
  }
};
</script>
<style scoped>
.card-body{
  padding: 4px 12px 0px 12px;
}
</style>
