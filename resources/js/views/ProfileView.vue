<template>
  <div>
    <h1>{{ $t("profile.title") }}</h1>
    <div class="card">
      <div class="card-body">
        <Avatar :username="user.username" class="avatar" />
        <p>{{ user.username }}</p>
        <p>{{ user.email }}</p>
        <hr />

        <p v-if="!user.sso && !changePassword && !deleteAccount">
          <a href="#" @click="changePassword = true">
            {{ $t("profile.change_password") }}
          </a>
        </p>
        <div v-if="changePassword">
          <h2>{{ $t("profile.change_password") }}</h2>
          <form class="form-horizontal">
            <b-form-group
              class="mb-3"
              :label="$t('profile.new_password')"
              label-for="new-password"
            >
              <b-form-input id="new-password" />
            </b-form-group>
            <b-form-group
              class="mb-3"
              :label="$t('profile.repeat_new_password')"
              label-for="new-password2"
            >
              <b-form-input id="new-password2" />
            </b-form-group>
          </form>
          <button class="btn btn-success" @click="changePassword = false">
            {{ $t("common.save") }}
          </button>
          <button class="btn btn-danger" @click="changePassword = false">
            {{ $t("common.abort") }}
          </button>
        </div>

        <p v-if="!changePassword && !deleteAccount">
          <a href="#" @click="deleteAccount = true">
            {{ $t("profile.delete_account") }}
          </a>
        </p>
        <div v-if="deleteAccount">
          <h2>{{ $t("profile.delete_account") }}</h2>
          <p class="text-danger">{{ $t("profile.delete_account_question") }}</p>
          <button class="btn btn-danger" @click="deleteAccount = false">
            {{ $t("common.yes") }}
          </button>
          <button class="btn btn-secondary" @click="deleteAccount = false">
            {{ $t("common.no") }}
          </button>
        </div>
      </div>
    </div>
  </div>
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
        sso: false,
      },

      changePassword: false,
      deleteAccount: false,
    };
  },
};
</script>