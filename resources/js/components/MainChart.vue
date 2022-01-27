<template>
  <div>
    <apexchart
      class="apex-charts"
      type="line"
      dir=""
      :series="_series"
      :options="chartOptions"
      ref="chart"
      height="300px"
    />
  </div>
</template>

<script>
export default {
  props: {
    series: Array,
    mtsPerTimestep: Number,
  },

  computed: {
    showAxis() {
      const user = this.$store.getters["user/getUser"]();
      return user.axis.x || user.axis.y;
    },

    loaded() {
      return this.series.length > 0;
    },
    _series() {
      if (!this.loaded) {
        return [];
      }
      const newSeries = [
        { data: this.series },
        { data: this.series.map((x) => [x[0], x[1] * 1.003]) },
        { data: this.series.map((x) => [x[0], x[1] * 0.995]) },
      ];

      return newSeries;
    },
    high() {
      if (!this.loaded) return null;

      return this.series.reduce((prev, current) =>
        prev[1] > current[1] ? prev : current
      );
    },
    low() {
      if (!this.loaded) return null;

      return this.series.reduce((prev, current) =>
        prev[1] < current[1] ? prev : current
      );
    },
    minMts() {
      if (!this.loaded) return null;

      return this.series[0][0] + this.offset;
    },
    maxMts() {
      if (!this.loaded) return null;

      return this.series[this.series.length - 1][0] - this.offset;
    },
    lowIsInFirstHalf() {
      if (!this.loaded) return null;

      return (
        Math.abs(this.low[0] - this.series[0][0]) <=
        Math.abs(this.low[0] - this.series[this.series.length - 1][0])
      );
    },
    highIsInFirstHalf() {
      if (!this.loaded) return null;

      return (
        Math.abs(this.high[0] - this.series[0][0]) <=
        Math.abs(this.high[0] - this.series[this.series.length - 1][0])
      );
    },
    offset() {
      if (!this.loaded) return null;

      const lenOfPrice = Math.max(
        this.$options.filters.eur(this.high).length,
        this.$options.filters.eur(this.low).length
      );
      const offset = 0.25 + (lenOfPrice > 7 ? (lenOfPrice - 7) * 0.02 : 0);
      return Math.ceil(this.series.length * offset) * this.mtsPerTimestep;
    },

    chartOptions() {
      if (!this.loaded) return null;

      return {
        chart: {
          yaxis: {
            show: true,
          },
          type: "line",
          height: "400px",
          sparkline: {
            enabled: !this.showAxis,
          },
          toolbar: {
            show: false,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
            },
          },
        },
        yaxis: {
          labels: {
            formatter: (value) => this.$options.filters["eur"](value),
          },
        },
        xaxis: {
          type: "datetime",
          datetimeFormatter: {
            year: "yyyy",
            month: "MMM 'yy",
            day: "dd MMM",
            hour: "HH:mm",
          },
        },
        legend: {
          show: false,
        },
        grid: {
          show: false,
        },
        animations: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        colors: ["#f1b44c", "#f1b44c00", "#f1b44c00"],

        tooltip: {
          custom: ({ series, seriesIndex, dataPointIndex, w }) => {
            return `
                <div class="arrow_box"><span>
                ${this.$options.filters.eur(
                  series[seriesIndex][dataPointIndex]
                )}
                </span></div>
                `;
          },
          enabledOnSeries: [0],
        },
        annotations: {
          points: [
            {
              x: this.lowIsInFirstHalf
                ? Math.max(this.low[0], this.minMts)
                : Math.min(this.low[0], this.maxMts),
              y: this.low[1],
              marker: {
                size: 0,
              },
              label: {
                borderColor: "#00000000",
                offsetY: 26,
                style: {
                  color: "#00000000",
                  background: "#00000000",
                },
                text: this.$options.filters.eur(this.low[1]),
              },
            },
            {
              x: this.highIsInFirstHalf
                ? Math.max(this.high[0], this.minMts)
                : Math.min(this.high[0], this.maxMts),
              y: this.high[1],
              marker: {
                size: 0,
              },
              label: {
                borderColor: "#00000000",
                offsetY: 4,
                style: {
                  color: "#00000000",
                  background: "#00000000",
                },
                text: this.$options.filters.eur(this.high[1]),
              },
            },
          ],
        },
      };
    },
  },
};
</script>
