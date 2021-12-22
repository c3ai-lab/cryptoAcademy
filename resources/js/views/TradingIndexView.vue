<template>
  <!-- <div style="background: #f5f5f5"> -->
    <padded-layout>
      <div class="row">
      <div
        v-for="(coin, i) in all"
        :key="i" class="col-md-6"
      >
        <coin-card-real-data
          :name="coin.name"
          :symbol="coin.symbol"
          :series="coin.series"
          :isFavorite="coin.is_favorite"
          :id="coin.id" 
        />
      </div>
    </div>
  </padded-layout>
</template>

<script>
import CoinCardRealData from '../components/CoinCardRealData.vue';
import { mapState } from 'vuex'
import PaddedLayout from '../layouts/PaddedLayout.vue';

export default {
  components: {
    CoinCardRealData,
    PaddedLayout,
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
