import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";

const http = axios.create({
  // baseURL: process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost',
  baseURL: process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost:4000',
});

Vue.prototype.$http = http;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
