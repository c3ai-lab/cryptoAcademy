<template>
  <PaddedLayout>
    <b-row>
      <b-col>
        <h1>{{ $t("wallet.total_value") }}</h1>
        <TotalCoinValueCard />
      </b-col>
      <b-col>
        <h1>{{ $t("wallet.user_balance") }}</h1>
        <UserBalanceCard />
      </b-col>
    </b-row>

    <h2>{{ $t("wallet.wallet_list") }}</h2>
    <WalletSymbolList :wallets="wallets" />

    <h2>{{ $t("wallet.transaction_histroy") }}</h2>
    <TransactionCard :symbol="'all'" />
  </PaddedLayout>
</template>

<script>
import PaddedLayout from "../layouts/PaddedLayout.vue";
import TotalCoinValueCard from "../components/TotalCoinValueCard.vue";
import UserBalanceCard from "../components/UserBalanceCard.vue";
import WalletSymbolList from "../components/WalletSymbolList.vue";
import TransactionCard from "../components/TransactionCard.vue";

export default {
  name: "WalletsView",

  components: {
    PaddedLayout,
    TotalCoinValueCard,
    UserBalanceCard,
    WalletSymbolList,
    TransactionCard,
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
