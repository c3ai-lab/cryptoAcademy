<template>
  <PaddedLayout>
    <h1>{{ $t("wallet.total_value") }}</h1>
    <TotalBalanceCard />

    <h2>{{ $t("wallet.wallet_list") }}</h2>
    <WalletSymbolList :wallets="wallets" />

    <h2>{{ $t("wallet.transaction_histroy") }}</h2>
    <TransactionCard :symbol="'all'" />
  </PaddedLayout>
</template>

<script>
import PaddedLayout from "../layouts/PaddedLayout.vue";
import TotalBalanceCard from "../components/TotalBalanceCard.vue";
import TransactionCard from "../components/TransactionCard.vue";
import WalletSymbolList from "../components/WalletSymbolList.vue";

export default {
  name: "WalletView",

  components: {
    PaddedLayout,
    TotalBalanceCard,
    TransactionCard,
    WalletSymbolList,
  },

  computed: {
    wallets() {
      return this.$store.getters["wallets/all"]();
    },
  },

  created() {
    this.$store.dispatch("wallets/fetchAll");
  },
};
</script>
