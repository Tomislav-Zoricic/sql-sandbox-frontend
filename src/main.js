import Vue from 'vue'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import 'toastr/build/toastr.css'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
