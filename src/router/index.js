import Vue from 'vue'
import VueRouter from 'vue-router'
import BnbApp from '../views/BnbApp.vue'
import BnbHomePage from '../views/BnbHomePage.vue'
import BnbDetails from '../views/BnbDetails.vue'
import BnbLogin from '../views/BnbLogin.vue'

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
    {
        path: '/user',
        name: 'BnbLogin',
        component: BnbLogin
    }
]

const router = new VueRouter({
    routes
})

export default router