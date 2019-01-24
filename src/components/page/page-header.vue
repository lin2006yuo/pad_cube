<template>
    <div class="c-menu-header">
        <span class="menu-btn back" @click="backClick"><i class="cubeic-back"></i></span>
        {{warehouse}}
        <span class="menu-btn home" @click="menuClick"><i class="cubeic-home"></i></span>
    </div>
</template>

<script>
    export default {
        name: "pageHeader",
        props: {
            warehouse: {
                type: String,
                require: true,
            }
        },
        methods: {
            menuClick() {
                this.$emit('menu-click')
            },
            backClick() {

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
            top: 0;
            font-size: 20px
            &.back {
                left 10px
            }
            &.home {
                right: 10px;
            }
        }
    }
</style>
