<template>
  <padded-layout>
    <div>
      <h1>{{ $t("profile.title") }}</h1>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3 col-12 d-flex justify-content-center">
              <div class="avatar-box">
                <Avatar :username="username" class="avatar" />
              </div>
            </div>
            <div class="col-12 col-sm-9 align-self-center">
              <h5
                class="
                  d-flex
                  justify-content-center justify-content-sm-start
                  mt-3
                "
              >
                <b>{{ username }}</b>
              </h5>
              <h6
                class="d-flex justify-content-center justify-content-sm-start"
              >
                {{ email }}
              </h6>
              <i
                class="
                  mdi mdi-logout
                  text-danger
                  d-flex
                  justify-content-center justify-content-sm-start
                "
                @click="logout()"
              ></i>
            </div>
          </div>

          <hr class="my-4" />
          <div>
            <h4>{{ $t("profile.chart_info") }}</h4>
          </div>
          <div class="row">
            <div class="col-6">
              {{ $t("profile.x_axis") }}

              <b-tabs pills nav-class="bg-light rounded" content-class="mt-4">
                <b-tab
                  id="xaxison"
                  title="An"
                  v-bind:active="xAxis === 1"
                  @click="updateAxis(true, yAxis)"
                />
                <b-tab
                  id="xaxisoff"
                  title="Aus"
                  v-bind:active="xAxis === 0"
                  @click="updateAxis(false, yAxis)"
                />
              </b-tabs>
            </div>
            <div class="col-6">
              {{ $t("profile.y_axis") }}

              <b-tabs pills nav-class="bg-light rounded" content-class="mt-4">
                <b-tab
                  id="yaxison"
                  title="An"
                  :active="yAxis === 1"
                  @click="updateAxis(xAxis, true)"
                />
                <b-tab
                  id="yaxisoff"
                  title="Aus"
                  :active="yAxis === 0"
                  @click="updateAxis(xAxis, false)"
                />
              </b-tabs>
            </div>
          </div>

          <hr class="my-4" />

          <div class="row">
            <p
              class="col-12 col-md-4 justify-content-center d-flex"
              v-if="
                !showChangePassword && !showResetAccount && !showDeleteAccount
              "
            >
              <button
                class="btn btn-primary"
                @click="showChangePassword = true"
              >
                {{ $t("profile.change_password") }}
              </button>
            </p>
            <div v-if="showChangePassword">
              <h2>{{ $t("profile.change_password") }}</h2>
              <form class="form-horizontal" @submit.prevent="changePassword">
                <b-form-group
                  class="mb-3"
                  :label="$t('profile.old_password')"
                  label-for="old-password"
                >
                  <b-form-input
                    v-model="changePasswordObj.oldPassword"
                    id="old-password"
                    minlength="6"
                    required
                  />
                </b-form-group>
                <b-form-group
                  class="mb-3"
                  :label="$t('profile.new_password')"
                  label-for="new-password"
                >
                  <b-form-input
                    v-model="changePasswordObj.newPassword"
                    id="new-password"
                    minlength="6"
                    required
                  />
                </b-form-group>
                <b-form-group
                  class="mb-3"
                  :label="$t('profile.repeat_new_password')"
                  label-for="new-password2"
                >
                  <b-form-input
                    v-model="changePasswordObj.newPassword2"
                    id="new-password2"
                    minlength="6"
                    required
                  />
                </b-form-group>
                <button class="btn btn-success" type="submit">
                  {{ $t("common.save") }}
                </button>
                <button
                  class="btn btn-danger"
                  @click="showChangePassword = false"
                >
                  {{ $t("common.abort") }}
                </button>
              </form>
            </div>

            <p
              class="col-12 col-md-4 justify-content-center d-flex"
              v-if="
                !showChangePassword && !showResetAccount && !showDeleteAccount
              "
            >
              <button
                class="btn btn-danger"
                type="submit"
                @click="showDeleteAccount = true"
              >
                {{ $t("profile.delete_account") }}
              </button>
            </p>
            <div v-if="showDeleteAccount">
              <h2>{{ $t("profile.delete_account") }}</h2>
              <p class="text-danger">
                {{ $t("profile.delete_account_question") }}
              </p>
              <button class="btn btn-danger" @click="deleteAccount()">
                {{ $t("common.yes") }}
              </button>
              <button
                class="btn btn-secondary"
                @click="showDeleteAccount = false"
              >
                {{ $t("common.no") }}
              </button>
            </div>

            <p
              class="col-12 col-md-4 justify-content-center d-flex"
              v-if="
                !showChangePassword && !showResetAccount && !showDeleteAccount
              "
            >
              <button
                class="btn btn-secondary"
                @click="showResetAccount = true"
              >
                {{ $t("profile.account_reset") }}
              </button>
            </p>
            <div v-if="showResetAccount">
              <h2>{{ $t("profile.account_reset") }}</h2>
              <p class="text-danger">
                {{ $t("profile.account_reset_question") }}
              </p>
              <button class="btn btn-danger" @click="resetAccount()">
                {{ $t("common.yes") }}
              </button>
              <button
                class="btn btn-secondary"
                @click="showResetAccount = false"
              >
                {{ $t("common.no") }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <span v-if="accountResetModal">
        <AccountResetModal />
      </span>
      <span v-if="changePasswordModal">
        <ChangePasswordModal />
      </span>
    </div>
  </padded-layout>
</template>

<style lang="scss" scoped>
.avatar-box {
  background-color: rgb(243, 243, 243);
  border-radius: 100px;
  padding: 10px;

  .avatar {
    height: 10vw;
    min-height: 4rem;
    max-height: 7rem;
  }
}

i.mdi-logout {
  cursor: pointer;
  font-size: 20pt;
}
</style>

<script>
import Avatar from "../components/Avatar.vue";
import PaddedLayout from "../layouts/PaddedLayout.vue";
import AccountResetModal from "../components/AccountResetModal.vue";
import ChangePasswordModal from "../components/ChangePasswordModal.vue";

export default {
  name: "ProfileView",

  components: {
    Avatar,
    PaddedLayout,
    AccountResetModal,
    ChangePasswordModal,
  },

  computed: {
    username() {
      return this.$store.getters["user/getUser"]().name;
    },

    email() {
      return this.$store.getters["user/getUser"]().email;
    },

    xAxis() {
      return this.$store.getters["user/getUser"]().axis.x;
    },

    yAxis() {
      return this.$store.getters["user/getUser"]().axis.y;
    },
  },

  data() {
    return {
      changePasswordObj: {
        oldPassword: null,
        newPassword: null,
        newPassword2: null,
      },
      showChangePassword: false,
      showDeleteAccount: false,
      showResetAccount: false,
      accountResetModal: false,
      changePasswordModal: false,
    };
  },
  methods: {
    async updateAxis(x, y) {
      const response = await this.$store.dispatch("user/updateUserData", {
        x_axis: Number(x),
        y_axis: Number(y),
      });
    },

    changePassword() {
      if (
        this.changePasswordObj.newPassword !==
        this.changePasswordObj.newPassword2
      ) {
        alert("Neue Passwörter stimmen nicht überein");
        return false;
      }
      // TODO: Antworten von Api abfangen und dem User die entsprechende Meldung anzeigen
      this.$store
        .dispatch("user/changePassword", this.changePasswordObj)
        .then(() => {
          this.showChangePassword = false;
          this.changePasswordObj.oldPassword = null;
          this.changePasswordObj.newPassword = null;
          this.changePasswordObj.newPassword2 = null;
          this.changePasswordModal = true;
        })
        .catch(() => {
          alert("nicht geändert, FEHLER");
        });
    },

    async deleteAccount() {
      const success = await this.$store.dispatch("user/deleteAccount");
      if (success === true) this.$router.push({ name: "delete-account" });
      else alert("Account konnte nicht gelöscht werden");
    },

    resetAccount() {
      this.$store
        .dispatch("user/resetAccount")
        .then(
          () => (this.showResetAccount = false),
          (this.accountResetModal = true)
        );
    },

    async logout() {
      const response = await this.$store.dispatch("user/logout");
      if (response === true) {
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>
