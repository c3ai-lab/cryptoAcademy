<template>
  <div class="card" v-if="hasLoadedData" @click="showDetails">
    <div class="card-body">
      <div class="row" style="font-size: 24px">
        <div class="col-6" style="display: flex">
          {{ tradeSymbol }}
          <span
            class="text-muted"
            style="font-size: 13px; margin-top: 9px; margin-left: 6px"
            >{{ name }}
          </span>
        </div>
        <div
          class="col-6"
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <div
            class="text-muted text-truncate mb-0"
            style="font-size: 13px; margin-top: 1px"
          >
            {{ absoluteChange >= 0 ? `+${absoluteChange}` : absoluteChange }}
            (
            {{ relativeChange >= 0 ? `+${relativeChange}` : relativeChange }}% )
            <i class="mdi ml-1" :class="[arrowClasses]" />
          </div>

          <div style="margin-top: -6px">
            <i
              @click.stop="favoriteMethod"
              class="mdi ml-4"
              :class="[favoriteClasses]"
              style="font-size: 24px"
            />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div>
            <nice-price
              style="font-size: 20px"
              :value="currentPrice"
              currency="eur"
            />
          </div>
        </div>
        <div class="col-6">
          <div style="position: relative"></div>
        </div>
      </div>
    </div>
    <div
      style="
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 2em;
      "
    >
      <apexchart
        class="apex-charts"
        :height="50"
        width="100%"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  margin: 16px 8px;
  border-radius: 0em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 1px 2px rgba(95, 95, 95, 0.2);
}

.card-body {
  padding: 8px 12px 8px 12px;
}
</style>

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
    this.$store.dispatch("coinIndex/getLowResPriceData", this.symbol);
  },
  computed: {
    hasLoadedData() {
      return this.series.length > 0;
    },
    tradeSymbol() {
      return this.symbol.split("USDT")[0];
    },
    currentPrice() {
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
        const relativeChange =
          (data[data.length - 1][1] / data[0][1] - 1) * 100;
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
    },
  },
  methods: {
    setFavorite() {
      this.$store.dispatch("coinIndex/addFavorite", this.id);
    },
    removeFavorite() {
      this.$store.dispatch("coinIndex/removeFavorite", this.id);
    },
    showDetails() {
      this.$router.push({
        name: "trading.show",
        params: { symbol: this.symbol },
      });
    },
  },
};
</script>
