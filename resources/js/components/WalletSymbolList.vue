<template>
  <div class="w-100 hidden-scroll" style="max-height: 400px; overflow: scroll;">
    <div
      v-for="walletsymbol of walletsymbols"
      class="d-flex flex-wrap justify-content-between text-muted"
      role="button"
    >
      <div>{{ walletsymbol.user_quantity }}</div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      "walletsymbols": this.$store.getters["wallet/walletsymbol"]
    }
  },
  created() {
    this.walletsymbols = this.$store.dispatch('wallet/walletsymbol');
    console.log(this.walletsymbols.length)
  }
}
</script>

<style>
.hidden-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.hidden-scroll::-webkit-scrollbar {
  display: none;
}
</style>
