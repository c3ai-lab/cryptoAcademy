<template>
  <PaddedLayout>
    <div class="row">
      <p class="col col-md justify-content-center d-flex">
        <button @click="clickHour()" class="btn btn-secondary">{{ $t("leaderboard.time.hour") }}</button>
      </p>
      <p class="col col-md justify-content-center d-flex">
        <button @click="clickDay()" class="btn btn-secondary">{{ $t("leaderboard.time.day") }}</button>
      </p>
      <p class="col col-md justify-content-center d-flex">
        <button @click="clickWeek()" class="btn btn-secondary">{{ $t("leaderboard.time.week") }}</button>
      </p>
      <p class="col col-md justify-content-center d-flex">
        <button @click="clickYear()" class="btn btn-secondary">{{ $t("leaderboard.time.year") }}</button>
      </p>
      <p class="col col-md justify-content-center d-flex">
        <button @click="clickAll()" class="btn btn-secondary">{{ $t("leaderboard.time.all") }}</button>
      </p>
    </div>
    <div class="row">{{ $t("leaderboard.currentSelectedTime") }}: {{ $t(this.currentSelectedTime) }}
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
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
          label: "Zuwachs",
          sortable: false,
          tdClass: "right",
        },
        {
          key: "balance_eur",
          label: "Portfoliowert",
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
