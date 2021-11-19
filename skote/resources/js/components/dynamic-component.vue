<template>
    <component :is="component_name" :id="id" />
</template>
<script>
export default {
    props: {
        component: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: false,
            default: () => ""
        }
    },
    computed: {
        component_name() {
            return !!this.$root.$options.components[this.component] ? this.component : "pages-404";
        }
    }
};
</script>
