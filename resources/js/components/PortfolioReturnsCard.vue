<template>
  <div class="card">
    <div class="card-body" v-if="user.sold_symbols">
      <b-tabs pillsF nav-class="bg-light rounded" content-class="mt-4">
        <b-tab :title="$t('dashboard.portfolio_value')" active>
          <b-card-text>
            <ApexChart :series="portfolioSeries" />
          </b-card-text>
        </b-tab>

        <b-tab :title="$t('dashboard.returns')">
          <b-card-text v-if="isLoaded" class="d-flex flex-column">
            <b-form-select
              v-model="selectedReturnsSymbol"
              :options="returnSymbolOptions"
              class="form-control form-select form-select-md mb-3"
              id="asset"
            />
            <ApexChart :series="returnsSeries" />
          </b-card-text>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { generateSampleSeries } from "../utils";
import ApexChart from "../components/ApexChart.vue";

export default {
  components: {
    ApexChart,
  },

  data() {
    return {
      portfolioSeries: generateSampleSeries("Total"),
      selectedReturnsSymbol: null,
      returnSymbolOptions: null,
      isLoaded: false,
    };
  },

  computed: {
    returnsSeries() {
      if (this.isLoaded) {
        return [
          {
            name: this.selectedReturnsSymbol.name,
            data: this.selectedReturnsData.map((entry) => [
              entry.made_at,
              entry.profit_loss_euro,
            ]),
          },
        ];
      }
      return [];
    },

    selectedReturnsData() {
      if (
        this.selectedReturnsSymbol.name == this.getAllReturnsOption().value.name
      ) {
        return this.$store.getters["transactions/getReturns"]();
      } else {
        return this.$store.getters["transactions/getTransactionsBySymbol"](
          this.selectedReturnsSymbol.api_symbol
        );
      }
    },

    user() {
      return this.$store.getters["user/getUser"]();
    },

    returnsSymbols() {
      if (this.user) {
        return this.user.sold_symbols;
      }

      return [];
    },
  },

  async created() {
    await this.$store.dispatch("transactions/fetchReturns");

    for (const idx in this.returnsSymbols) {
      await this.$store.dispatch("transactions/fetchReturnsPerSymbol", {
        symbol: this.returnsSymbols[idx],
      });
    }
    this.returnSymbolOptions = this.getOptions();
    this.selectedReturnsSymbol = this.returnSymbolOptions[0].value;

    this.isLoaded = true;
  },

  methods: {
    getAllReturnsOption() {
      return {
        value: { name: this.$t("common.all") },
        text: this.$t("common.all"),
      };
    },

    getOptions() {
      return [
        this.getAllReturnsOption(),
        ...this.returnsSymbols.map((symbol) => ({
          value: symbol,
          text: symbol.name,
        })),
      ];
    },
  },
};
</script>
