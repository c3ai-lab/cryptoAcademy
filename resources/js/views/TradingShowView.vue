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
    >
          <div style="width: 100%;">
            <div style="padding: 0 28px">
              <h1>
                {{symbol}}
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
            <div style="display: flex; justify-content: space-between; width: 100%; padding: 0 28px">
                <button v-for="(dimension, i) in dimensions" :key="i" class="btn" @click="setDimension(dimension)">
                    {{dimension}}
                </button>
            </div>
        </div>
        <div v-if="0" style="width: 100%;" class="mt-2">
          <b-button class="btn-block" variant="primary" style="width: 100%" @click="buy">Trade</b-button>
        </div>
        <div style="padding: 14px 28px;" class="" v-if="1">
          <trading-buy-view v-if="1"/>
          <transaction-list :symbol="symbol" v-if="1" />
        </div>
    </div>
</template>

<script>
import { Dimension } from '../enums';
import { DIMENSION_MAP_LOW_RES, DIMENSION_TIMEFRAME_MTS_MAP } from '../constants';
import { mapGetters } from 'vuex';
import MainChart from '../components/MainChart.vue';
import TransactionList from '../components/TransactionCard.vue';
import PaddedLayout from '../layouts/PaddedLayout.vue';
import TradingBuyView from './TradingBuyView.vue';

export default {
  props: {
    symbol: String,
  },
  components: {
    MainChart,
    TransactionList,
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
      }
  },

  computed: {
    ...mapGetters('coinDetails', [
      'getSeries',
    ]),
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
      return DIMENSION_TIMEFRAME_MTS_MAP[this.activeDimension]
    },
    // series() {
    //   return this.$store.getters['coinDetails/current']({ symbol: this.symbol, dimension: this.activeDimension });
    // },
  },
  mounted() {
    console.log(this);
    this.$store.dispatch('coinDetails/subscribe', { symbol: this.symbol, dimension: this.activeDimension })
  },
  methods: {
    setDimension(dimension) {
      this.activeDimension = dimension
      this.$store.dispatch('coinDetails/subscribe', { symbol: this.symbol, dimension: this.activeDimension })
    },
    buy() {
      this.$router.push({ name: 'trading.buy', params: { symbol: this.symbol } })
    }
  },
}
</script>

<style>

</style>
