import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

const http = axios.create({
  baseURL: process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost/notes',
});

Vue.prototype.$http = http;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
