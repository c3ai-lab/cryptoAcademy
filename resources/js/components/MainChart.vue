<template>
  <div>
    <apexchart
      class="apex-charts"
      type="line"
      dir=""
      :series="_series"
      :options="chartOptions"
      ref="chart"
    >
    </apexchart>
  </div>
</template>

<script>
export default {
  props: {
    series: Array
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
      },
    },
  }
}
</script>

<style>

</style>
