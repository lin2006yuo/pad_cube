<template>
    <menu-content :items="menuItems"></menu-content>
</template>

<script>
    import MenuComponents from '@/components/menu'

    import { menuItems } from './menuItem'

    export default {
        name: "page",
        data() {
            return {
                menuItems: menuItems
            }
        },
        components: {
            ...MenuComponents
        }
    }
</script>

<style scoped>

</style>
