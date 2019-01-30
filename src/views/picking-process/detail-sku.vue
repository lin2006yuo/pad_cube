<template>
    <div class="detail-sku">
        <div class="sku-wrapper">
            <div class="img-wrapper">
                <img :src="skuInfo.thumb" alt="">
            </div>
            <div class="info-warpper">
                <div class="item">
                    <span class="name">品名：</span>
                    <span class="info">{{skuInfo.name}}{{skuInfo.spu_name}}</span>
                </div>
                <div class="item">
                    <span class="name">货位：</span>
                    <span class="info">{{itemInfo.warehouse_cargo}}</span>
                </div>
                <div class="item">
                    <span class="name">SKU：</span>
                    <span class="info click" @click="skuClick">{{skuInfo.sku}}</span>
                </div>
                <div class="item">
                    <span class="name">数量：</span>
                    <span class="info">{{itemInfo.quantity}}</span>
                </div>
            </div>
        </div>
        <div class="sku-form">
            <cube-input class="input" v-model="form.turnover_box">
                <span class="form-label" slot="prepend" >箱号</span>
            </cube-input>
            <cube-input class="input" v-model="form.warehouse_cargo">
                <span class="form-label" slot="prepend" >货号</span>
            </cube-input>
            <cube-input class="input" v-model="form.sku">
                <span class="form-label" slot="prepend" >SKU</span>
            </cube-input>
            <cube-input class="input" v-model="form.picking_quantity">
                <span class="form-label" slot="prepend" >数量</span>
            </cube-input>
            <cube-button class='submit'>确认下架</cube-button>
        </div>
        <ra-info ref="raInfo" :tabs="tabs"></ra-info>
    </div>
</template>

<script>
    export default {
        name: "detailSku",
        data() {
            return {
                skuInfo: {},
                itemInfo: {},
                form: {
                    turnover_box: '',
                    warehouse_cargo: '',
                    sku: '',
                    picking_quantity: ''
                },
                tabs: [
                    {
                        label: '详情',
                        component: RaTable
                    },
                    {
                        label: '库存',
                    },
                    {
                        label: '分区',
                        component: RaTable
                    }
                ]
            }
        },
        mounted() {
            this.skuInfo = this.$route.params.sku
            this.itemInfo = this.$route.params.item
            this.initForm()
            console.log(this.skuInfo, this.itemInfo)
        },
        methods: {
            initForm() {
                console.log({iteminfo: this.itemInfo})
                this.form.warehouse_cargo = this.itemInfo.warehouse_cargo
                this.form.picking_quantity = this.itemInfo.quantity
            },
            skuClick() {
                this.$refs.raInfo.show()
            }
        }
    }
</script>

<style scoped lang="stylus">
    .detail-sku {
        background-color: $color-light-grey-ss;
        .sku-wrapper {
            background-color: #fff;
            border-radius 10px
            padding 10px 5px
            margin: 8px
            display flex
            .img-wrapper {
                flex: 0 0 30%
                display flex
                flex-direction column
                justify-content center
                img {
                    width: 100%
                }
            }
            .info-warpper {
                flex 0 0 70%
                .item {
                    display flex
                    margin 10px 0
                    .name{
                        flex 0 0 30%
                        font-size: 14px;
                    }
                    .info {
                        flex 0 0 70%
                        text-align left
                        font-size: 14px;
                        &.click {
                            color: lightskyblue
                        }
                    }
                }
            }
        }
        .sku-form {
            padding: 0 8px;
            .input {
                margin: 8px 0
                .form-label {
                    color $color-dark-grey-opacity
                    padding-left 10px
                }
            }
            .submit {
                margin-top 60px
            }
        }
    }
</style>
