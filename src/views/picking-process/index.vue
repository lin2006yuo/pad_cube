<template>
    <div class="picking-process c-page">
        <div class="header-select" @click="click">分区：{{area.name}}</div>
        <popup-select ref="popup" :data="areaList" @select="selectArea"></popup-select>
        <ra-table :header="tableHeader" :data="tableData" @click="showDetail"></ra-table>
        <transition name="slide">
            <router-view class="child-page"></router-view>
        </transition>
    </div>
</template>
<script>
    import { getAreaList, pickingProcessList } from '@/api/picking-process'
    import PopupSelect from '@/components/page/popup-select'
    import PickingProcessDetail from './picking-process-detail'

export default {
    data() {
        return {
            areaList: [],
            wId: '',
            area: {name: '全部', id: ''},
            tableHeader: [{label: '拣货单号', value: 'id', width: 150}, {label: '日期', value: 'create_time', width: 120}, {label: '状态', value: 'status_name'}],
            tableData: [
                {id: '123', create_time: '2018-9-9', status_name: '待拣'}, {id: '123', create_time: '2017-9-9', status_name: '待拣'}, {id: '123', create_time: '2019-9-9', status_name: '待拣'},
                {id: '123', create_time: '2018-9-9', status_name: '待拣'}, {id: '123', create_time: '2017-9-9', status_name: '待拣'}, {id: '123', create_time: '2019-9-9', status_name: '待拣'},
                {id: '123', create_time: '2018-9-9', status_name: '待拣'}, {id: '123', create_time: '2017-9-9', status_name: '待拣'}, {id: '123', create_time: '2019-9-9', status_name: '待拣'},
                {id: '123', create_time: '2018-9-9', status_name: '待拣'}, {id: '123', create_time: '2017-9-9', status_name: '待拣'}, {id: '123', create_time: '2019-9-9', status_name: '待拣'},
                {id: '123', create_time: '2018-9-9', status_name: '待拣'}, {id: '123', create_time: '2017-9-9', status_name: '待拣'}, {id: '123', create_time: '2019-9-9', status_name: '待拣'},
                {id: '123', create_time: '2018-9-9', status_name: '待拣'}, {id: '123', create_time: '2017-9-9', status_name: '待拣'}, {id: '123', create_time: '2019-9-9', status_name: '待拣'},
                {id: '123', create_time: '2018-9-9', status_name: '待拣'}, {id: '123', create_time: '2017-9-9', status_name: '待拣'}, {id: '123', create_time: '2019-9-9', status_name: '待拣'},
                {id: '123', create_time: '2018-9-9', status_name: '待拣'}, {id: '123', create_time: '2017-9-9', status_name: '待拣'}, {id: '123', create_time: '2019-9-9', status_name: '待拣'},
                {id: '123', create_time: '2018-9-9', status_name: '待拣'}, {id: '123', create_time: '2017-9-9', status_name: '待拣'}, {id: '123', create_time: '2019-9-9', status_name: '待拣'},
            ]
        }
    },
    mounted() {
        this.wId = this.$route.query.wid;
        this.getAreaList();
        this.init()
    },
    methods: {
        click() {
            this.$refs.popup.show();
        },
        selectArea(item) {
            this.area = item
        },
        getAreaList() {
            getAreaList({warehouse_id: this.wId}).then(res => {
                this.areaList = [{name: '全部', id: ''}, ...res]
            })
        },
        getPickingProcessList() {
            pickingProcessList({warehouse_id: this.wId, warehouse_area_id: this.area.id, _t: 1548472960510}).then(res => {
                this.tableData = [...res, ...this.tableData]
            })
        },
        init() {
            this.getPickingProcessList()
        },
        showDetail(row) {
            this.$router.push({
                path: 'picking-process/picking-process-detail',
                query: {
                    id: row.id,
                    type: row.type,
                    warehouse_id: row.warehouse_id
                }
            })
        }
    },
    components: {
        PopupSelect,
        PickingProcessDetail
    },
}
</script>
<style lang="stylus" scoped>

</style>


