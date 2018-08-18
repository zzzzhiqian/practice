import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import goods from '@/components/goods/goods'
// import ratings from '@/components/ratings/ratings'
// import seller from '@/components/seller/seller'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.prototype.$axiosResponseInterceptor = axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          window.localtion.href = 'url'
          break
        case 403:
          break
        case 500:
          window.alert(401)
          break
      }
    }
    return Promise.reject(error) // 返回接口返回的错误信息
  }
)

Vue.prototype.$alertMsg = (state, msg) => {
  if (state === 'success') {
    console.log(msg, 'success')
  } else if (state === 'fail') {
    console.log(msg, 'error')
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
