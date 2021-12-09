<template>
  <b-button @click="back">
        <i
          class="mdi h2 align-middle mb-0 me-3 mdi-chevron-left"
        ></i>
  </b-button>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
