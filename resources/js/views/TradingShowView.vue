<template>
    <div
      style="display: flex; flex-wrap: wrap;"
    >
          <div style="width: 100%">
            <h1>
              {{symbol}}
            </h1>
            <div style="margin-left: 6px; font-size: 16px">
            <nice-price
              v-if="price"
              style="font-size: 20px"
              :value="price"
              currency="usd"
            />
            </div>
            <main-chart
              v-if="seriesLoaded"
              :series="series"
              :mtsPerTimestep="mtsPerCandle"
            />
            <div style="display: flex; justify-content: space-evenly; width: 100%">
                <button v-for="(dimension, i) in dimensions" :key="i" class="btn" @click="setDimension(dimension)">
                    {{dimension}}
                </button>
            </div>
        </div>
        <div style="width: 100%;" class="mt-2">
          <b-button class="btn-block" variant="primary" style="width: 100%" @click="buy">Trade</b-button>
        </div>
    </div>
</template>

<script>
import { Dimension } from '../enums';
import { DIMENSION_MAP_LOW_RES, DIMENSION_TIMEFRAME_MTS_MAP } from '../constants';
import { mapGetters } from 'vuex';
import MainChart from '../components/MainChart.vue';

export default {
  props: {
    symbol: String,
  },
  components: {
    MainChart
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
    this.$store.dispatch('coinDetails/subscribe', { symbol: this.symbol, dimension: this.activeDimension })
  },
  methods: {
    setDimension(dimension) {
      this.activeDimension = dimension
      this.$store.dispatch('coinDetails/subscribe', { symbol: this.symbol, dimension: this.activeDimension })
    },
  },
  methods: {
    buy() {
      this.$router.push({ name: 'trading.buy', params: { symbol: this.symbol } })
    }
  },
}
</script>

<style>

</style>
