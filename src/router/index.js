import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import Home from '@/page/home/home'
import Login from '@/page/login/login'
import todoBrother from '@/page/todo/todoBrother'
import routerIndex from '@/page/routerVue/index'
import routerChild from '@/page/routerVue/children/routerChild'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/',
      name:'Home',
      component:Home,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path:'/todoBrother',
      name:'todoBrother',
      component:todoBrother,
    },
    {
      path:'/routerIndex',
      name:'routerIndex',
      component:routerIndex,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'child',
          component: routerChild
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.token.length > 0) {  // 通过store获取当前的token是否存在
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
export default router
