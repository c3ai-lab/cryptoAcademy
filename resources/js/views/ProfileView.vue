<template>
  <Avatar :username="user.username" class="avatar" />
</template>

<style lang="scss" scoped>
.avatar {
  height: 4rem;
  border: 1px solid black;
}
</style>

<script>
import Avatar from "../components/Avatar.vue";

export default {
  name: "ProfileView",

  components: {
    Avatar,
  },

  data: function () {
    return {
      user: {
        username: "SomeAwesomeUsername",
        email: "fancy.name@provider.tld",
      },
    };
  },
};
</script>