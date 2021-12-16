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
