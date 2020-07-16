import Vue from 'vue'
import VueRouter from 'vue-router'
import BnbApp from '../views/BnbApp.vue'
import BnbHomePage from '../views/BnbHomePage.vue'
import BnbDetails from '../views/BnbDetails.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'BnbHome',
        component: BnbHomePage
    },
    {
        path: '/app',
        name: 'BnbApp',
        component: BnbApp
    },
    {
        path: '/details/:id',
        name: 'BnbDetails',
        component: BnbDetails
    },
]

const router = new VueRouter({
    routes
})

export default router