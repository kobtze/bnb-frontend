import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Element from 'element-ui'

import '@/styles/main.scss'
// vue-cover-gallery
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// fontAwesome


Vue.config.productionTip = false
Vue.use(Element)
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
