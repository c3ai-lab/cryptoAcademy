<template>
  <div>
    <h1>{{ $t("academy.title") }}</h1>
    <div class="card">
      <div class="card-body">
        <p>{{ $t("academy.intro") }}</p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <router-link
          v-for="topic in topics"
          :key="topic"
          :to="{ name: 'academy', params: { topic: getRoute(topic) } }"
        >
          <h2 class="academy-link">
            {{ $t(`academy.${topic}.name`) }}
            <i class="dripicons-chevron-right"></i>
          </h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2.academy-link {
  font-size: 1rem;
  border-bottom: 0.5px solid var(--bs-gray-500);
  padding: 0.5rem 0 1rem;

  i {
    float: right;
  }
}

h2.no-border {
  border-bottom: none !important;
  padding-bottom: 0.2rem;
}
</style>

<script>
import { AcademyTopic } from "../../enums";
import { ACADEMY } from "../../constants";

export default {
  name: "AcademyOverview",

  methods: {
    getRoute(topic) {
      return ACADEMY[topic].route;
    },
  },

  computed: {
    topics() {
      return Object.keys(AcademyTopic);
    },
  },
};
</script>
