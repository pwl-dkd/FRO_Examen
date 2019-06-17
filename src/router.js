import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Collection from './views/Collection.vue'
import Brands from './views/Brands.vue'
import Sale from './views/Sale.vue'
import Events from './views/Events.vue'
import Contact from './views/Contact.vue'
import PageNotFound from './views/PageNotFound.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vue_gedoe/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/brands',
      name: 'brands',
      component: Brands
    },
    {
      path: '/sale',
      name: 'sale',
      component: Sale
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      name: 'pagenotfound',
      component: PageNotFound
    },
  ]
})
