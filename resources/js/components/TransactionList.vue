<template>
  <div class="w-100 hidden-scroll" style="max-height: 400px; overflow: scroll;">
    <div
      v-for="(t, i) of transactions"
      :key="i"
      class="d-flex flex-wrap justify-content-between text-muted"
      role="button"
      v-b-toggle="`collapse-${i}`"
    >
      <div>
      </div>
      <div class="w-100 d-flex justify-content-between align-items-center">
        <div
          :class="
            `font-size-22 text-${t.color}`
          "
        >
          <i
            :class="{
              'mdi mdi-arrow-up-circle-outline':
                  `${t.color}` ===
                  'success',
              'mdi mdi-arrow-down-circle-outline':
                  `${t.color}` ===
                  'danger'
            }"
          />
        </div>

        <div
          style="margin: 0 8px"
        >
          <div>
            {{ t.date }}
          </div>

          <div class="font-size-12 text-center">
            {{ t.time }}
          </div>
        </div>

        <div class="flex-grow-1">
          <b>{{ t.text }}</b>
        </div>

        <div
          class="flex-grow-1 text-right"
          style="text-align: right; margin-right: 12px"
          :class="
            `text-${t.color}`
          "
        >
          <div class="text-muted font-size-12">
            {{ $t('trade.amount') }}
          </div>
          <b>
            {{ t.quantity > 0 ? '+' : '-' }}
            {{ Math.abs(t.quantity) }}
          </b>
        </div>
        <div>
          <i
            class="mdi mdi-chevron-down"
            v-if="1"
          />
          <i
            class="mdi mdi-chevron-up"
            v-else
          />
        </div>
      </div>
      <b-collapse
        :id="`collapse-${i}`"
        :ref="`collapse-${i}`"
        class="w-100">
        <div class="d-flex justify-content-between">
          <div>
            <div class="text-muted font-size-12">
              {{ $t('trade.pricePerAsset') }}
            </div>
            {{ t.price_euro | eur }}
          </div>
          <div
            :class="t.quantity < 0 ? 'text-success' : 'text-danger'"
          >
            <div class="text-muted font-size-12">
              {{ $t('trade.balance') }}
            </div>
            {{ t.quantity < 0 ? '+' : '-' }}
            {{ Math.abs(t.price_euro * t.quantity) | eur }}
          </div>
        </div>
      </b-collapse>
      <div
        v-if="i < transactions.length - 1"
        style="
        height: 1px;
        width: 100%;
        background-color: #88888822;
      "
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transactions: [],
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
