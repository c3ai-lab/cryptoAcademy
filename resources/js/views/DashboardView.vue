<template>
  <padded-layout>
    <div class="row">
      <div class="col-12 mb-4">
        <h1>{{ $t("dashboard.title") }}</h1>
        <ApexChartCard
          :title="$t('dashboard.portfolio_value')"
          :series="series"
        />
      </div>
      <div class="col-lg-6 mb-4">
        <h2>{{ $t("dashboard.favorites") }}</h2>
        <div v-if="favoriteCoins.length === 0">
          <p class="text-center">
            {{ $t("dashboard.no_favorites") }}<br />
            <router-link to="trading">
              {{ $t("dashboard.add_favorites") }}
            </router-link>
          </p>
        </div>
        <div v-if="favoriteCoins.length > 0">
          <CoinCardRealData
            v-for="coin in favoriteCoins"
            :key="coin.id"
            :id="coin.id"
            :name="coin.name"
            :symbol="coin.symbol"
            :series="coin.series"
            :isFavorite="coin.is_favorite"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <h2>{{ $t("dashboard.news") }}</h2>
        <div v-if="latestNews.length === 0">
          <p class="text-center">{{ $t("dashboard.no_news") }}</p>
        </div>
        <div v-if="latestNews.length > 0">
          <NewsCard
            v-for="article in latestNews"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
      <WelcomeModal v-if="isFirstVisit"/>
    </div>
  </padded-layout>
</template>

<script>
import ApexChartCard from "../components/ApexChartCard.vue";
import CoinCardRealData from "../components/CoinCardRealData.vue";
import NewsCard from "../components/NewsCard.vue";
import WelcomeModal from "../components/WelcomeModal.vue";

import { Coin } from "../enums";
import PaddedLayout from "../layouts/PaddedLayout.vue";
import { generateSampleSeries } from "../utils";

export default {
  name: "DashboardView",

  components: {
    PaddedLayout,
    WelcomeModal,
    ApexChartCard,
    CoinCardRealData,
    NewsCard,
  },

  data() {
    return {
      Coin,

      series: generateSampleSeries("Total"),
    };
  },

  computed: {
    latestNews() {
      return this.$store.getters["news/latest"](3);
    },
    favoriteCoins() {
      return this.$store.getters["coinIndex/favorites"]();
    },
    isFirstVisit() {
      return this.$store.getters["user/getUser"]().is_first_visit;
    }
  },

  created() {
    this.$store.dispatch("news/fetchLatest");
    this.$store.dispatch("coinIndex/fetchSymbols");
  },
};
</script>
