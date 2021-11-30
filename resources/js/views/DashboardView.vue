<template>
  <div class="row">
    <div class="col-12 mb-4">
      <h1>{{ $t("dashboard.title") }}</h1>
      <ApexChartCard
        :title="$t('dashboard.portfolio_value')"
        :series="series"
      />
    </div>
    <div class="col-lg-6 mb-4">
      <h2>{{ $t("dashboard.coins") }}</h2>
      <CoinCard :coin="Coin.BTC" />
      <CoinCard :coin="Coin.ETH" />
    </div>
    <div class="col-lg-6">
      <h2>{{ $t("dashboard.news") }}</h2>
      <NewsCard
        v-for="article in latestNews"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>

<script>
import ApexChartCard from "../components/ApexChartCard.vue";
import CoinCard from "../components/CoinCard.vue";
import NewsCard from "../components/NewsCard.vue";

import { Coin } from "../enums";
import { generateSampleSeries } from "../utils";

export default {
  name: "DashboardView",

  components: {
    ApexChartCard,
    CoinCard,
    NewsCard,
  },

  data: function () {
    return {
      Coin,

      series: generateSampleSeries("Total"),
      latestNews: this.$store.getters["news/latest"](3),
    };
  },

  created: function () {
    this.$store.dispatch("news/fetchLatest");
  },
};
</script>