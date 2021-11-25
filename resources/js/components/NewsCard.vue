<template>
  <b-card no-body class="main">
    <b-card-body>
      <b-card-title>
        <h4 class="card-title">{{ title }}</h4>
      </b-card-title>
      <b-card-text>
        {{ text }}
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<style lang="scss" scoped>
.main {
  cursor: pointer;
}
</style>

<script>
export default {
  name: "NewsCard",

  props: {
    title: String,
    text: String,
  },
};
</script>