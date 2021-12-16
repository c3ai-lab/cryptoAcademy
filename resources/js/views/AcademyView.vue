<template>
  <padded-layout>
    <div>
      <AcademyOverview />
      <hr />
      <AcademyTopics />
      <hr />
      <AcademyContent />
    </div>
  </padded-layout>
</template>

<script>
import AcademyOverview from "../components/academy/AcademyOverview.vue";
import AcademyTopics from "../components/academy/AcademyTopics.vue";
import AcademyContent from "../components/academy/AcademyContent.vue";
import PaddedLayout from '../layouts/PaddedLayout.vue';

export default {
  name: "AcademyView",

  components: {
    AcademyOverview,
    AcademyTopics,
    AcademyContent,
    PaddedLayout,
  },
};
</script>

