import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { PaginationPlugin, createResource } from 'vuex-pagination'
import { fetchPage } from '../_api/api-client'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(PaginationPlugin)

const store = new Vuex.Store({
  strict: true
})

// Initialize resource
createResource('licenses', fetchPage)

console.log('fetchPage', fetchPage)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
