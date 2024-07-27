import App from './App'
import api from '@/common/http/api'
import uvUI from '@/uni_modules/uv-ui-tools'
import * as Pinia from 'pinia';
import { createUnistorage } from './uni_modules/pinia-plugin-unistorage'
import 'virtual:windi.css'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  const store = Pinia.createPinia()
  store.use(createUnistorage())
  app.use(store);
  app.use(uvUI);
  app.use(api)
  return {
    app,
    Pinia
  }
}
// #endif