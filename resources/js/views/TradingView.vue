<template>
  <div>{{price}}</div>
</template>

<script>
import { WebsocketClient } from 'binance';
const wsClient = new WebsocketClient({
    beautify: true,
  });

export default {
    data() {
        return {
            price: null,
            market: 'BTCUSDT',
        }
    },

    created() {
        wsClient.subscribeKlines(this.market, '1m', 'spot');

        wsClient.on('formattedMessage', (data) => {
            if (!Array.isArray(data)) {
                if (data.eventType === 'kline') {
                    console.log('kline received ', data.kline);
                    return;
                }
            }
        });
    }
}
</script>

<style>

</style>
