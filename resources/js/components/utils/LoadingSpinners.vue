<template>
  <div>
    <b-spinner type="grow" variant="primary" class="spinner" />
    <b-spinner type="grow" variant="primary" class="spinner delayed" />
    <b-spinner type="grow" variant="primary" class="spinner" />
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  height: 1rem;
  width: 1rem;
}
.delayed {
  animation-delay: -0.35s;
}
</style>

<script>
export default {
  name: "LoadingSpinners",
};
</script>