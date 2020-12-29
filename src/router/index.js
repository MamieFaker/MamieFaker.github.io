import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ShoppingCar from '@/components/ShoppingCar'
import Goodsplus from '@/components/Goodsplus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/ShoppingCar',
      component: ShoppingCar
    },
    {
      path: '/Goodsplus',
      component: Goodsplus
    }

  ]
})
