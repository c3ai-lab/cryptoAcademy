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
        <router-link :to="{ name: 'topic_1' }">
          <h2 class="academy-link">
            {{ $t("academy.topic_1.name") }}
            <i class="dripicons-chevron-right"></i>
          </h2>
        </router-link>
        <router-link :to="{ name: 'topic_2' }">
          <h2 class="academy-link">
            {{ $t("academy.topic_2.name") }}
            <i class="dripicons-chevron-right"></i>
          </h2>
        </router-link>
        <router-link :to="{ name: 'topic_3' }">
          <h2 class="academy-link">
            {{ $t("academy.topic_3.name") }}
            <i class="dripicons-chevron-right"></i>
          </h2>
        </router-link>
        <router-link :to="{ name: 'topic_4' }">
          <h2 class="academy-link">
            {{ $t("academy.topic_4.name") }}
            <i class="dripicons-chevron-right"></i>
          </h2>
        </router-link>
        <router-link :to="{ name: 'topic_5' }">
          <h2 class="academy-link no-border">
            {{ $t("academy.topic_5.name") }}
            <i class="dripicons-chevron-right"></i>
          </h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcademyOverview",
};
</script>

<style lang="scss" scoped>
h2.academy-link {
  font-size: 1rem;
  border-bottom: 0.5px solid var(--bs-gray-500);
  padding: 0.5rem 0 1rem;

  i {
    float: right;
  }
}

h2.no-border 
{
  border-bottom: none!important;
  padding-bottom: 0.2rem;
}



</style>