<template>
  <div class="container px-lg-5">
    <div class="row">
      <div class="col-12 mt-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 80px !important;
}
</style>

<script>
export default {
  name: "PaddedLayout",
};
</script>
