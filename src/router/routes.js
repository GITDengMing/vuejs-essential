export default [
    {
      path: '/auth/register',
      name: 'Register',
      component: () => import('@/views/auth/Register')
    },
    {
      path: '/',
      name: 'Home',
      alias: '/topics',
      component: () => import('@/views/Home')
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: () => import('@/views/auth/Login')
    },
    //Profile.vue 作为 Edit.vue 的嵌套子页面，我们需要在父级添加 children 选项以指定子路由的配置；
    //子路由的 path 为空值 ''，表示该页面作为默认子路由，在导航到父级路由（/users/1/edit）时，就开始加载；
    //使用 meta 选项配置路由的元信息，其值可以是任意类型的数据，我们可以从路由对象中访问该值，如 to.meta.auth；
    {
      path: '/users/1/edit',
      component: () => import('@/views/users/Edit'),
      children : [
        {
          path: '',
          name: 'EditProfile',
          component: () => import('@/views/users/Profile'),
          meta: { auth : true }
        },
        {
          path: '/users/1/edit_avatar',
          name: 'EditAvatar',
          component: ()=> import('@/views/users/Avatar'), 
          meta: { auth : true }
        },
        {
          path: '/users/1/edit_password',
          name: 'EditPassword',
          component: () => import('@/views/users/Password'),
          meta: { auth : true}
        }
      ]
    },
    {
      path: '/articles/create',
      name: 'CreateArticles',
      component: () => import('@/views/articles/Create'),
      meta: { auth : true }
    },
    {
      path: '/articles/:articleId/edit',
      name: 'ArticleEdit',
      component: () => import('@/views/articles/Create')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/Search')
    },
    {
      path: '/:user',
      component: () => import('@/views/articles/Column'),
      children : [
        {
          path: '',
          name: 'Column',
          component: () => import('@/views/articles/List')
        },
        {
          path: '/articles/:articleId/content',
          name: 'ArticleContent',
          component: () => import('@/views/articles/Content')
        }
      ]
    }
]
  