import { DIMENSION_MAP } from "../../constants";
import { MainClient, WebsocketClient } from 'binance';

const binanceRest = new MainClient({
  beautifyResponses: true,
});

const binanceWs = new WebsocketClient({
  beautify: true,
});

const state = {
  eurUsdt: 1,
};

const getters = {
  current: (state) => (symbol, dimension) => {
    if (state[symbol] === undefined || state[symbol][dimension] === undefined) return [];

    return state[symbol][dimension].map(x => [x[0], x[1] / state.eurUsdt]);
  },
};

const actions = {
  init({ commit }) {
    binanceWs.subscribeKlines('EURUSDT', '1m', 'spot');

    binanceWs.on('formattedMessage', (data) => {
      if (!Array.isArray(data)) {
        if (data.eventType === 'kline') {
          commit('setEurUsdt', data.kline.close);
        }
      }
    });
  },
  subscribe({ commit, state }, { symbol, dimension }) {
    if (state[symbol] === undefined || state[symbol][dimension] === undefined) {
      binanceRest.getKlines({
        ...DIMENSION_MAP[dimension],
        symbol: symbol,
      }).then(response =>
        commit('set', { symbol, dimension, data: response.map(x => [x[0], Number(x[3])]) })
      ).catch(error =>
        alert(error)
      );

      // binance.onNewCandle(() => {
      //   commit('add', symbol, dimension, data);
      // })
    }
  },
  unsubscribe({ commit }) { },
};

const mutations = {
  setEurUsdt(state, eurUsdt) {
    state.eurUsdt = eurUsdt;
  },
  add(state, { symbol, dimension, data }) {
    state.user = user;
  },
  set(state, { symbol, dimension, data }) {
    console.log(symbol, dimension, data);
    if (state[symbol] === undefined) state[symbol] = {};

    state[symbol][dimension] = data;
  },
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
