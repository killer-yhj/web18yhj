import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path:'/login',
      component:()=>import('./views/Login.vue')
    },
    {
      path:'/home',
      component:()=>import('./views/Home.vue'),
      redirect:'/home/gzt'
    },
    {
      path:'/home',
      component:()=>import('./views/Home.vue'),
      children:[
      {
        path:'/home/gzt',
        component:()=>import('./views/Gzt.vue')
      },
      {
        path:'/home/xpgl',
        component:()=>import('./views/Xpgl.vue')
      }
    ]
    }
  ]
})
