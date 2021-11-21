<template>
  <div>
    <h1>{{ $t("dashboard.title") }}</h1>
    <ApexChartCard :title="$t('dashboard.portfolio_value')" :series="series" />

    <CoinCard :coin="Coin.BTC" />
    <CoinCard :coin="Coin.ETH" />

    <h2>{{ $t("dashboard.news") }}</h2>
    <NewsCard :title="newsTitle" :text="newsText" />
    <NewsCard :title="newsTitle" :text="newsText" />
    <NewsCard :title="newsTitle" :text="newsText" />
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
        "der Blindtext. Genau zu diesem Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum«, " +
        "freue ich mich jedes Mal, wenn Sie ein paar Zeilen lesen.",
    };
  },
};
</script>