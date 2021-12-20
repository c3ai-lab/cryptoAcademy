<template>
  <div>
    <div style="padding: 14px 28px; margin-top: 70px;" v-if="1">
      <h1>{{ $t('wallet.total_wallet') }}</h1>

    </div>
    <div style="padding: 14px 28px; margin-top: 70px;" v-if="1">
    </div>
    <div style="padding: 14px 28px; margin-top: 70px;" v-if="1">
      <h1>{{ $t('wallet.all_transactions') }}</h1>
      <wallet-symbol-list :walletsymbolData="walletsymbolData"/>
      <h1>{{ $t('wallet.all_transactions') }}</h1>
      <transaction-card :symbol="symbol"/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TransactionCard from '../components/TransactionCard';
import WalletSymbolList from "../components/WalletSymbolList";

export default Vue.extend({
  name: "WalletView",
  data() {
    return {
      symbol: "all"
    }
  },
  components: {
    WalletSymbolList,
    TransactionCard,
  },

  computed: {
    /**
     * Total no. of records
     */
    walletsymbolData: function () {
      return this.$store.getters["wallet/getWalletsymbol"];
    },
  },
  mounted() {
    // Set the initial number of items
    this.$store.dispatch("wallet/fetchWalletsymbol");
  },
});
</script>
