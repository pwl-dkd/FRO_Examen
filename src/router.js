import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Collection from './views/Collection.vue'
import About from './views/About.vue'
import Brand from './views/Brands.vue'
import Sale from './views/Sale.vue'
import Events from './views/Events.vue'
import Contact from './views/Contact.vue'
import SingleProduct from './views/SingleProduct.vue'
import Shipping from './views/Shipping.vue'
import PageNotFound from './views/PageNotFound.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/FRO-examen/Y.2',
  hashbang: false,
  linkActiveClass: 'active',
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
      name: 'brand',
      component: Brand
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
      component: About
    },
    {
      path: '/product',
      name: 'product',
      component: SingleProduct
    },
    {
      path: '/cart',
      name: 'cart',
      component: Shipping
    },
    {
      path: '*',
      name: 'pagenotfound',
      component: PageNotFound
    },
  ]
})
