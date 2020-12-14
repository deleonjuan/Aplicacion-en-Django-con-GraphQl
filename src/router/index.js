import Vue from 'vue'
import Router from 'vue-router'

import HomeScreen from '@/views/Home'
import ProductsScreen from '@/views/Products'
import AllProductsScreen from '@/views/AllProducts'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'HomeScreen',
      component: HomeScreen
    },
    {
      path: '/productos/:comercial',
      name: 'ProductsScreen',
      component: ProductsScreen
    },
    {
      path: '/productos',
      name: 'AllProductsScreen',
      component: AllProductsScreen
    }
  ]
})