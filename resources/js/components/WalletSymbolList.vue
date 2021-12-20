<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-body">
          <div class="table-responsive mt-3 mb-0">
            <b-table
              :items="walletsymbolData"
              :fields="fields"
              responsive="sm"
              :current-page="currentPage"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
            ></b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {tableData} from "../../../skote/resources/js/views/tables/dataAdvancedtable";

export default {


  data() {
    return {
      tableData: tableData,
      title: "Advanced Table",
      items: [
        {
          text: "Tables",
          href: "/",
        },
        {
          text: "Advanced",
          active: true,
        },
      ],
      currentPage: 1,
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [
        {key: "name", sortable: true, label: "Name"},
        {key: "symbol", sortable: true, label: "Symbol"},
        {key: "user_balance", sortable: true, label: "Balance"},
        {key: "user_quantity", sortable: true, label: "Menge"},
      ],
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    walletsymbolData: function () {
      return this.$store.getters["wallet/getWalletsymbol"];
    },
  },
  mounted() {
    // Set the initial number of items
    this.$store.dispatch("wallet/fetchWalletsymbol");
  },
}
</script>

<style>
.hidden-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.hidden-scroll::-webkit-scrollbar {
  display: none;
}
</style>
