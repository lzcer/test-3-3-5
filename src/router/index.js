import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Manager from '@/components/Manager'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/manager',
      children: [
        {
          path: '/manager',
          name: 'manager',
          component: Manager
        },
        {
          path: '/edit',
          name: 'edit',
          component: Edit
        }
      ]
    }
  ]
})
