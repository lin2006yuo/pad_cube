import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from '@/router'
import store from './store'
import './common/stylus/index.styl'
// svg
import './common/svg/iconfont'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
