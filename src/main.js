import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/main.scss'
// vue-cover-gallery
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// fontAwesome

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC5PQRy3g0RF1dODi4z8AwJ3bfxQ4lmJ-g',
        libraries: 'places',

    },


})

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')