import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes'

Vue.use(Router);//使用vue-router插件

const router = new Router({
    mode : 'history',
    routes
});
// 全局前置守卫
router.beforeEach((to, from, next) => {
    const auth = router.app.$options.store.state.auth;
  
    if (auth && to.path.indexOf('/auth/') !== -1) {
      next('/');
    } else {
      next();
    }
})

export default router;