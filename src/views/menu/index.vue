<template>
    <div class="p-menu">
        <!--头部-->
        <menu-header :warehouse="selectWarehouse" @menu-click="menuClick"></menu-header>
        <!--中间内容-->
        <router-view></router-view>
        <!--抽屉-->
        <cube-drawer
            ref="drawer"
            title="请选择"
            :data="warehouseData"
            @select="selectMenu"
        ></cube-drawer>
    </div>
</template>

<script>
    import MenuComponents from '@/components/menu'
    import { getWareHouse, getUserInfo } from "@/api/base";
    import storage from 'good-storage'


    export default {
        name: "menu-index",
        data() {
          return {
              selectWarehouse: '',
              warehouseData: [[]],
          }
        },
        mounted() {
          this.initWareHouse();
          this.initUserInfo();
        },
        methods: {
            menuClick() {
                this.$refs.drawer.show()
            },
            selectMenu(value, index, text) {
                this.selectWarehouse = text[0];
                storage.session.set('CURRENT_WAREHOUSE', {text: text[0], value: value[0]})
            },
            initWareHouse() {
                getWareHouse().then(res => {
                    const warehouses = res.map(wh => {
                        return {
                            text: wh.name,
                            value: wh.id
                        }
                    });
                    this.warehouseData[0] = warehouses;
                    this.selectWarehouse = warehouses[0].text;
                    storage.set('CURRENT_WAREHOUSE', warehouses[0])
                }).catch(err => {
                    console.log(err.message)
                })
            },
            initUserInfo() {
                getUserInfo().then(res => {
                    storage.session.set('USER_INFO', res)
                })
            },
            click() {
                this.$router.push({
                    path: 'menu/picking-process'
                })
            }
        },
        components: {
            ...MenuComponents
        },
    }
</script>

<style scoped lang="stylus">
    .p-menu {
        position fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: #f5f5f5;
    }
</style>
