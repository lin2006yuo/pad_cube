import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from '@/router'
import store from './store'
import './common/stylus/index.styl'
// svg
import './common/svg/iconfont'
Vue.config.productionTip = false;

import RaTable from '@/components/base/ra-table'
import RaInfo from '@/components/base/ra-info'
import RaLabelItem from '@/components/base/ra-label-item'


Vue.component('RaTable', RaTable)
Vue.component('RaInfo', RaInfo)
Vue.component('LabelItem', RaLabelItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
