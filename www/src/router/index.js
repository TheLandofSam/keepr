import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Shelter from '@/components/Shelter'
import Box from '@/components/Box'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Shelter',
    name: 'Shelter',
    component: Shelter
  },
  {
    path: '/Box',
    name: 'Box',
    component: Box
  }
  ]
})
