<template>
  <b-card no-body class="main" @click="open()">
    <b-card-body>
      <b-card-title>
        <h4 class="card-title">{{ title }}</h4>
      </b-card-title>
      <b-card-text> {{ source }} &ndash; {{ datetime }} </b-card-text>
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
    article: Object,
  },

  computed: {
    title: function () {
      return this.article.newsitem.title;
    },
    source: function () {
      return this.article.newsitem.source.title;
    },
    url: function () {
      return this.article.newsitem.url;
    },
    datetime: function () {
      return new Date(this.article.updated_at).toLocaleString("de-DE");
    },
  },

  methods: {
    open: function () {
      window.open(this.url, "_blank").focus();
    },
  },
};
</script>