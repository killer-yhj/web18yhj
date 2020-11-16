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
      },
      {
        path:'/home/fbsp',
        component:()=>import('./views/Fbsp.vue')
      }
      ,
      {
        path:'/home/flgl',
        component:()=>import('./views/Flgl.vue')
      },{
        path:'/home/ppgl',
        component:()=>import('./views/Ppgl.vue')
      },{
        path:'/home/gggl',
        component:()=>import('./views/Gggl.vue')
      },{
        path:'/home/lxgl',
        component:()=>import('./views/Lxgl.vue')
      },{
        path:'/home/spzx',
        component:()=>import('./views/Spzx.vue')
      }
      ,{
        path:'/home/sppj',
        component:()=>import('./views/Sppj.vue')
      },{
        path:'/home/rxsp',
        component:()=>import('./views/Rxsp.vue')
      },{
        path:'/home/kcyj',
        component:()=>import('./views/Kcsp.vue')
      },{
        path:'/home/ddgl',
        component:()=>import('./views/Ddgl.vue')
      },{
        path:'/home/dykd',
        component:()=>import('./views/Dykd.vue')
      }
      ,{
        path:'/home/fhxx',
        component:()=>import('./views/Fhxx.vue')
      },{
        path:'/home/thfk',
        component:()=>import('./views/Tuihtk.vue')
      },{
        path:'/home/gly',
        component:()=>import('./views/Gly.vue')
      },{
        path:'/home/jsgl',
        component:()=>import('./views/Jsgl.vue')
      },{
        path:'/home/ggbw',
        component:()=>import('./views/Ggbw.vue')
      },{
        path:'/home/gggl2',
        component:()=>import('./views/Gggl2.vue')
      }
      ,{
        path:'/home/yhj',
        component:()=>import('./views/Yhj.vue')
      } ,{
        path:'/home/zxkf',
        component:()=>import('./views/Zxkf.vue')
      } ,{
        path:'/home/syhb',
        component:()=>import('./views/Syhb.vue')
      },{
        path:'/home/czxtrz',
        component:()=>import('./views/Czxtrz.vue')
      }
    ]
    }
  ]
})
