<template>
    <div>
        <div>
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
              :series="series"
            />
            <div style="display: flex; justify-content: space-evenly;">
                <button v-for="(dimension, i) in dimensions" :key="i" class="btn" @click="setDimension(dimension)">
                    {{dimension}}
                </button>
            </div>
            {{activeDimension}}
        </div>
    </div>
</template>

<script>
import { Dimension } from '../enums';
import { MainClient } from 'binance';
import { mapGetters } from 'vuex';
import { WebsocketClient } from 'binance';
import MainChart from '../components/MainChart.vue';

const binanceRest = new MainClient({
  // Optional (default: false) - when true, response strings are parsed to floats (only for known keys).
  beautifyResponses: true,
});

const binanceWs = new WebsocketClient({
    beautify: true,
  });

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
            dimensions: [
                '1D',
                '1W',
                '1M',
                '1Y',
                'All',
            ],
            wsKey: null,
            // symbol: 'SOLUSDT',
            symbols: [
                'BTCUSDT',
                'ETHUSDT',
                'BNBUSDT',
                'SOLUSDT',
                'ADAUSDT',
                'XRPUSDT',
                'DOTUSDT',
                'DOGEUSDT',
                'SHIBUSDT',
            ],
            timeframe: [
                {
                name: '30 Minuten',
                symbol: '30m',
                duration_mts: 1_800_000,
                format: 'hh:mm, dd MMM yy'
                },
                {
                name: '1 Minute',
                symbol: '1m',
                duration_mts: 60_000,
                format: 'hh:mm, dd MMM yy'
                },
            ][1],
            // series: [
            //   {
            //     data: null,
            //   },
            //   {
            //     data: null,
            //   },
            //   {
            //     data: null,
            //   },
            // ],
        }
    },

    computed: {
      ...mapGetters('coinDetails', [
        'getSeries',
      ]),
      series() {
        return this.getSeries(this.symbol, this.activeDimension);
      },
      price() {
        // console.log(this.series);
        return 0;
      },
      // series() {
      //   return this.$store.getters['coinDetails/current']({ symbol: this.symbol, dimension: this.activeDimension });
      // },
    },
    created() {
        this.$store.dispatch('coinDetails/subscribe', { symbol: this.symbol, dimension: this.activeDimension })
        // this.subscribeCandles()
        // this.fetchCandles()
    },
    methods: {
        setDimension(dimension) {
          this.activeDimension = dimension
        },
        onSymbolChange() {
            this.hasLoadedPrice = false

            this.subscribeCandles()
            this.fetchCandles()
        },
        subscribeCandles() {

            setTimeout(
                () => binanceWs.close(this.wsKey, false),
                1,
            );
            binanceWs.subscribeKlines(this.symbol, this.timeframe.symbol, 'spot')

            binanceWs.on('formattedMessage', (data) => {
                if (!Array.isArray(data)) {
                    if (data.eventType === 'kline') {
                        this.wsKey = data.wsKey
                        this.price = data.kline.close
                        this.hasLoadedPrice = true
                        if(this.hasLoadedSeries) {
                            this.series[0].data = this.series[0].data.map(
                                    x => data.kline.startTime === x[0] ? [ x[0], data.kline.close ] : x
                            )
                            // console.log(this.series);
                            // this.$refs.chart.updateSeries([{
                            //     data: this.series[0].data
                            // }])
                        }

                        return
                    }
                }
            })
        },
        fetchCandles() {
            this.hasLoadedSeries = false
            binanceRest.getKlines({
                symbol: this.symbol,
                interval: this.timeframe.symbol,
                limit: 50,
            }).then(response => {
              this.series[0].data = response.map(x => [x[0], Number(x[3])])

              // Ghost series hack for inner padding in chart for labels
              this.series[1].data = response.map(x => [x[0], x[3]*1.003])
              this.series[2].data = response.map(x => [x[0], x[3]*0.995])

              this.hasLoadedSeries = true
            }).catch(error => {
                alert(error)
            })
        },

    }
}
</script>

<style>

</style>
