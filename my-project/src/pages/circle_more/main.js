import Vue from 'vue'
import App from './index'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()
export default {
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-cell-group': '../../static/dist/cell-group/index',
      'i-cell': '../../static/dist/cell/index',
      'i-icon': '../../static/dist/icon/index'
    }
  }
}