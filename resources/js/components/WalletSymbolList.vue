<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <b-table
            responsive="sm"
            :items="nonEmptyWallets"
            :fields="fields"
            :current-page="currentPage"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
          >
            <template #cell(user_balance)="data">
              {{ data.value | eur }}
            </template>

            <template #cell(user_quantity)="data">
              {{ data.value | crypto }}
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wallets: Array,
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
          key: "user_balance",
          label: "Summe",
          sortable: true,
          tdClass: "right",
        },
        {
          key: "user_quantity",
          label: "Menge",
          sortable: true,
          tdClass: "right",
        },
      ],
      currentPage: 1,
      sortBy: "user_balance_eur",
      sortDesc: true,
    };
  },

  computed: {
    nonEmptyWallets() {
      return this.wallets.filter((v) => v.user_balance > 0);
    },
  },
};
</script>

<style>
td.right {
  text-align: right;
}

.hidden-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.hidden-scroll::-webkit-scrollbar {
  display: none;
}
</style>
