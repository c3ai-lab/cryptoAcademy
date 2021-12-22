import Vue from "vue";
import { AcademyCategory, AcademyTopic } from "../../../enums";

Vue.component(
  AcademyTopic.CRYPTO__INTRO,
  require("./crypto/Intro.vue").default
);

Vue.component(
  AcademyCategory.FIFTY_COINS__LIST,
  require("./FiftyCoins.vue").default
);

Vue.component(
  AcademyTopic.TOP_FIVE_COINS__BTC,
  require("./top_five_coins/Btc.vue").default
);

Vue.component(
  AcademyTopic.TOP_FIVE_COINS__ETH,
  require("./top_five_coins/Eth.vue").default
);

Vue.component(
  AcademyTopic.TOP_FIVE_COINS__BNB,
  require("./top_five_coins/Bnb.vue").default
);

Vue.component(
  AcademyTopic.TOP_FIVE_COINS__USDT,
  require("./top_five_coins/Usdt.vue").default
);

Vue.component(
  AcademyTopic.TOP_FIVE_COINS__SOL,
  require("./top_five_coins/Sol.vue").default
);
