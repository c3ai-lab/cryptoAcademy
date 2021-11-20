<template>
  <div>
    <LineChartCard :title="$t('dashboard.portfolio_value')" :series="[]" />
  </div>
</template>

<script>
import Vue from "vue";

import LineChartCard from "../components/AreaChartCard.vue";

export default Vue.extend({
  name: "DashboardView",

  components: {
    LineChartCard,
  },
});
</script>