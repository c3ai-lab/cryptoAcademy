<template>
  <LoadingStateWrapper :state="state" card>
    <div v-if="transactions.length === 0">
      <p class="text-center">
        {{ $t("wallet.no_transactions") }}
        <br />
        <router-link to="trading">
          {{ $t("wallet.buy_coins") }}
        </router-link>
      </p>
    </div>

    <b-card class="w-100" v-else>
      <b-tabs pillsF nav-class="bg-light rounded" content-class="mt-4">
        <b-tab :title="$t('trade.all')" active>
          <b-card-text>
            <transaction-list :transactions="transactions" />
          </b-card-text>
        </b-tab>
        <b-tab :title="$t('trade.bought')">
          <b-card-text>
            <transaction-list :transactions="bought" />
          </b-card-text>
        </b-tab>
        <b-tab :title="$t('trade.sold')">
          <b-card-text>
            <transaction-list :transactions="sold" />
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </LoadingStateWrapper>
</template>

<script>
import { ComponentState } from "../enums";
import { dispatchAll } from "../utils";
import LoadingStateWrapper from "../components/utils/LoadingStateWrapper.vue";
import TransactionList from "./TransactionList.vue";

export default {
  props: {
    symbol: String,
  },

  components: {
    LoadingStateWrapper,
    TransactionList,
  },

  data() {
    return {
      state: ComponentState.LOADING,
    };
  },

  computed: {
    transactions() {
      let request =
        this.symbol === "all"
          ? this.$store.getters["transactions/getTransactions"]
          : this.$store.getters["transactions/getTransactionsBySymbol"](
              this.symbol
            );
      return request.map((t) => ({
        ...t,
        color: t.quantity >= 0 ? "success" : "danger",
        date: new Date(t.bought_at).toLocaleDateString(),
        time: new Date(t.bought_at).toLocaleTimeString(),
        text: `${
          t.quantity >= 0 ? this.$t("trade.bought") : this.$t("trade.sold")
        } ${this.$options.filters.symbol(t.api_symbol)}`,
      }));
    },

    bought() {
      return this.transactions.filter((t) => t.quantity > 0);
    },

    sold() {
      return this.transactions.filter((t) => t.quantity < 0);
    },
  },

  async created() {
    this.state = await dispatchAll(this, "transactions/fetchTransactions");
  },
};
</script>

<style>
ul[role="tablist"] {
  justify-content: space-around;
}

li[role="presentation"] {
  flex-grow: 1;
}

a[role="tab"] {
  width: 100%;
  text-align: center;
  opacity: 70%;
}
</style>
