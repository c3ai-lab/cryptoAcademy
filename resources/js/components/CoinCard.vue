<template>
  <LoadingStateWrapper :state="state" card>
    <div class="card coin-card" @click="showDetails">
      <div class="card-body coin-card-body">
        <div class="row" style="font-size: 24px">
          <div class="col-6 icon-wrapper" style="display: flex">
            <img
              class="coin-card-icon"
              :src="`/images/coins/${this.coin.symbol
                .replace('USDT', '')
                .toLowerCase()}.png`"
            />
            {{ this.coin.symbol | symbol }}
            <span
              class="text-muted"
              style="font-size: 13px; margin-top: 9px; margin-left: 6px"
            >
              {{ this.coin.name }}
            </span>
          </div>
          <div
            class="col-6"
            style="
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <div
              class="text-muted text-truncate mb-0"
              style="font-size: 13px; margin-right: 0.5rem"
            >
              <span>{{ absoluteChange | change }}&euro;</span>
              <span>( {{ relativeChange | change }}% )</span>
              <i class="mdi ml-1" :class="[arrowClasses]" />
            </div>

            <i
              @click.stop="toggleFavorite"
              class="mdi ml-4"
              :class="[favoriteClasses]"
              style="font-size: 24px"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <div>
              <nice-price
                style="font-size: 20px"
                :value="currentPrice"
                currency="eur"
              />
            </div>
          </div>
          <div class="col-6">
            <div style="position: relative"></div>
          </div>
        </div>
      </div>
      <div
        style="
          position: absolute;
          width: 100%;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 2em;
        "
      >
        <apexchart
          class="apex-charts"
          :height="50"
          width="100%"
          :options="chartOptions"
          :series="series"
        />
      </div>
    </div>
  </LoadingStateWrapper>
</template>

<style>
.coin-card {
  cursor: pointer;
  border-radius: 0em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0 1px 2px rgba(95, 95, 95, 0.2);
}

.coin-card-body {
  padding: 8px 12px 8px 12px;
}

.coin-card-icon {
  display: inline-block;
  margin: 0.5rem 0.6rem 0 0;
  width: 1.75rem;
  height: 1.75rem;
}
</style>

<script>
import { COIN_CARD_APEXCHART_OPTIONS } from "../constants";
import { ComponentState } from "../enums";
import { dispatchAll } from "../utils";
import LoadingStateWrapper from "../components/utils/LoadingStateWrapper.vue";

export default {
  name: "CoinCard",

  props: {
    symbol: String,
  },

  components: {
    LoadingStateWrapper,
  },

  async created() {
    this.state = await dispatchAll(this, "prices/fetchAll", "coins/fetchAll");
  },

  data() {
    return {
      state: ComponentState.LOADING,
    };
  },

  computed: {
    coin() {
      return this.$store.getters["coins/bySymbol"](this.symbol);
    },

    prices() {
      const prices = this.$store.getters["prices/bySymbol"](this.symbol);
      return prices == null ? [] : prices.data;
    },

    currentPrice() {
      if (this.prices.length === 0) return 0;
      return this.prices[this.prices.length - 1][1];
    },

    absoluteChange() {
      if (this.prices.length < 2) return 0;
      return this.prices[this.prices.length - 1][1] - this.prices[0][1];
    },

    relativeChange() {
      if (this.prices.length < 2) return 0;
      return (
        (this.prices[this.prices.length - 1][1] / this.prices[0][1] - 1) * 100
      );
    },

    series() {
      const series = this.$store.getters["prices/bySymbol"](this.symbol);
      return series == null ? [{ data: [] }] : [series];
    },

    chartOptions() {
      return {
        ...COIN_CARD_APEXCHART_OPTIONS,
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 0,
            opacityFrom: 0.5,
            opacityTo: 0.4,
            stops: [0, 60],
          },
        },
        tooltip: {
          enabled: false,
        },
        colors: ["#556ee6"],
      };
    },

    arrowClasses() {
      return this.absoluteChange >= 0
        ? "mdi-arrow-up text-success"
        : "mdi-arrow-down text-danger";
    },

    favoriteClasses() {
      return this.coin.is_favorite
        ? "mdi-heart text-danger"
        : "mdi-heart-outline";
    },
  },

  methods: {
    toggleFavorite() {
      if (this.coin.is_favorite) {
        this.$store.dispatch("coins/removeFavorite", this.coin.symbol);
      } else {
        this.$store.dispatch("coins/addFavorite", this.coin.symbol);
      }
    },

    showDetails() {
      this.$router.push({
        name: "trading.show",
        params: { symbol: this.symbol },
      });
    },
  },
};
</script>
