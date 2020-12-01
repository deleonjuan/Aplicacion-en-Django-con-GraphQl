import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomeScreen from '@/views/Home'
import ProductsScreen from '@/views/Products'
import AllProductsScreen from '@/views/AllProducts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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