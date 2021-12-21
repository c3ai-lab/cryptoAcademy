<template>
  <component :is="page" />
</template>

<script>
import "./topics";

export default {
  name: "AcademyContent",

  props: ["page"],
};
</script>