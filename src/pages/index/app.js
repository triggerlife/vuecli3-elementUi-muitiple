import Vue from 'vue'
import '@/plugins/axios'
import App from './App.vue'
import router from './routers/index'
import store from '@/store/index'
import '@/plugins/element.js'
import VueLodash from 'vue-lodash'
import VueCookie from 'vue-cookie'
import * as filters from "@/filtres/index"; // 全局过滤器
import api from '@/plugins/http'
import '@/assets/css/index.less' // 引入公共的每端公共的css
import '@/assets/css/reseltSchool.less'
import dz from '@/assets/js/common' // 公共JS
import axios from "axios";
import checkToken from '@/plugins/check-token'
const options = { name: 'lodash' } // customize the way you want to call it
// 注册全局实用程序过滤器（register global utility filters）.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.use(VueLodash, options) // options is optional
Vue.prototype.api = api
Vue.prototype.dz = dz
Vue.use(VueCookie)
axios.defaults.headers.common['token'] = checkToken.getToken();
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')