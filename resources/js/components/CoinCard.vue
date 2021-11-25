<template>
  <div class="card">
    <div class="card-body">
      <p class="text-muted mb-4">
        <i
          class="mdi h2 align-middle mb-0 me-3"
          :class="[iconClass]"
          :style="{ color: coinColor }"
        ></i>
        {{ $t(`coins.${coin}.name`) }}
      </p>

      <div class="row">
        <div class="col-6">
          <div>
            <h5>$ {{ currentValue }}</h5>
            <p class="text-muted text-truncate mb-0">
              {{ absoluteChange >= 0 ? `+${absoluteChange}` : absoluteChange }}
              (
              {{ relativeChange >= 0 ? `+${relativeChange}` : relativeChange }}%
              )

              <i class="mdi ml-1" :class="[arrowClasses]"></i>
            </p>
          </div>
        </div>
        <div class="col-6">
          <div>
            <apexchart
              class="apex-charts"
              :height="50"
              :options="chartOptions"
              :series="series"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Coin } from "../enums";
import { COIN_CARD_APEXCHART_OPTIONS } from "../constants";
import { generateSampleSeries } from "../utils";

export default {
  name: "CoinCard",

  props: {
    coin: String,
  },

  data: function () {
    return {
      series: generateSampleSeries(this.coin),
    };
  },

  computed: {
    currentValue: function () {
      const data = this.series[0].data;
      return data[data.length - 1][1];
    },
    absoluteChange: function () {
      const data = this.series[0].data;
      const absoluteChange = data[data.length - 1][1] - data[0][1];
      return absoluteChange.toFixed(2);
    },
    relativeChange: function () {
      const data = this.series[0].data;
      const relativeChange = (data[data.length - 1][1] / data[0][1] - 1) * 100;
      return relativeChange.toFixed(2);
    },

    chartOptions: function () {
      return {
        ...COIN_CARD_APEXCHART_OPTIONS,

        colors: [this.coinColor],
      };
    },

    iconClass: function () {
      switch (this.coin) {
        case Coin.BTC:
          return "mdi-bitcoin";
        case Coin.ETH:
          return "mdi-ethereum";
      }
    },
    coinColor: function () {
      switch (this.coin) {
        case Coin.BTC:
          return "#f7931a";
        case Coin.ETH:
          return "#3c3c3d";
      }
    },
    arrowClasses: function () {
      if (this.absoluteChange >= 0) {
        return "mdi-arrow-up text-success";
      } else {
        return "mdi-arrow-down text-danger";
      }
    },
  },
};
</script>