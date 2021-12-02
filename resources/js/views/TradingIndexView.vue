<template>
  <div>
    <div v-for="(coin, i) in all" :key="i">
      <coin-card-real-data
        :name="coin.name"
        :symbol="coin.api_symbol"
        :series="coin.series"
      />
    </div>
  </div>
</template>

<script>
import CoinCardRealData from '../components/CoinCardRealData.vue';
import { mapState } from 'vuex'

export default {
  components: {
    CoinCardRealData,
  },
  created() {
    this.$store.dispatch('coinIndex/fetchSymbols');
  },
  computed: {
    ...mapState('coinIndex', {
      all: state => state.all,
    }),
  },
}
</script>

<style>

</style>
