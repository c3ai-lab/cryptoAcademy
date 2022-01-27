<template>
  <LoadingStateWrapper :state="state">
    <div
      style="
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 80px !important;
        max-width: 1140px;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
      "
      class="row px-lg-5"
    >
      <h1 class="my-3 px-lg-0">
        <img
          class="logo"
          :src="`/images/coins/${symbol.replace('USDT', '').toLowerCase()}.png`"
        />
        {{ symbol | symbol }}
        <span class="text-muted name">{{ coinName }}</span>
        <i
          @click="toggleFavorite()"
          class="mdi ml-4 favorite"
          :class="[favoriteClasses]"
        />
      </h1>
      <div
        class="bg-white p-0"
        style="
          box-shadow: 0 1rem 1.5rem rgba(95, 95, 95, 0.13);
          border: 0 solid #f6f6f6;
          border-radius: 0.25rem;
        "
      >
        <div>
          <div>
            <NicePrice
              style="font-size: 20px"
              :value="currentPrice"
              currency="eur"
              class="px-3"
            />
          </div>
        </div>
        <MainChart :series="series" :mtsPerTimestep="mtsPerCandle" />
        <div
          style="
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0 28px;
            max-width: 768px;
            margin: 0 auto;
          "
        >
          <b-button-group class="flex-grow-1 pb-3">
            <b-button
              v-for="(resolution, i) in resolutions"
              :key="i"
              class="min-w-20 dim-btn"
              :class="{ 'active-resolution': resolution === activeResolution }"
              @click="setResolution(resolution)"
            >
              {{ $t(`resolution.${resolution}`) }}
            </b-button>
          </b-button-group>
        </div>
      </div>

      <b-row class="no-padding mt-4">
        <b-col cols="12" md="6">
          <h2>{{ $t("wallet.user_balance") }}</h2>
          <UserCreditCard />
        </b-col>
        <b-col cols="12" md="6">
          <h2>{{ $t("wallet.wallet") }}</h2>
          <WalletCoinQuantityCard :symbol="symbol" />
        </b-col>
      </b-row>

      <TradingBuyView :price="currentPrice" />
      <!-- <TransactionCard :symbol="symbol" /> -->
    </div>
  </LoadingStateWrapper>
</template>

<style lang="scss" scoped>
.no-padding {
  padding: 0;

  div:first-of-type {
    padding-left: 0;
  }
  div:last-of-type {
    padding-right: 0;
  }
}

.logo {
  display: inline-block;
  margin: -0.2rem 0.2rem 0.25rem 0.75rem;
  height: 2.5rem;
  width: 2.5rem;
}

.favorite {
  cursor: pointer;
  font-size: 2rem;
  margin-left: 0.5rem;
}

.dim-btn {
  background-color: #eff2f7 !important;
  border: none;
  color: var(--bs-gray-500) !important;
}
.dim-btn:focus,
.dim-btn:focus-visible {
  outline: none !important;
}

.active-resolution {
  background-color: #eff2f760 !important;
  color: var(--bs-gray-900) !important;
}

span.name {
  display: inline-block;
  vertical-align: top;
  font-size: 1.2rem;
  margin-top: 0.3rem;
}
</style>

<script>
import { ComponentState, Resolution } from "../enums";
import { dispatchAll } from "../utils";
import { RESOLUTION_TIMEFRAME_MTS_MAP } from "../constants";
import LoadingStateWrapper from "../components/utils/LoadingStateWrapper.vue";
import MainChart from "../components/MainChart.vue";
import TransactionCard from "../components/TransactionCard.vue";
import PaddedLayout from "../layouts/PaddedLayout.vue";
import TradingBuyView from "../components/TradingCard.vue";
import UserCreditCard from "../components/UserCreditCard.vue";
import WalletCoinQuantityCard from "../components/WalletCoinQuantityCard.vue";

export default {
  props: {
    symbol: String,
  },

  components: {
    LoadingStateWrapper,
    MainChart,
    TransactionCard,
    PaddedLayout,
    TradingBuyView,
    UserCreditCard,
    WalletCoinQuantityCard,
  },

  data() {
    return {
      state: ComponentState.LOADING,

      lineColor: "#f1b44c",
      activeResolution: Resolution.ONE_DAY,
      resolutions: Object.values(Resolution),
    };
  },

  computed: {
    coin() {
      return this.$store.getters["coins/bySymbol"](this.symbol);
    },

    coinName() {
      return this.coin == null ? "" : this.coin.name;
    },

    balance() {
      if (this.coin == null) return 0;
      return this.coin.user_quantity;
    },

    prices() {
      const prices = this.$store.getters["prices/detailedByResolution"](
        this.activeResolution
      );
      return prices == null ? [] : prices.data;
    },

    currentPrice() {
      if (this.prices.length === 0) return 0;
      return this.prices[this.prices.length - 1][1];
    },

    series() {
      const series = this.$store.getters["prices/detailedByResolution"](
        this.activeResolution
      );
      return series == null ? [] : series.data;
    },

    mtsPerCandle() {
      return RESOLUTION_TIMEFRAME_MTS_MAP[this.activeResolution];
    },

    favoriteClasses() {
      if (this.coin == null || !this.coin.is_favorite) {
        return "mdi-heart-outline";
      }
      return "mdi-heart text-danger";
    },
  },

  async mounted() {
    this.state = await dispatchAll(this, "coins/fetchAll", [
      "prices/fetchDetailedForSymbol",
      this.symbol,
    ]);
  },

  methods: {
    toggleFavorite() {
      if (this.coin.is_favorite) {
        this.$store.dispatch("coins/removeFavorite", this.coin.symbol);
      } else {
        this.$store.dispatch("coins/addFavorite", this.coin.symbol);
      }
    },

    setResolution(resolution) {
      this.activeResolution = resolution;
    },
  },
};
</script>
