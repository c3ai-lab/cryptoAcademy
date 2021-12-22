<template>
<div>
    <padded-layout>
  <router-view class="my-lg-4 my-3"></router-view>
  </padded-layout>
</div>
</template>

<script>
import PaddedLayout from '../layouts/PaddedLayout.vue';

export default {
    components: { 
        PaddedLayout
    },
    name: "LoginLayout",

}
</script>

<style scoped>
    div.container
    {
        border-radius: 0.4rem;
    }


</style>


<style>
    .card-body
    {
        padding: 1rem 0.5rem;
    }
</style>
