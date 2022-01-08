<template>
  <div
    style="
      display: flex;
      flex-wrap: wrap;
      padding-top: 80px;
      background-color: white;
      width: 100%;
      justify-content: center;
    "
    class="row"
  >
    <div style="width: 100%" class="col-12 col-md-6">
      <div style="padding: 0 28px">
        <h1>
          {{ symbol }}
        </h1>
        <div style="margin-left: 6px; font-size: 16px">
          <nice-price
            v-if="price"
            style="font-size: 20px"
            :value="price"
            currency="eur"
          />
        </div>
      </div>
      <main-chart
        v-if="seriesLoaded"
        :series="series"
        :mtsPerTimestep="mtsPerCandle"
      />
      <div
        v-else
        class="
          d-flex
          justify-content-center
          align-items-center
          position-relative
        "
        style="height: 300px"
      >
        <b-spinner
          class="position-absolute"
          variant="primary"
          style="width: 5rem; height: 5rem"
        ></b-spinner>
      </div>
      <div
        style="
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 0 28px;
          max-width: 768px;
          margin: 0 auto;
        "
      >
        <b-button-group class="flex-grow-1">
          <b-button
            v-for="(dimension, i) in dimensions"
            :key="i"
            class="min-w-20 dim-btn"
            :class="{ 'active-dimension': dimension === activeDimension }"
            @click="setDimension(dimension)"
          >
            {{ $t(`dimension.${dimension}`) }}
          </b-button>
        </b-button-group>
      </div>
    </div>
    <div v-if="0" style="width: 100%" class="mt-2">
      <b-button
        class="btn-block"
        variant="primary"
        style="width: 100%"
        @click="buy"
        >Trade</b-button
      >
    </div>
    <div style="padding: 14px 28px">
      <b-card>
        <div class="text-muted pa-0 ma-0">
          {{ $t("trade.amount") }}
        </div>
        <div class="font-size-22 w-100" style="text-align: right">
          <b>
            {{ balance | crypto }}
          </b>
          <span>{{ symbol | symbol }}</span>
        </div>
      </b-card>
      <trading-buy-view v-if="1" />
      <transaction-card :symbol="symbol" v-if="1" />
    </div>
  </div>
</template>

<style>
.dim-btn {
  background-color: #eff2f7 !important;
  border: none;
  color: var(--bs-gray-500) !important;
}
.dim-btn:focus,
.dim-btn:focus-visible {
  outline: none !important;
}
.active-dimension {
  background-color: #eff2f760 !important;
  color: var(--bs-gray-900) !important;
}
</style>

<script>
import { Dimension } from "../enums";
import { DIMENSION_TIMEFRAME_MTS_MAP } from "../constants";
import { mapGetters } from "vuex";
import MainChart from "../components/MainChart.vue";
import TransactionCard from "../components/TransactionCard.vue";
import PaddedLayout from "../layouts/PaddedLayout.vue";
import TradingBuyView from "./TradingBuyView.vue";

export default {
  props: {
    symbol: String,
  },

  components: {
    MainChart,
    TransactionCard,
    PaddedLayout,
    TradingBuyView,
  },

  data() {
    return {
      lineColor: "#f1b44c",
      hasLoadedSeries: false,
      hasLoadedPrice: false,
      activeDimension: Dimension.ONE_DAY,
      dimensions: Object.values(Dimension),
    };
  },

  computed: {
    ...mapGetters("coinDetails", ["getSeries"]),

    series() {
      return this.getSeries(this.symbol, this.activeDimension);
    },

    seriesLoaded() {
      return this.series.length > 0;
    },

    price() {
      if (this.seriesLoaded) {
        return this.series[this.series.length - 1][1];
      }
      return 0;
    },

    mtsPerCandle() {
      return DIMENSION_TIMEFRAME_MTS_MAP[this.activeDimension];
    },

    balance() {
      if (!this.seriesLoaded) return 0;

      return this.$store.getters["coinIndex/all"]().find(
        (x) => x.symbol === this.symbol
      ).user_quantity;
    },
  },

  mounted() {
    this.$store.dispatch("coinDetails/subscribe", {
      symbol: this.symbol,
      dimension: this.activeDimension,
    });
    this.$store.dispatch("coinIndex/fetchSymbols");
  },

  methods: {
    setDimension(dimension) {
      this.activeDimension = dimension;
      this.$store.dispatch("coinDetails/subscribe", {
        symbol: this.symbol,
        dimension: this.activeDimension,
      });
    },

    buy() {
      this.$router.push({
        name: "trading.buy",
        params: { symbol: this.symbol },
      });
    },
  },
};
</script>
