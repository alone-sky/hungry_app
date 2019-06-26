import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/header'
import Home from '../page/home/home'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // if (store.state.token.length > 0) {  // 通过store获取当前的token是否存在
    //   next();
    // }else {
    //   next({
    //     path: '/login',
    //     query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    //   })
    // }
  }
  else {
    next();
  }
});

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
export default router
