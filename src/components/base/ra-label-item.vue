<template>
    <div class="ra-label-item">
        <span class="form-name">{{label}}：</span>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ra-label-item",
        props: {
            label: {
                type: String,
                defuault: ''
            }
        }
    }
</script>

<style scoped>

</style>
