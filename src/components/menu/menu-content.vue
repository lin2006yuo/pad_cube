<template>
    <div class="c-menu-content">
        <div class="squares" v-for="(row, rowIndex) in splitItem" :key="`row-${rowIndex}`">
            <!-- item -->
            <div class="square" :class="{active: `${rowIndex}_${index}` === activeIndex}" v-for="(item, index) in row" :key="`square-${index}`" @click="routerLink(item.path, `${rowIndex}_${index}`)">
                <svg class="svg-icon">
                    <use :xlink:href="`#icon-${item.icon}`"></use>
                </svg>
                <span class="square-text">{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    const ROW_ITEM_NUMBER = 3; //每行的item数量

    export default {
        name: "menuContent",
        data() {
            return {
                activeIndex: ''
            }
        },
        props: {
            items: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            // 一维数组转二维数组
            splitItem() {
                let len = this.items.length;
                let rowNum = len % 4 === 0 ? len / 4 : Math.floor( (len / 4) + 1 );
                let ret = [];
                for(let i = 0; i < rowNum; i++) {
                    let temp = this.items.slice(i*ROW_ITEM_NUMBER, i*ROW_ITEM_NUMBER + ROW_ITEM_NUMBER);
                    ret.push(temp)
                }
                return ret
            }
        },
        methods: {
            routerLink(path, index) {
                this.$emit('link-to', path);
                this.activeIndex = index
            }
        }
    }
</script>

<style scoped lang="stylus">
    .c-menu-content {
        padding: 8px
        .squares {
            display flex
            flex-wrap wrap
            .square {
                align-items center
                margin 5px
                flex 1
                display: flex;
                flex-direction column;
                background-color: #fff;
                padding 15px 0;
                border-radius 8px
                .svg-icon {
                    display inline-block
                    width: 50px;
                    height: 50px
                }
                .square-text {
                    margin-top 8px
                    font-size: 14px;
                }
            }
        }
    }
</style>
