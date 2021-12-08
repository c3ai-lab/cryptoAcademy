<template>
  <b-card no-body class="main" @click="open()">
    <b-card-body>
      <b-card-title>
        <h4 class="card-title">{{ title }}</h4>
      </b-card-title>
      <b-card-text> {{ source }} &ndash; {{ publishedAt }} </b-card-text>
    </b-card-body>
  </b-card>
</template>

<style lang="scss" scoped>
.main {
  cursor: pointer;
  

:hover
{
  background-color: #2a3042;
  color: white;
  border-radius: 0.25rem;
  
  h4.card-title
  {
    color: white;
  }
}
  
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
    publishedAt: function () {
      const publishedAtTimestamp = this.article.newsitem.publishedAt;
      if (publishedAtTimestamp == null) return "null";
      return new Date(publishedAtTimestamp).toLocaleString("de-DE");
    },
  },

  methods: {
    open: function () {
      window.open(this.url, "_blank").focus();
    },
  },
};
</script>