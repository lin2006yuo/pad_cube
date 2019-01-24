<template>
    <div class="c-menu-header">
        {{warehouse}}
        <span class="menu-btn" @click="menuClick"><i class="cubeic-home"></i></span>
    </div>
</template>

<script>
    export default {
        name: "menuHeader",
        props: {
            warehouse: {
                type: String,
                require: true
            }
        },
        methods: {
            menuClick() {
                this.$emit('menu-click')
            }
        }
    }
</script>

<style scoped lang="stylus">
    .c-menu-header {
        color: #fff;
        background-color: $color-theme;
        height: 40px;
        line-height: 40px;
        font-weight bold;
        position: relative;
        .menu-btn {
            position: absolute;
            right: 10px;
            top: 0;
            font-size: 20px
        }
    }
</style>
