<template>
    <div class="p-menu">
        <!--头部-->
        <menu-header :warehouse="selectWarehouse" @menu-click="menuClick"></menu-header>
        <!-- 九宫格 -->
        <menu-content :items="menuItems" @link-to="linkTo"></menu-content>
        <!--中间内容-->
        <transition name='slide'>
            <router-view class="pages"></router-view>
        </transition>
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
    import { menuItems } from './menuItem'
    import { mapMutations } from 'vuex'

    export default {
        name: "menu-index",
        data() {
          return {
              selectWarehouse: '',
              selectWarehouseId: '',
              warehouseData: [[]],
              menuItems: menuItems
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
                // this.selectWarehouse = text[0];
                // this.selectWarehouseId = value[0];
                // storage.session.set('CURRENT_WAREHOUSE', {text: text[0], value: value[0]})
                this.setWarehouseData(this.warehouseData[0], index)
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
                    this.setWarehouseData(warehouses, 0)
                }).catch(err => {
                    console.log(err.message)
                })
            },
            setWarehouseData(warehouses, index) {
                this.selectWarehouse = warehouses[index].text;
                this.selectWarehouseId = warehouses[index].value;
                storage.set('CURRENT_WAREHOUSE', warehouses[index]);
                this.setWarehouseId({id: warehouses[index].value});
            },
            initUserInfo() {
                getUserInfo().then(res => {
                    storage.session.set('USER_INFO', res)
                })
            },
            linkTo(path) {
                this.$router.push({ path: `/menu${path}`, query: { wid:  this.selectWarehouseId} });
            },
            ...mapMutations([
                'setWarehouseId'
            ])
        },
        components: {
            ...MenuComponents,
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
        .pages {
            position fixed;
            left 0;
            top 40px
            right 0;
            bottom 0
        }
    }
</style>
