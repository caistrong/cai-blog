import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Article from '@/components/Article'
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
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Blog',
      name:'Blog',
      component: Blog,
    },{
      path:'/Article/:id',
      name:'Article',
      component: Article
    }
  ]
})
