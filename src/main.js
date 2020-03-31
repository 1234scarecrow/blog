import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

/* 加载全局样式文件 */
import "./assets/css/index.css"
import "./assets/css/animate.css"

/* 项目的运行配置 */
Vue.config.productionTip = false

axios.defaults.baseURL='http://45.76.151.126:8081'
// axios.defaults.baseURL='http://127.0.0.1:8080'
// axios.defaults.baseURL = 'http://192.168.31.200:8080'
axios.defaults.withCredentials = true  // Axios每次请求都携带身份认证信息connect.sid
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'  // 修改所有的post请求默认头部
Vue.prototype.$http = axios    // $开头是用户自定义成员方法,把axios工具声明为Vue的实例的自定义成员

// 工具函数: 把Object序列化为k=v&k=v...的形式
Vue.prototype.$serialize = function (dataObj) {
  let arr = []
  for(let p in dataObj){
    let key=encodeURIComponent(p)
    let val=encodeURIComponent(dataObj[p])
    arr.push(key+'='+val)
  }
  return arr.join('&')
}

// 接口们
// axios.get('/user/login')
// axios.post('/user/register')
// axios.get('/user/update')
// axios.post('/course')
// axios.post('/teacher')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
