import Vue from 'vue'
import Router from 'vue-router'
import header from './components/header.vue'
import wrap from './components/wrap.vue'
Vue.use(Router)


const route = [{
        path: '*',
        redirect: '/wrap',
    }, {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ './views/About.vue')
    }, {
        path: '/header',
        name: 'header',
        component: header
    },
    {
        path: '/wrap',
        name: 'wrap',
        component: wrap
    }
];

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: route
})