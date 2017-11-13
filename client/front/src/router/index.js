import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Admin from '@/admin/Admin'
import AdminArticle from '@/admin/AdminArticle'

import Blog from '@/components/Blog'
import About from '@/components/About'
import Article from '@/components/Article'
import Articlelist from '@/components/Articlelist'
//大坑！！！！！
//如果这个文件中有一些组件未import或者
//import出现错误，那有很大概率显示一片空白并且不报错
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Blog',
      name:'Blog',
      component: Blog,
      children:[
        {
            path:'',
            name:'Articlelist',
            component:Articlelist
        },
        {
          path: 'About',
          name: 'About',
          component: About
        },    
        {
          path:'Article/:id',
          name:'Article',
          component: Article
        }
      ]
    },
    {
      path:'/Admin',
      name:'Admin',
      component:Admin,
      children:[
        {
          path:'Article/:id',
          name:'AdminArticle',
          component:AdminArticle
        }
      ]
    }
  ]
})
