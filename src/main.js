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
import VueSweetAlert2  from './plugins/vue-sweetalert2'

Vue.use(VueSweetAlert2)
// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

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
