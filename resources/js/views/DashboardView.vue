<template>
  <padded-layout>
    <div class="row">
      <div class="col-12 mb-4">
        <h1>{{ $t("dashboard.title") }}</h1>
        <b-card>
          <div class="text-center">
            <p>
              {{ $t("dashboard.welcome_text") }}
              <br />
              <router-link to="academy">
                {{ $t("dashboard.welcome_modal.academy_now") }}
              </router-link>
            </p>
            <p>
              {{ $t("dashboard.welcome_text2") }}
              <br />
              <router-link to="trading">
                {{ $t("dashboard.welcome_modal.trade_now") }}
              </router-link>
            </p>
          </div>
        </b-card>
      </div>
      <b-row>
        <b-col class="clickable" @click="openWalletsView">
          <h1>{{ $t("wallet.total_value") }}</h1>
          <TotalCoinValueCard />
        </b-col>
        <b-col class="clickable" @click="openWalletsView">
          <h1>{{ $t("wallet.user_balance") }}</h1>
          <UserCreditCard />
        </b-col>
      </b-row>
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
        <div v-else>
          <CoinCard
            v-for="coin in favoriteCoins"
            :key="coin.id"
            :symbol="coin.symbol"
          />
        </div>
      </div>
      <div class="col-lg-6">
        <h2>{{ $t("dashboard.news") }}</h2>
        <div v-if="latestNews.length === 0">
          <p class="text-center">{{ $t("dashboard.no_news") }}</p>
        </div>
        <div v-else>
          <NewsCard
            v-for="article in latestNews"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
      <WelcomeModal v-if="isFirstVisit" />
    </div>
  </padded-layout>
</template>

<script>
import CoinCard from "../components/CoinCard.vue";
import NewsCard from "../components/NewsCard.vue";
import WelcomeModal from "../components/WelcomeModal.vue";
import TotalCoinValueCard from "../components/TotalCoinValueCard.vue";
import UserCreditCard from "../components/UserCreditCard.vue";

import { Coin } from "../enums";
import PaddedLayout from "../layouts/PaddedLayout.vue";

export default {
  name: "DashboardView",

  components: {
    PaddedLayout,
    WelcomeModal,
    TotalCoinValueCard,
    UserCreditCard,
    CoinCard,
    NewsCard,
  },

  data() {
    return {
      Coin,
    };
  },

  computed: {
    latestNews() {
      return this.$store.getters["news/latest"](3);
    },

    favoriteCoins() {
      return this.$store.getters["coins/favorites"]();
    },

    isFirstVisit() {
      return this.$store.getters["user/getUser"]().is_first_visit;
    },
  },

  created() {
    this.$store.dispatch("news/fetchLatest");
    this.$store.dispatch("coins/fetchAll");
  },

  methods: {
    openWalletsView() {
      this.$router.push({ name: "wallets" });
    },
  },
};
</script>

<style lang="scss" scoped>
.clickable {
  cursor: pointer;
}
</style>
