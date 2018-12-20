import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AppMain from '@/views/layout/AppMain'
import Home from '@/views/home/home'
import Navbar from '@/views/layout/navbar/navbar'
import Sidebar from '@/views/layout/sidebar/sidebar'
import Block from '@/views/block/block'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/projects',
    name: 'AppMain',
    component: AppMain,
    children: [
      {
        path: 'navbar',
        name: 'uuuuuids',
        component: Navbar
      },
      {
        path: 'sidebar',
        component: Sidebar
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: 'biaot', py: 'oo' },
    uuuid: {title: 0}
  },
  {
    path: '/block',
    name: 'block',
    component: Block,
    meta: { title: 'biaot', py: 'oo' },
    uuuid: {title: 0}
  },
  {
    path: '/config',
    component: Block
  }
]

const router = new Router({ routes: constantRouterMap })
export default router

router.beforeEach((to, from, next) => {
  next()
})

/* export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/projects',
      name: 'AppMain',
      component: AppMain,
      children: [
        {
          path: 'navbar',
          name: 'uuuuuids',
          component: Navbar
        },
        {
          path: 'sidebar',
          component: Sidebar
        }
      ]
    },
    {
      path: '/home',
      redirect: '/projects',
      name: 'Home',
      component: Home,
      uuuid: {title: 0}
    },
    {
      path: '/config',
      component: Block
    }
  ]
}) */
