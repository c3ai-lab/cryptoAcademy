<template>
  <div>
    <!--- Das Inhaltverzeichnis für das erste Thema, welches ausgelagert werden sollte. Andere Inhaltverzeichnisse müssen noch angelegt werden --->
    <h1>{{ $t("academy.topic_1.name") }}</h1>
    <div class="card">
      <div class="card-body">
        <p>{{ $t("academy.topic_1.intro") }}</p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <router-link :to="{ name: 'topic_1_subtopic_1' }">
          <h2 class="academy-link">
            {{ $t("academy.topic_1.subtopic_1") }}
            <i class="dripicons-chevron-right"></i>
          </h2>
        </router-link>
        <router-link :to="{ name: 'topic_1_subtopic_2' }">
          <h2 class="academy-link">
            {{ $t("academy.topic_1.subtopic_2") }}
            <i class="dripicons-chevron-right"></i>
          </h2>
        </router-link>
        <router-link :to="{ name: 'topic_1_subtopic_2_1' }">
          <h3 class="academy-link">
            {{ $t("academy.topic_1.subtopic_2_1") }}
            <i class="dripicons-chevron-right"></i>
          </h3>
        </router-link>
        <router-link :to="{ name: 'topic_1_subtopic_2_2' }">
          <h3 class="academy-link">
            {{ $t("academy.topic_1.subtopic_2_2") }}
            <i class="dripicons-chevron-right"></i>
          </h3>
        </router-link>
        <router-link :to="{ name: 'topic_1_subtopic_2_3' }">
          <h3 class="academy-link">
            {{ $t("academy.topic_1.subtopic_2_3") }}
            <i class="dripicons-chevron-right"></i>
          </h3>
        </router-link>
        <router-link :to="{ name: 'topic_1_subtopic_2_3_1' }">
          <h4 class="academy-link">
            {{ $t("academy.topic_1.subtopic_2_3_1") }}
            <i class="dripicons-chevron-right"></i>
          </h4>
        </router-link>
        <router-link :to="{ name: 'topic_1_subtopic_3' }">
          <h2 class="academy-link">
            {{ $t("academy.topic_1.subtopic_3") }}
            <i class="dripicons-chevron-right"></i>
          </h2>
        </router-link>
        <router-link :to="{ name: 'topic_1_subtopic_3_1' }">
          <h3 class="academy-link">
            {{ $t("academy.topic_1.subtopic_3_1") }}
            <i class="dripicons-chevron-right"></i>
          </h3>
        </router-link>
        <router-link :to="{ name: 'topic_1_subtopic_3_1_1' }">
          <h4 class="academy-link">
            {{ $t("academy.topic_1.subtopic_3_1_1") }}
            <i class="dripicons-chevron-right"></i>
          </h4>
        </router-link>
        <router-link :to="{ name: 'topic_1_subtopic_3_2' }">
          <h3 class="academy-link no-border">
            {{ $t("academy.topic_1.subtopic_3_2") }}
            <i class="dripicons-chevron-right"></i>
          </h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.academy-link {
  border-bottom: 0.5px solid var(--bs-gray-500);
  padding: 0.5rem 0 1rem;
  font-size: 1rem;
}

i {
  float: right;
  font-size: 1rem;
}
h3.academy-link {
  font-size: 95%;
  margin-left: 1rem;
}

h4.academy-link {
  font-size: 90%;
  margin-left: 2rem;
}

.no-border {
  border-bottom: none !important;
  padding-bottom: 0.2rem;
}
</style>

<script>
import { AcademyTopic } from "../../enums";
export default {
  name: "AcademyTopics",
  props: ["topic"],

  computed: {
    subtopics() {
      switch (this.topic) {
        case AcademyTopic.HOW_DOES_IT_WORK:
          return [];

        case AcademyTopic.TOP_FIVE_COINS:
          return [];

        case AcademyTopic.FIFTY_COINS:
          return [];

        case AcademyTopic.GLOSSAR:
          return [];

        default:
          return [];
      }
    },
  },
};
</script>
