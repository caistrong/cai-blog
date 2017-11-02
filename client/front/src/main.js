// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//以下这三行等到需要复用element-ui的组件时再使用
// import {Button,Select} from 'element-ui'
// Vue.component(Button.name,Button)
// Vue.component(Select.name,Select)

import store from './store'


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
