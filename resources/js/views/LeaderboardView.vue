<template>
  <PaddedLayout>
    <h1>{{ $t("leaderboard.title") }}</h1>

    <div>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <p class="col col-md justify-content-center d-flex">
              <button @click="clickHour()" class="btn">
                {{ $t("leaderboard.time.hour") }}
              </button>
            </p>
            <p class="col col-md justify-content-center d-flex">
              <button @click="clickDay()" class="btn">
                {{ $t("leaderboard.time.day") }}
              </button>
            </p>
            <p class="col col-md justify-content-center d-flex">
              <button @click="clickWeek()" class="btn">
                {{ $t("leaderboard.time.week") }}
              </button>
            </p>
            <p class="col col-md justify-content-center d-flex">
              <button @click="clickYear()" class="btn">
                {{ $t("leaderboard.time.year") }}
              </button>
            </p>
            <p class="col col-md justify-content-center d-flex">
              <button @click="clickAll()" class="btn">
                {{ $t("leaderboard.time.all") }}
              </button>
            </p>
          </div>

          <p>
            {{ $t("leaderboard.currentSelectedTime") }}:<strong>
              {{ $t(this.currentSelectedTime) }}</strong
            >
          </p>
          <b-table
            responsive="sm"
            :items="highscoreUsers"
            :fields="fields"
            :current-page="currentPage"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
          >
            <template #cell(growth)="data">
              {{ data.value | eur }}
            </template>
            <template #cell(balance_eur)="data">
              {{ data.value | eur }}
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </PaddedLayout>
</template>

<script>
import PaddedLayout from "../layouts/PaddedLayout.vue";
import Buttons from "../../../skote/resources/js/views/ui/buttons";

export default {
  name: "LeaderboardView",

  components: {
    Buttons,
    PaddedLayout,
  },

  data() {
    return {
      currentSelectedTime: "leaderboard.time.day",
      fields: [
        {
          key: "name",
          label: "Name",
          sortable: false,
        },
        {
          key: "growth",
          label: "Gewinn / Verlust",
          sortable: false,
          tdClass: "right",
        },
        {
          key: "balance_eur",
          label: "Konto",
          sortable: false,
          tdClass: "right",
        },
      ],
      currentPage: 1,
      sortBy: "growth",
      sortDesc: true,
    };
  },
  methods: {
    clickHour() {
      this.currentSelectedTime = "leaderboard.time.hour";
      return this.$store.dispatch("leaderboard/fetchHour");
    },
    clickDay() {
      this.currentSelectedTime = "leaderboard.time.day";
      return this.$store.dispatch("leaderboard/fetchDay");
    },
    clickWeek() {
      this.currentSelectedTime = "leaderboard.time.week";
      return this.$store.dispatch("leaderboard/fetchWeek");
    },
    clickYear() {
      this.currentSelectedTime = "leaderboard.time.year";
      return this.$store.dispatch("leaderboard/fetchYear");
    },
    clickAll() {
      this.currentSelectedTime = "leaderboard.time.all";
      return this.$store.dispatch("leaderboard/fetchAll");
    },
  },
  computed: {
    highscoreUsers() {
      return this.$store.getters["leaderboard/data"]();
    },
  },
  created() {
    return this.$store.dispatch("leaderboard/fetchDay");
  },
};
</script>


<style lang="scss" scoped>
.btn {
  border-color: var(--bs-blue);
  color: var(--bs-blue);
  width: 100%;
}
button:focus {
  background-color: var(--bs-blue);
  border: unset;
  color: white;
}
</style>
