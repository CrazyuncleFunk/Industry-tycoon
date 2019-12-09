import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import {routes} from './routes'
import store from './store/store'
import { DropdownPlugin } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import { ButtonPlugin } from 'bootstrap-vue'

Vue.use(ButtonPlugin)
Vue.use(CardPlugin)
Vue.use(NavbarPlugin)
Vue.use(DropdownPlugin)
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
