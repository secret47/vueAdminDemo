// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iview'
import echarts from 'echarts'
import VueQuillEditor from 'vue-quill-editor'
import 'iview/dist/styles/iview.css'; 

Vue.use(iView)
Vue.prototype.$ajax = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueQuillEditor)

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         //这里判断用户是否登录，我例子中是验证本地存储是否有token
//         if (!sessionStorage) {
//             next({
//                 path: '/login',
//                 query: { redirect: to.fullPath }
//             })
//         } else {
//             next()
//         }
//     } else {
//         next() // 确保一定要调用 next()
//     }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
