<template>

  <div class="card">
    <div class="card-body">
      <h2 class="card-title mb-3">{{ title }}</h2>
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
      <div>
        <div id="overview-chart" class="apex-charts" dir="ltr">
          <apexchart
            ref="chart"
            type="area"
            :height="250"
            class="apex-charts"
            :options="chartOptions"
            :series="series"
          />
        </div>
      </div>
        <div class="toolbar button-items text-center">
          <button
            id="one_month"
            class="btn btn-light btn-sm"
            @click="setTimeFrame(TimeFrame.ONE_MONTH)"
            :class="{ active: timeFrame === TimeFrame.ONE_MONTH }"
          >
            1{{ $t("datetime.month_short") }}
          </button>

          <button
            id="six_months"
            class="btn btn-light btn-sm"
            @click="setTimeFrame(TimeFrame.SIX_MONTHS)"
            :class="{ active: timeFrame === TimeFrame.SIX_MONTHS }"
          >
            6{{ $t("datetime.month_short") }}
          </button>

          <button
            id="one_year"
            class="btn btn-light btn-sm"
            @click="setTimeFrame(TimeFrame.ONE_YEAR)"
            :class="{ active: timeFrame === TimeFrame.ONE_YEAR }"
          >
            1{{ $t("datetime.year_short") }}
          </button>

          <button
            id="all"
            class="btn btn-light btn-sm"
            @click="setTimeFrame(TimeFrame.ALL)"
            :class="{ active: timeFrame === TimeFrame.ALL }"
          >
            {{ $t("datetime.all") }}
          </button>
        </div>
      </div>
    </div>

</template>

<script>
import Vue from "vue";

import { TimeFrame } from "../enums";
import { APEXCHART_OPTIONS } from "../constants";

export default Vue.extend({
  name: "ApexChartCard",

  props: {
    title: String,

    /**
     * [
     *   {
     *     name: "COIN",
     *     data: [
     *       [MTS, VALUE],
     *       [MTS, VALUE],
     *       ...
     *     ],
     *   },
     *   ...
     * ],
     */
    series: Array,
  },

  data: function () {
    return {
      TimeFrame,

      timeFrame: TimeFrame.ONE_MONTH,
    };
  },

  computed: {
    chartOptions: function () {
      let options = APEXCHART_OPTIONS;

      options.chart.type = "area";
      options.chart.height = 250;

      return options;
    },
  },

  methods: {
    setTimeFrame: function (timeFrame) {
      this.timeFrame = timeFrame;
    },
  },
});
</script>

