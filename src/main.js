// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import * as custom  from '@/filter/filter.js'
import { LoadingPlugin } from 'vux'
import { AlertPlugin } from 'vux'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(AlertPlugin)
Vue.use(LoadingPlugin)

//定义全局过滤器
console.log(custom,'custom')
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
