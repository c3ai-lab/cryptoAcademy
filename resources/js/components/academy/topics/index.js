import Vue from "vue";
import { AcademySubTopic } from "../../../enums";

Vue.component(
  AcademySubTopic.CRYPTO__INTRO,
  require("./crypto/Intro.vue").default
);

Vue.component(
  AcademySubTopic.CRYPTO__BLOCKCHAIN,
  require("./testy/Lol.vue").default
);
