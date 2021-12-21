<template>
  <PaddedLayout>
    <AcademyOverview v-if="category == null && page == null" />
    <AcademyCategory v-else-if="category != null" :category="category" />
    <AcademyContent v-else :page="page" />
  </PaddedLayout>
</template>

<script>
import { routeParamToEnumKey } from "../utils";

import PaddedLayout from "../layouts/PaddedLayout.vue";

import AcademyOverview from "../components/academy/AcademyOverview.vue";
import AcademyCategory from "../components/academy/AcademyCategory.vue";
import AcademyContent from "../components/academy/AcademyContent.vue";

export default {
  name: "AcademyView",

  components: {
    AcademyOverview,
    AcademyCategory,
    AcademyContent,
    PaddedLayout,
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
