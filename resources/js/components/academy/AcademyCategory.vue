<template>
  <div>
    <b-button @click="$router.go(-1)" class="backButton">&#171; {{ $t("common.back") }}</b-button>

    <h1>{{ $t(`academy.${category}.name`) }}</h1>
    <div class="card">
      <div class="card-body">
        <p v-html="$t(`academy.${category}.description`)"></p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div v-for="topic in topics" :key="topic">
          <router-link
            :to="{
              name: 'academy',
              params: getRouteParams(topic),
            }"
          >
            <h2 class="academy-link">
              {{ $t(`academy.${topic}`) }}
              <i class="dripicons-chevron-right"></i>
            </h2>
          </router-link>

          <router-link
            v-for="subTopic in getSubTopics(topic)"
            :key="subTopic"
            :to="{
              name: 'academy',
              params: getRouteParams(subTopic),
            }"
          >
            <h3 class="academy-link">
              {{ $t(`academy.${subTopic}`) }}
              <i class="dripicons-chevron-right"></i>
            </h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.backButton
{
  background-color: var(--bs-gray)!important;
  color: white!important;
  border: none;
  padding: 0 10px!important;
  margin-bottom: 10px;
}
</style>

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
import { ACADEMY } from "../../constants";
export default {
  name: "AcademyCategory",
  props: ["category"],

  methods: {
    getSubTopics(topic) {
      return ACADEMY[this.category][topic];
    },

    getRouteParams(page) {
      if (page == null) return { target: null };
      return { target: page.toLowerCase().replaceAll("_", "-") };
    },
  },

  computed: {
    topics() {
      return Object.keys(ACADEMY[this.category]);
    },
  },
};
</script>
