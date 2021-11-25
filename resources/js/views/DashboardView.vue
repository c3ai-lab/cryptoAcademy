<template>
  <div class="row">
    <div class="col-12 mb-4 ">
      <h1>{{ $t("dashboard.title") }}</h1>
      <ApexChartCard :title="$t('dashboard.portfolio_value')" :series="series" />
    </div>
    <div class="col-lg-6 mb-4">
      <h2>{{ $t("dashboard.coins") }}</h2>
      <CoinCard :coin="Coin.BTC" />
      <CoinCard :coin="Coin.ETH" />
    </div>
    <div class="col-lg-6">
    <h2>{{ $t("dashboard.news") }}</h2>
      <NewsCard :title="newsTitle" :text="newsText" />
      <NewsCard :title="newsTitle" :text="newsText" />
      <NewsCard :title="newsTitle" :text="newsText" />
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

      newsTitle: "Ich bin ein toller Titel",
      newsText:
        "Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf sich warten. " +
        "Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt, springe ich ein: " +
        "der Blindtext.",
    };
  },
};
</script>