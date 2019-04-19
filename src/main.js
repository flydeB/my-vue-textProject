// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import iView from 'iview/dist/iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'


Vue.use(iView)
Vue.use(Vuex)
Vue.config.productionTip = false

//在其他组件中也能使用 $ajax
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
