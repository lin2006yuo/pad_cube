<template>
    <transition name="fade">
        <cube-popup
                type="extend-popup"
                ref="selectPopup"
                :mask-closable="true"
                position="top"
                v-show="isVisible"
                @mask-click="maskClick"
        >
            <transition name="slide-up">
                <div class="cube-extend-popup-content" v-show="isVisible">
                    <cube-scroll
                            ref="scroll"
                            :data="items"
                            direction="horizontal"
                            class="horizontal-scroll-list-wrap"
                            :options="scrollOptions"
                    >
                        <li v-for="item in data" class="list-item" @click.stop="select(item)">{{ item.name }}</li>
                    </cube-scroll>
                </div>
            </transition>
        </cube-popup>
    </transition>
</template>

<script>
    export default {
        name: "popupSelect",
        data() {
          return {
              isVisible: false,
              items: [{ name: 'Candy', value: 1 }, { name: 'Cindy', value: 2 }, { name: 'Cindy', value: 2 }, { name: 'Lily', value: 2 }, { name: 'Bob', value: 2 }, { name: 'Harden', value: 2 }],
              scrollOptions: {
                  click: true,
              }
          }
        },
        methods: {
            show() {
                this.isVisible = true;
                this.$nextTick(() => {
                    this.$refs.scroll.refresh()
                })
            },
            hide() {
                if (!this.isVisible) {
                    return
                }
                this.isVisible = false
            },
            maskClick() {
                this.hide()
            },
            select(item) {
                this.isVisible = false;
                this.$emit('select', item)
            }
        },
        props: {
            data: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped lang="stylus">
    .cube-extend-popup
    .cube-extend-popup-content
        color: #fff
    .cube-extend-popup-content >>> .horizontal-scroll-list-wrap {
        border: 1px solid rgba(0, 0, 0, 0.1)
        border-radius: 0 0 12px 12px
        background-color: $color-dark-grey;
        padding: 0 20px
        white-space: nowrap
        .cube-scroll-content {
            display: inline-block
        }
        .list-item {
            display: inline-block;
            padding 40px 0
            margin: 0 20px
        }
    }

</style>
