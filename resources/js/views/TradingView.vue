<template>
    <div v-if="hasLoadedSeries">
        <h1>
            <b-form-select
                v-model="symbol"
                :options="symbols"
                style="background: none; outline: none; border: none;"
                @change="onSymbolChange"
            ></b-form-select>
        </h1>
        <div v-if="hasLoadedPrice" style="margin-left: 6px; font-size: 16px">
        {{price | usd}}
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
            <button v-for="(dimension, i) in dimensions" :key="i" class="btn">
                {{dimension}}
            </button>
        </div>
    </div>
</template>

<script>
import { WebsocketClient } from 'binance';
import { MainClient } from 'binance';

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
            hasLoadedSeries: false,
            hasLoadedPrice: false,
            price: null,
            dimensions: [
                '1H',
                '1D',
                '1W',
                '1M',
                'All',
            ],
            wsKey: null,
            symbol: 'BTCUSDT',
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
            series: [{
                data: null,
            }],
        }
    },

    computed: {
        chartOptions() {
            return {
               chart: {
                    width: '100%',
                    type: 'line',
                    toolbar: {
                        show: false,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 2,
                    dashArray: [0, 0, 3]
                },
                fill: {
                    type: 'solid',
                    opacity: [1],
                },
                xaxis: {
                    type: 'datetime',
                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                colors: ['#3452e1'],
                tooltip: {
                    x: {
                        show: true,
                        format: this.timeframe.format,
                        formatter: undefined,
                    },
                    y: {
                        formatter: undefined,
                        title: {
                            formatter: (seriesName) => seriesName,
                        },
                    },
                },
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                    speed: 1000
                    }
                },
            }
        }
    },
    created() {
        this.subscribeCandles()
        this.fetchCandles()
    },
    methods: {
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
                        console.log(this.wsKey);
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
                this.series[0].data = response.map(x => [x[0], x[3]])
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
