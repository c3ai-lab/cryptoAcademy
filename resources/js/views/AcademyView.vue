<template>
  <div>
    <AcademyOverview v-if="category == null && page == null" />
    <AcademyCategory v-else-if="category != null" :category="category" />
    <AcademyContent v-else :page="page" />
  </div>
</template>

<script>
import AcademyOverview from "../components/academy/AcademyOverview.vue";
import AcademyCategory from "../components/academy/AcademyCategory.vue";
import AcademyContent from "../components/academy/AcademyContent.vue";
import { routeParamToEnumKey } from "../utils";

export default {
  name: "AcademyView",

  components: {
    AcademyOverview,
    AcademyCategory,
    AcademyContent,
  },

  computed: {
    category() {
      const routeTarget = this.$route.params.target;
      if (routeTarget == null || routeTarget.includes("--")) return null;
      return routeParamToEnumKey(routeTarget);
    },

    page() {
      const routeTarget = this.$route.params.target;
      if (routeTarget == null || !routeTarget.includes("--")) return null;
      return routeTarget.toUpperCase().replaceAll("-", "_");
    },
  },
};
</script>
