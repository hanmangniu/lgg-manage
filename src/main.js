import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import router from './router/router'
import { post, fetch, patch, put, dele } from './utils/axios'

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

Vue.use(VueRouter)
//定义全局变量
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$dele = dele
Vue.prototype.$put = put
Vue.use(Antd);
new Vue({
	router,
  render: (h) => h(App),
}).$mount("#app");
