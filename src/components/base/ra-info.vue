<template>
    <transition name="fade">
        <cube-popup
                type="extend-popup"
                ref="selectPopup"
                :mask-closable="true"
                position="top"
                v-show="isVisible"
                @mask-click="maskClick">
            <div class="ra-info">
                <cube-tab-bar
                    v-model="selectLabel"
                    :show-slider="true"
                    v-if="isVisible"
                    :useTransition="false"
                    :data="tabs"
                    ref="tabBar"
                ></cube-tab-bar>
                <div class="slide-wrapper">
                    <cube-slide
                        :loop="false"
                        :auto-play="false"
                        :show-dots="false"
                        :initial-index="index"
                        :options="slideOptions"
                        ref="slide"
                        @change="onChange"
                        @scroll="onScroll"
                    >
                        <cube-slide-item>
                           <div class="slide-item">1</div>
                        </cube-slide-item>
                        <cube-slide-item>
                            <div class="slide-item">2</div>
                        </cube-slide-item>
                        <cube-slide-item>
                            <div class="slide-item">3</div>
                        </cube-slide-item>
                    </cube-slide>
                </div>
            </div>
        </cube-popup>
    </transition>
</template>

<script>
    export default {
        name: "Info",
        data() {
          return {
              isVisible: false,
              index: 0,
              tabs: [
                  {
                      label: '详情',
                  },
                  {
                      label: '库存',
                  },
                  {
                      label: '分区',
                  }
              ],
              slideOptions: {
                  listenScroll: true,
                  probeType: 3,
                  directionLockThreshold: 0
              }
          }
        },
        props: {
          slide: {
              type: Array,
              default: () => []
          }
        },
        computed: {
            selectLabel: {
                get() {
                    return this.tabs[this.index].label
                },
                set(newVal) {
                    this.index = this.tabs.findIndex(val => {
                        return val.label === newVal
                    })
                }
            }
        },
        methods: {
            hide() {
                if(!this.isVisible) {
                    return
                }
                this.isVisible = false
            },
            show() {
                this.isVisible = true
                this.$nextTick(() => {
                    this.index = 0
                    this.$refs.slide.refresh()
                })
            },
            maskClick() {
                this.hide()
            },
            onChange(current) {
                this.index = current
            },
            onScroll({x}) {
                const tabBarWidth = this.$refs.tabBar.$el.clientWidth
                const slideWidth = this.$refs.slide.slide.scrollerWidth
                const transform = -x / slideWidth * tabBarWidth
                this.$refs.tabBar.setSliderTransform(transform)
            }
        }
    }
</script>

<style scoped lang="stylus">
    .ra-info {
        background-color: #fff;
        margin-top: 33%
        margin-left: 8px;
        margin-right 8px
        padding 8px;
        border-radius 5px
        .slide-item {
            margin-top 10px
            min-height 150px
        }
    }
</style>
