<template>
  <PaddedLayout>

    <div class="row">
      <button @click="clickHour">Std</button>
      <button @click="clickDay">Tag</button>
      <button @click="clickWeek">Woche</button>
      <button @click="clickYear">Jahr</button>
      <button @click="clickAll">Immer</button>
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
      return this.$store.getters["leaderboard/fetchHour"]();
    },
    clickDay() {
      return this.$store.getters["leaderboard/fetchDay"]();
    },
    clickWeek() {
      return this.$store.getters["leaderboard/fetchWeek"]();
    },
    clickYear() {
      return this.$store.getters["leaderboard/fetchYear"]();
    },
    clickAll() {
      return this.$store.getters["leaderboard/fetchAll"]();
    },
  },
  computed: {
    highscoreUsers() {
      return this.$store.getters["leaderboard/fetchDay"]();
    },

  },
};
</script>
