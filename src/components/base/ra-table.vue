<template>
    <table class="table">
        <thead class="header">
            <tr>
                <th :width="col.width" v-for="(col, index) in header" :key="`col-${index}`">{{col.label}}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>12</td>
                <td>12</td>
                <td>12</td>
            </tr>
            <tr>
                <td>12</td>
                <td>12</td>
                <td>12</td>
            </tr>
        </tbody>
    </table>
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
        }
    }
</script>

<style scoped lang="stylus">
.table {
    width: 100%
    border-radius 5px
    overflow: hidden
    margin: 5px 0
    .header {
        line-height: 36px;
        background-color: $color-light-grey-ss
        color: $color-dark-grey
    }
}
</style>
