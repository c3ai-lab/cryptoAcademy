<template>
  <PaddedLayout>
    <h1>{{ $t("navigation.trading") }}</h1>
    <div class="row">
      <div v-for="(coin, i) in coins" :key="i" class="col-md-6">
        <CoinCard :symbol="coin.symbol" />
      </div>
    </div>
  </PaddedLayout>
</template>

<script>
import PaddedLayout from "../layouts/PaddedLayout.vue";
import CoinCard from "../components/CoinCard.vue";

export default {
  components: {
    PaddedLayout,
    CoinCard,
  },

  computed: {
    coins() {
      return this.$store.getters["coins/all"]();
    },
  },

  async created() {
    await this.$store.dispatch("coins/fetchAll");
  },
};
</script>
