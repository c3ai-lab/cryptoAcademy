<template>
  <div class="row">
    <div class="col-lg-12">
      <LoadingStateWrapper :state="state" card>
        <div v-if="nonEmptyWallets.length === 0">
          <p class="text-center">
            {{ $t("wallet.all_wallets_empty") }}
            <br />
            <router-link to="trading">
              {{ $t("wallet.buy_coins") }}
            </router-link>
          </p>
        </div>

        <div class="card" v-else>
          <div class="card-body">
            <b-table
              responsive="sm"
              :items="nonEmptyWallets"
              :fields="fields"
              :current-page="currentPage"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
            >
              <template #cell(coin)="data">
                <div
                  class="clickable"
                  @click="openTradingShowView(data.value.symbol)"
                >
                  <img
                    class="icon"
                    :src="`/images/coins/${data.value.symbol
                      .replace('USDT', '')
                      .toLowerCase()}.png`"
                  />
                  <span>
                    <b>{{ data.value.symbol | symbol }}</b> &ndash;
                    {{ data.value.name }}
                  </span>
                </div>
              </template>

              <template #cell(value)="data">
                {{ data.value | eur }}
              </template>

              <template #cell(quantity)="data">
                {{ data.value | crypto }}
              </template>
            </b-table>
          </div>
        </div>
      </LoadingStateWrapper>
    </div>
  </div>
</template>

<script>
import { ComponentState } from "../enums";
import { dispatchAll } from "../utils";
import LoadingStateWrapper from "../components/utils/LoadingStateWrapper.vue";

export default {
  props: {
    wallets: Array,
  },

  components: {
    LoadingStateWrapper,
  },

  data() {
    return {
      state: ComponentState.LOADING,

      fields: [
        {
          key: "coin",
          label: "Name",
          sortable: true,
        },
        {
          key: "value",
          label: "Wert",
          sortable: true,
          thClass: "right",
          tdClass: "right",
        },
        {
          key: "quantity",
          label: "Menge",
          sortable: true,
          thClass: "right",
          tdClass: "right",
        },
      ],
      currentPage: 1,
      sortBy: "value",
      sortDesc: true,
    };
  },

  computed: {
    nonEmptyWallets() {
      return this.wallets
        .filter((v) => v.user_balance > 0)
        .map((v) => ({
          coin: {
            name: v.name,
            symbol: v.symbol,
          },
          value: v.user_balance,
          quantity: v.user_quantity,
        }));
    },
  },

  methods: {
    openTradingShowView(symbol) {
      this.$router.push({ name: "trading.show", params: { symbol: symbol } });
    },
  },

  async created() {
    this.state = await dispatchAll(this, "wallets/fetchAll");
  },
};
</script>

<style lang="scss">
th.right,
td.right {
  text-align: right;
}
</style>

<style lang="scss">
.clickable {
  cursor: pointer;
}

.hidden-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.hidden-scroll::-webkit-scrollbar {
  display: none;
}

.icon {
  display: inline-block;
  margin: -0.2rem 0.5rem 0 0;
  height: 1.75rem;
  width: 1.75rem;
}
</style>
