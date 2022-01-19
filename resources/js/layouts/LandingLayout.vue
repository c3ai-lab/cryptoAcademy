<template>
  <div>
    
    <LandingNavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import LandingNavBar from "../components/LandingNavBar";
import PaddedLayout from "../layouts/PaddedLayout.vue";

export default {
  name: "LandingLayout",
  components: {
    LandingNavBar,
    PaddedLayout
  },
};
</script>
