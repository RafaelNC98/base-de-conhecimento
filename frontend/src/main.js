import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwibmFtZSI6IlJhZmFlbDIiLCJlbWFpbCI6InJhZmFlbDEyM0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjIwNTg3NDA1fQ.pktnKHLqito0jIfg11z-LygPZ5lDVkO20Ve5PD4d2jM'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')