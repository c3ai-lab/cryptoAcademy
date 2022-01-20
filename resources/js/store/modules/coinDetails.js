import { DIMENSION_MAP } from "../../constants";
import { MainClient, WebsocketClient } from "binance";

const binanceRest = new MainClient({
  beautifyResponses: true,
});

const binanceWs = new WebsocketClient({
  beautify: true,
  disableHeartbeat: true,
});

const state = {
  eurUsdt: 1,
  connections: [],
  coins: {},
};

const getters = {
  getSeries: (state) => (symbol, dimension) => {
    if (
      state.coins[symbol] === undefined ||
      state.coins[symbol][dimension] === undefined ||
      state.coins["EURUSDT"] === undefined ||
      state.coins["EURUSDT"][dimension] === undefined
    )
      return [];

    const result = [];

    const series = state.coins[symbol][dimension];

    for (let i = 0; i < series.length; i++) {
      result.push([
        series[i][0],
        series[i][1] / state.coins["EURUSDT"][dimension][i][1],
      ]);
    }
    return result;
  },
};

const actions = {
  init({ commit }) {
    binanceWs.subscribeKlines("EURUSDT", "1m", "spot");

    binanceWs.on("formattedMessage", (data) => {
      if (!Array.isArray(data)) {
        if (data.eventType === "kline") {
          commit("setEurUsdt", data.kline.close);
        }
      }
    });
  },
  subscribe({ commit, state }, { symbol, dimension }) {
    if (
      state.coins[symbol] === undefined ||
      state.coins[symbol][dimension] === undefined
    ) {
      binanceRest
        .getKlines({
          ...DIMENSION_MAP[dimension],
          symbol: symbol,
        })
        .then((response) =>
          commit("set", {
            symbol,
            dimension,
            data: response.map((x) => [x[0], Number(x[3])]),
          })
        )
        .catch((error) => alert(error));

      binanceRest
        .getKlines({
          ...DIMENSION_MAP[dimension],
          symbol: "EURUSDT",
        })
        .then((response) =>
          commit("set", {
            symbol: "EURUSDT",
            dimension,
            data: response.map((x) => [x[0], Number(x[3])]),
          })
        )
        .catch((error) => alert(error));
    }
  },
  unsubscribe({ commit }) {},
};

const mutations = {
  setEurUsdt(state, eurUsdt) {
    state.eurUsdt = eurUsdt;
  },
  add(state, { symbol, dimension, data }) {
    state.user = user;
  },
  addConnection(state, { connection, symbol }) {
    if (state.coins[symbol] !== undefined)
      state.coins[symbol]["connection"] = connection;
  },
  set(state, { symbol, dimension, data }) {
    if (state.coins[symbol] === undefined) state.coins[symbol] = {};

    state.coins = {
      ...state.coins,
      [symbol]: {
        ...state.coins[symbol],
        [dimension]: data,
      },
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
