<template>
  <div>

    <div class="row">
            <div class="col-xl-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">Transactions</h4>

                        <b-tabs
                            pills
                            nav-class="bg-light rounded"
                            content-class="mt-4"
                        >
                            <b-tab title="All" active>
                                <b-card-text>
                                    <simplebar style="max-height: 330px">
                                        <table
                                            class="table table-centered table-nowrap align-middle"
                                        >
                                            <tbody>
                                                <tr
                                                    v-for="(data, i) of transactions"
                                                    :key="i"
                                                >
                                                    <td style="width: 50px">
                                                        <div
                                                            :class="
                                                                `font-size-22 text-${data.color}`
                                                            "
                                                        >
                                                            <i
                                                                :class="{
                                                                    'mdi mdi-arrow-up-circle-outline':
                                                                        `${data.color}` ==
                                                                        'success',
                                                                    'mdi mdi-arrow-down-circle-outline':
                                                                        `${data.color}` ==
                                                                        'danger'
                                                                }"
                                                            ></i>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <h5
                                                                class="font-size-14 mb-1"
                                                            >
                                                                {{ data.name }}
                                                            </h5>
                                                            <p
                                                                class="text-muted mb-0"
                                                            >
                                                                {{ data.date }}
                                                            </p>
                                                            <p
                                                                class="text-muted mb-0 text-center"
                                                                style="font-size: 0.8375em"
                                                            >
                                                                {{ data.time }}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 mb-0"
                                                            >
                                                                {{ data.text }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 text-muted mb-0"
                                                            >
                                                                {{ data.price | eur }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </simplebar>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Buy">
                                <b-card-text>
                                    <simplebar style="max-height: 330px">
                                        <table
                                            class="table table-centered table-nowrap align-middle"
                                        >
                                            <tbody>
                                                <tr
                                                    v-for="(data,i ) of transactions"
                                                    :key="i"
                                                >
                                                    <td style="width: 50px">
                                                        <div
                                                            :class="
                                                                `font-size-22 text-${data.color}`
                                                            "
                                                        >
                                                            <i
                                                                :class="{
                                                                    'mdi mdi-arrow-up-circle-outline':
                                                                        `${data.color}` ==
                                                                        'success',
                                                                    'mdi mdi-arrow-down-circle-outline':
                                                                        `${data.color}` ==
                                                                        'danger'
                                                                }"
                                                            ></i>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <h5
                                                                class="font-size-14 mb-1"
                                                            >
                                                                {{ data.name }}
                                                            </h5>
                                                            <p
                                                                class="text-muted mb-0"
                                                            >
                                                                {{ data.date }}
                                                            </p>
                                                            <p
                                                                class="text-muted mb-0 text-center"
                                                                style="font-size: 0.8375em"
                                                            >
                                                                {{ data.time }}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 mb-0"
                                                            >
                                                                {{ data.text }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 text-muted mb-0"
                                                            >
                                                                {{ data.price }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </simplebar>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Sell">
                                <b-card-text>
                                    <simplebar style="max-height: 330px">
                                        <table
                                            class="table table-centered table-nowrap align-middle"
                                        >
                                            <tbody>
                                                <tr
                                                    v-for="data of transactions"
                                                    :key="data.id"
                                                >
                                                    <td style="width: 50px">
                                                        <div
                                                            :class="
                                                                `font-size-22 text-${data.color}`
                                                            "
                                                        >
                                                            <i
                                                                :class="{
                                                                    'mdi mdi-arrow-up-circle-outline':
                                                                        `${data.color}` ==
                                                                        'success',
                                                                    'mdi mdi-arrow-down-circle-outline':
                                                                        `${data.color}` ==
                                                                        'danger'
                                                                }"
                                                            ></i>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <h5
                                                                class="font-size-14 mb-1"
                                                            >
                                                                {{ data.name }}
                                                            </h5>
                                                            <p
                                                                class="text-muted mb-0"
                                                            >
                                                                {{ data.date }}
                                                            </p>
                                                            <p
                                                                class="text-muted mb-0 text-center"
                                                                style="font-size: 0.8375em"
                                                            >
                                                                {{ data.time }}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 mb-0"
                                                            >
                                                                {{ data.text }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="text-end">
                                                            <h5
                                                                class="font-size-14 text-muted mb-0"
                                                            >
                                                                {{ data.price }}
                                                            </h5>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </simplebar>
                                </b-card-text>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>
    </div>

    </div>
</template>

<script>
import simplebar from "simplebar-vue";

export default {
  props: {
    symbol: String,
  },
  component: {
    simplebar,
  },
  mounted() {
    this.$store.dispatch('transactions/fetchTransactions');
  },
  computed: {
    transactions() {
      return this.$store
        .getters['transactions/getTransactionsBySymbol'](this.symbol)
        .map(t => ({
          ...t,
          color: t.quantity >= 0 ? 'success' : 'danger',
          date: new Date(t.bought_at).toLocaleDateString(),
          time: new Date(t.bought_at).toLocaleTimeString(),
          text: `${t.quantity >= 0 ? 'Kaufe' : 'Verkaufe'} ${this.symbol}`
        }))
    }
  },
}
</script>

<style>

</style>
