<template>
    <div v-if="isLoaded">
        <h1>{{symbol}}</h1>
        <apexchart
            class="apex-charts"
            type="line"
            dir=""
            :series="series"
            :options="chartOptions"
            ref="chart"
        ></apexchart>
        {{price}}
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
            isLoaded: false,
            price: null,
            symbol: 'BTCUSDT',
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
                    curve: 'straight',
                    width: 1.5,
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
        binanceWs.subscribeKlines(this.symbol, this.timeframe.symbol, 'spot')

        binanceWs.on('formattedMessage', (data) => {
            if (!Array.isArray(data)) {
                if (data.eventType === 'kline') {
                    this.price = data.kline.close

                    if(this.isLoaded) {
                        this.series[0].data = this.series[0].data.map(
                                x => data.kline.startTime === x[0] ? [ x[0], data.kline.close ] : x
                        )
                        console.log(this.series);
                        this.$refs.chart.updateSeries([{
                            data: this.series[0].data
                        }])
                    }

                    return
                }
            }
        })

        binanceRest.getKlines({
            symbol: this.symbol,
            interval: this.timeframe.symbol,
            limit: 20,
        }).then(response => {
            this.series[0].data = response.map(x => [x[0], x[3]])
            this.isLoaded = true
        }).catch(error => {
            alert(error)
        })
    }
}
</script>

<style>

</style>
