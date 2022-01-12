<template>
<div>
<b-button @click="$router.go(-1)" class="backButton">&#171; {{ $t("common.back") }}</b-button>
  <component :is="page" />
  </div>
</template>

<script>
import "./topics";

export default {
  name: "AcademyContent",

  props: ["page"],
};
</script>