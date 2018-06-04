// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// 引入 vue.js 的默认值
import Vue from 'vue';
// 引入 App.vue 的默认值
import App from './App';
// 如果引入的是 index.js，可以使用下面的简写，等价于 import router from './router/index.js'
import router from './router';
import store from './store';
import './directives';
import './components';
import './filters'
import VueSweetAlert2  from './plugins/vue-sweetalert2'
import Message from './plugins/message'
import { mockArticles } from './mock/data'
import ls from './utils/localStorage'
import './mock'
import axios from 'axios'

Vue.use(VueSweetAlert2)
Vue.use(Message)
// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

// 将 axios 添加到 Vue.prototype 上，使其在实例内部的所有组件中可用
Vue.prototype.$axios = axios

const AddMockData = (() => {
  // 是否加入测试数据
  const isAddMockData = true
  // 用户数据
  let userArticles = ls.getItem('articles')

  if (Array.isArray(userArticles)) {
    userArticles = userArticles.filter(article => parseInt(article.uid) === 1)
  } else {
    userArticles = []
  }

  if (isAddMockData) {
    // 合并用户数据和测试数据，使用合并值作为所有文章
    store.commit('UPDATE_ARTICLES', [...userArticles, ...mockArticles(60)])
  } else {
    // 使用用户数据作为所有文章
    store.commit('UPDATE_ARTICLES', userArticles)
  }
})()

// eslint 配置，允许 new 一个实例后不赋值，我们没有使用 eslint，如果有，则下一行注释不可缺少
/* eslint-disable no-new */
// 创建一个新的 Vue 实例
new Vue({
  el: '#app',
  router,//在当前实例中注入路由,这样就能在实例内部，使用路由相关的功能了。
  store,
  components: { App },
  template: '<App/>'
});
