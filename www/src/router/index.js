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
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/shelter',
    name: 'Shelter',
    component: Shelter
  },
  {
    path: '/box',
    name: 'Box',
    component: Box
  }
  ]
})
