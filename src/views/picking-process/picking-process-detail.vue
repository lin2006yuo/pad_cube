<template>
    <div class="c-page">
        <ra-table :data="detailList" :header="tableHeader" @click="tableClick"></ra-table>
        <transition name="slide">
            <router-view class="child-page"></router-view>
        </transition>
    </div>
</template>

<script>
    import { getPickingProcessListDetail, getGoodsSkuInfo } from '@/api/picking-process'
    export default {
        name: "pickingProcessDetail",
        data() {
            return {
                detailList: [],
                tableHeader: [
                    { label: '货号', value: 'warehouse_cargo', width: '100'},
                    { label: 'SKU', value: 'sku' , width: 100},
                    { label: '数量', value: 'number', width: 50 },
                ],
                goodInfo: {},
            }
        },
        mounted() {
            this.getDetails()
        },
        methods: {
            getDetails() {
                const { id } = this.$route.query
                getPickingProcessListDetail(id, {}).then(res => {
                    this.detailList = this.handelData(res.data)
                })
            },
            tableClick(item) {
                const { sku } = item
                getGoodsSkuInfo({sku}).then(res => {
                    this.$router.push({
                        name: 'detailSku',
                        params: {
                            sku: res,
                            item: item
                        }
                    })
                    this.goodInfo = res
                })
            },
            handelData(data) {
                data.forEach(r => {
                    r.number = r.picking_quantity + '/' + r.quantity
                })
                return data
            },
        },
    }
</script>

<style scoped>

</style>
