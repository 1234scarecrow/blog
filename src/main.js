import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 加载全局样式文件 */
import "./assets/css/index.css"
import "./assets/css/animate.css"

/* 项目的运行配置 */
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
