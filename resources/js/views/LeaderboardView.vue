<template>
  <PaddedLayout>
    <div class="row">
      <p class="col col-md justify-content-center d-flex">
        <button @click="clickHour()" class="btn btn-secondary">Std</button>
      </p>
      <p class="col col-md justify-content-center d-flex">
        <button @click="clickDay()" class="btn btn-secondary">Tag</button>
      </p>
      <p class="col col-md justify-content-center d-flex">
        <button @click="clickWeek()" class="btn btn-secondary">Woche</button>
      </p>
      <p class="col col-md justify-content-center d-flex">
        <button @click="clickYear()" class="btn btn-secondary">Jahr</button>
      </p>
      <p class="col col-md justify-content-center d-flex">
        <button @click="clickAll()" class="btn btn-secondary">Immer</button>
      </p>
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
              <template #cell(user_balance)="data">
                {{ data.value | eur }}
              </template>
              <template #cell(user_balance_eur)="data">
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
      fields: [
        {
          key: "name",
          label: "Name",
          sortable: true,
        },
        {
          key: "portfolio_growth",
          label: "Zuwachs",
          sortable: true,
          tdClass: "right",
        },
        {
          key: "user_balance_eur",
          label: "Portfoliowert",
          sortable: true,
          tdClass: "right",
        },
      ],
      currentPage: 1,
      sortBy: "user_balance_eur",
      sortDesc: true,
    };
  },
  methods: {
    clickHour() {
      return this.$store.dispatch("leaderboard/fetchHour");
    },
    clickDay() {
      return this.$store.dispatch("leaderboard/fetchDay");
    },
    clickWeek() {
      return this.$store.dispatch("leaderboard/fetchWeek");
    },
    clickYear() {
      return this.$store.dispatch("leaderboard/fetchYear");
    },
    clickAll() {
      return this.$store.dispatch("leaderboard/fetchAll");
    },
  },
  computed: {
    highscoreUsers() {
      return this.$store.getters["leaderboard/data"]().filter((v) => v.length > 0);
    },
  },
};
</script>
