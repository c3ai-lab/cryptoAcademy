import Vue from "vue";
import { AcademyTopic, AcademySubTopic } from "../../../enums";

Vue.component(
  AcademySubTopic.CRYPTO__INTRO,
  require("./crypto/Intro.vue").default
);

Vue.component(
  AcademyTopic.FIFTY_COINS__LIST,
  require("./FiftyCoins.vue").default
);
