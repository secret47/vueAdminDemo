import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Index from '@/components/Index'
import User from '@/pages/User'
import Article from '@/pages/Article'
import New from '@/pages/New'
import Setting from '@/pages/Setting'
import Message from '@/pages/Message'

// import Leftnav from '/@components/Leftnav'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        requiresAuth:true
      },
      children:[
      	{
      		path: '/',
  		    name: 'Index',
  		    component: Index
      	}
      ]
    },
    {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/User',
        name: '用户',
        component: User,
      },
      {
        path: '/Article',
        name: '文章',
        component: Article,
      },
      {
        path: '/New',
        name: '新发布',
        component: New,
      },
      {
      	path:'/Setting',
      	name:'设置',
      	component:Setting
      },
      {
        path:'/Message',
        name:'信息',
        component:Message
      }
    ]
  }
  ]
})
