import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSearch,
  faBriefcase,
  faMapPin,
  faStar,
  faArchive,
  faUserFriends,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Home from './components/Home/Home'
import Result from './components/Result/Result'

library.add(
  faSearch,
  faBriefcase,
  faMapPin,
  faStar,
  faArchive,
  faUserFriends,
  faSpinner
)

Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/result/:username',
      component: Result,
      name: 'result',
      props: true,
    },
    {
      path: '*',
      component: Home,
    },
  ],
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
