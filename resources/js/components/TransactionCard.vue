<template>
  <b-card class="w-100">
      <b-tabs
        pills
        nav-class="bg-light rounded"
        content-class="mt-4"
      >
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
</template>

<script>
import TransactionList from './TransactionList.vue';

export default {
  props: {
    symbol: String,
  },
  components: {
    TransactionList,
  },
  mounted() {
    this.$store.dispatch('transactions/fetchTransactions');
  },
  computed: {
    transactions() {
      return this.$store
        .getters['transactions/getTransactionsBySymbol'](this.symbol)
        .map(t => ({
          ...t,
          color: t.quantity >= 0 ? 'success' : 'danger',
          date: new Date(t.bought_at).toLocaleDateString(),
          time: new Date(t.bought_at).toLocaleTimeString(),
          text: `${t.quantity >= 0 ? this.$t('trade.buy') : this.$t('trade.sell')} ${this.$options.filters.symbol(this.symbol)}`,
        }))
    },
    bought() {
      return this.transactions.filter(t => t.quantity > 0);
    },
    sold() {
      return this.transactions.filter(t => t.quantity < 0);
    },
  },
}
</script>

<style>
  ul[role=tablist] {
    justify-content: space-around;
  }
  li[role=presentation] {
    flex-grow: 1;
  }
  a[role=tab] {
    width: 100%;
    text-align: center;
    opacity: 70%;
  }
</style>
