<template>
    <div>
        <div v-if="hasLoadedSeries && hasLoadedPrice">
            <h1>
                <b-form-select
                    v-model="symbol"
                    :options="symbols"
                    style="background: none; outline: none; border: none;"
                    @change="onSymbolChange"
                ></b-form-select>
            </h1>
            <div v-if="hasLoadedPrice" style="margin-left: 6px; font-size: 16px">
            <nice-price
              style="font-size: 20px"
              :value="price"
              currency="usd"
            />
            </div>

            <apexchart
                class="apex-charts"
                type="line"
                dir=""
                :series="series"
                :options="chartOptions"
                ref="chart"
            ></apexchart>
            <div style="display: flex; justify-content: space-evenly;">
                <button v-for="(dimension, i) in dimensions" :key="i" class="btn" @click="setDimension(dimension)">
                    {{dimension}}
                </button>
            </div>
            {{activeDimension}}
        </div>
        <div v-else>
          LOADING
        </div>
    </div>
</template>

<script>
import { WebsocketClient } from 'binance';
import { MainClient } from 'binance';
import NicePrice from '../components/NicePrice.vue';

const binanceRest = new MainClient({
  // Optional (default: false) - when true, response strings are parsed to floats (only for known keys).
  beautifyResponses: true,
});

const binanceWs = new WebsocketClient({
    beautify: true,
  });

export default {
    data() {
        return {
          lineColor: "#f1b44c",
            hasLoadedSeries: false,
            hasLoadedPrice: false,
            price: null,
            activeDimension: '1D',
            dimensions: [
                '1D',
                '1W',
                '1M',
                '1Y',
                'All',
            ],
            wsKey: null,
            symbol: 'SOLUSDT',
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
            series: [
              {
                data: null,
              },
              {
                data: null,
              },
              {
                data: null,
              },
            ],
        }
    },

    computed: {
        chartOptions() {
            // Filter high and low
            let high = this.series[0].data.reduce(
              (prev, current) => (prev[1] > current[1]) ? prev : current
            )
            let low = this.series[0].data.reduce(
              (prev, current) => (prev[1] < current[1]) ? prev : current
            )



            // clamp high and low timestamp, that they dont overflow
            let data = this.series[0].data // for readability
            let firstMts = data[0][0] // first timestamp
            let lastMts = data[data.length - 1][0] // last timestamp

            // relative factor: adding 0.015 per char if more chars than 7
            let lenOfPrice = Math.max(
              this.$options.filters.usd(data[0][1]).length,
              this.$options.filters.usd(data[data.length - 1][1]).length,
            )
            let offset = 0.03 + (lenOfPrice > 7 ? (lenOfPrice - 7) * 0.015 : 0)
            let offsetInMts = Math.ceil(data.length * offset) * this.timeframe.duration_mts

            let minMts = firstMts + offsetInMts
            let maxMts = lastMts - offsetInMts

            let lowIsInFirstHalf = Math.abs(low[0] - data[0][0]) <= Math.abs(low[0] - data[data.length - 1][0])
            let highIsInFirstHalf = Math.abs(high[0] - data[0][0]) <= Math.abs(high[0] - data[data.length - 1][0])

            return {
                chart: {
                    type: "line",
                    height: '100%',
                    sparkline: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: "smooth",
                    width: 2
                },
                colors: [this.lineColor,"#f1b44c00","#f1b44c00"],

                tooltip: {
                    custom: ({series, seriesIndex, dataPointIndex, w}) =>  {
                      return `
                      <div class="arrow_box"><span>
                      ${
                        this.$options.filters.usd(
                          series[seriesIndex][dataPointIndex]
                        )
                      }
                      </span></div>
                      `
                    },
                    enabledOnSeries: [0],
                },
                annotations: {
                    points: [
                        {
                            x: lowIsInFirstHalf ? Math.max(low[0], minMts) : Math.min(low[0], maxMts),
                            y: low[1],
                            marker: {
                              size: 0,
                            },
                            label: {
                              borderColor: "#00000000",
                              offsetY: 26,
                              style: {
                                color: "#00000000",
                                background: "#00000000"
                              },
                              text: this.$options.filters.usd(low[1])
                            }
                        },
                        {
                            x: highIsInFirstHalf ? Math.max(high[0], minMts) : Math.min(high[0], maxMts),
                            y: high[1],
                            marker: {
                              size: 0,
                            },
                            label: {
                              borderColor: "#00000000",
                              offsetY: 4,
                              style: {
                                color: "#00000000",
                                background: "#00000000"
                              },
                              text: this.$options.filters.usd(high[1])
                            }
                        },
                    ]
                }
            }
        }
    },
    created() {
        this.subscribeCandles()
        this.fetchCandles()
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
