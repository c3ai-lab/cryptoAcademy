<template>
  <div
    style="
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 80px !important;
      max-width: 1140px;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
    "
    class="row px-lg-5"
  >
    <h1 class="mt-3 px-lg-0">
      {{ symbol }}
    </h1>
    <div
      class="bg-white p-0"
      style="
        box-shadow: 0 1rem 1.5rem rgba(95, 95, 95, 0.13);
        border: 0 solid #f6f6f6;
        border-radius: 0.25rem;
      "
    >
      <div>
        <div>
          <nice-price
            v-if="price"
            style="font-size: 20px"
            :value="price"
            currency="eur"
            class="px-3"
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
        <b-button-group class="flex-grow-1 pb-3">
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

    <b-row class="mt-4">
      <b-col>
        <h2>{{ $t("wallet.user_balance") }}</h2>
        <UserCreditCard />
      </b-col>
      <b-col>
        <h2>{{ $t("wallet.wallet") }}</h2>
        <WalletCoinQuantityCard :symbol="symbol" />
      </b-col>
    </b-row>

    <TradingBuyView :price="price" />
    <TransactionCard :symbol="symbol" />
  </div>
</template>

<style lang="scss" scoped>
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
import UserCreditCard from "../components/UserCreditCard.vue";
import WalletCoinQuantityCard from "../components/WalletCoinQuantityCard.vue";

export default {
  props: {
    symbol: String,
  },

  components: {
    MainChart,
    TransactionCard,
    PaddedLayout,
    TradingBuyView,
    UserCreditCard,
    WalletCoinQuantityCard,
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
