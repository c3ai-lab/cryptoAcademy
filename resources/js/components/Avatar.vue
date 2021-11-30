<template>
  <img :src="imageUrl" />
</template>

<script>
export default {
  name: "Avatar",

  props: {
    username: String,
  },

  computed: {
    imageUrl: function () {
      return `https://avatars.dicebear.com/api/bottts/${this.username}.svg`;
    },
  },
};
</script>