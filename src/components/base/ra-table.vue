<template>
    <div class="table">
        <table class="table-header">
            <thead class="header border-bottom-1px">
            <tr>
                <th :width="col.width" v-for="(col, index) in header" :key="`col-${index}`">{{col.label}}</th>
            </tr>
            </thead>
        </table>
        <cube-scroll
            ref="scroll"
            :data="data"
        >
            <table class="table-body">
                <tr class="tr" v-for="(row, index) in data" :key="`tbody-row-${index}`" @click="rowClick(row)">
                    <td :width="col.width" v-for="(col, index) in header" :key="`tbody-col-${index}`" :class="{green: row.status === 2 && col.value === 'status_name'}">
                        {{row[col.value]}}
                    </td>
                </tr>
            </table>
        </cube-scroll>
    </div>
</template>

<script>
    export default {
        name: "raTable",
        props: {
            header: {
                type: Array,
                default: () => []
            },
            data: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            rowClick(row) {
                this.$emit('click', row)
            },
        },
        computed: {
        }
    }
</script>

<style scoped lang="stylus">
.table {
    width: 100%
    border-radius 5px
    overflow: hidden
    margin: 5px 0
    .table-header {
        width: 100%
        .header {
            line-height: 36px;
            background-color: $color-light-grey-ss
            color: $color-dark-grey
        }
    }
    >>> .cube-scroll-wrapper {
        width: 100%
        height 500px
        .table-body {
            width: 100%
            line-height:35px
            font-size: 14px;
            .green {
                color: forestgreen
            }
            .tr:nth-child(odd) {
                background-color: $color-col-line;
                color: #555
                box-shadow 0 0 1px 0 rgba(0,0,0,0.1)
            }
        }
    }
}
</style>
