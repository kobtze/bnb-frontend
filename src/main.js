import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//Lodash
const _ = require('lodash');

//moment
var moment = require('moment'); // require


// Element UI
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { locale })
    // VueGoogleMaps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyC5PQRy3g0RF1dODi4z8AwJ3bfxQ4lmJ-g',
        libraries: 'places',
    },
})

// SASS
import '@/styles/main.scss'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')