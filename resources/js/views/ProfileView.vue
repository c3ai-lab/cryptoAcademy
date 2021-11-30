<template>
  <div>
    <h1>{{ $t("profile.title") }}</h1>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-3 col-12 d-flex justify-content-center">
            <div class="avatar-box">
              <Avatar :username="user.username" class="avatar" />
            </div>
          </div>
          <div class="col-12 col-sm-9 align-self-center">
            <h4 class="d-flex justify-content-center justify-content-sm-start mt-3"><b>{{ user.username }}</b></h4>
            <p class="d-flex justify-content-center justify-content-sm-start">{{ user.email }}</p> 
            <i class="mdi mdi-logout text-danger d-flex justify-content-center justify-content-sm-start"></i>
          </div>
        </div> 

        <hr class="my-4"/>
        <div class="row">
          <p class="col-12 col-sm-6 justify-content-center justify-content-sm-end d-flex" v-if="!user.sso && !changePassword && !deleteAccount">
            <button class="btn btn-primary" @click="changePassword = true">
              {{ $t("profile.change_password") }}
            </button>
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

          <p class="col-12 col-sm-6 justify-content-center justify-content-sm-start d-flex" v-if="!changePassword && !deleteAccount">
                      <button class="btn btn-danger" @click="deleteAccount = true">
              {{ $t("profile.delete_account") }}
            </button>
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
  </div>
</template>

<style lang="scss" scoped>


.avatar-box {
  background-color: rgb(243, 243, 243);
  border-radius: 100px;
  padding: 10px;
  
  .avatar {
  height: 10vw;
  min-height: 100px;
  }
}

i.text-danger
{
  font-size: 20pt;
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