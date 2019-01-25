<template>
    <div class="picking-process c-page">
        <div class="header-select" @click="click">分区：{{area.name}}</div>
        <popup-select ref="popup" :data="areaList" @select="selectArea"></popup-select>
        <ra-table :header="tableHeader" :data="tableData"></ra-table>
    </div>
</template>
<script>
    import { getAreaList } from '@/api/picking-process'
    import PopupSelect from '@/components/page/popup-select'
    import RaTable from '@/components/base/ra-table'

export default {
    data() {
        return {
            areaList: [],
            wId: '',
            area: {name: '全部', id: ''},
            tableHeader: [{label: '拣货单号', value: 'id'}, {label: '日期', value: 'time', width: 200}, {label: '状态', value: 'status'}],
            tableData: [{id: '123', time: '2018-9-9', status: '待拣'}, {id: '123', time: '2017-9-9', status: '待拣'}, {id: '123', time: '2019-9-9', status: '待拣'}]
        }
    },
    mounted() {
        this.wId = this.$route.query.wid;
        this.getAreaList()
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
        }
    },
    components: {
        PopupSelect,
        RaTable
    },
}
</script>
<style lang="stylus" scoped>
    .panel {
        background-color: $color-dark-grey;
        padding 20px 0
        border-radius 0 0 8px 8px
    }
</style>


