<template>
    <div class="c-menu-header">
        <span v-show='showBack' class="menu-btn back" @click="back"><i class="cubeic-back"></i></span>
        {{warehouse}}
        <span  class="menu-btn home" @click="menuClick"><i class="cubeic-home"></i></span>
    </div>
</template>

<script>
    const MENU_REGX = /^\/menu(?:\/(?=$))?$/i  //验证是否为 /menu/page
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
            },
            itemClick() {
                this.$emit('item-click')
            },
            back() {
                this.$router.back()
            }
        },
        computed: {
            showBack() {
                return !MENU_REGX.test(this.$route.fullPath)
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
