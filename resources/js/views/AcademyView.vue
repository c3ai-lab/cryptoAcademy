<template>
  <div>
    <AcademyOverview />
  </div>
</template>

<script>
import AcademyOverview from "../components/academy/AcademyOverview.vue";
import AcademyTopics from "../components/academy/AcademyTopics.vue";
import AcademyContent from "../components/academy/AcademyContent.vue";

export default {
  name: "AcademyView",

  components: {
    AcademyOverview,
    AcademyTopics,
    AcademyContent
  },
};
</script>
