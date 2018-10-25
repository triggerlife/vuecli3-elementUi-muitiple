import Vue from 'vue'
import Router from 'vue-router'
import checkToken from "@/plugins/check-token";

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            component: resolve => require.ensure([], () => resolve(require('../views/Home.vue')), 'Home'),
            meta: {name: 'test', show: true},
        },
        {
            path: '/Login',
            component: resolve => require.ensure([], () => resolve(require('../views/Login.vue')), 'Login'),
            meta: {name: '登录', show: true},
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {//如果设置标题，拦截后设置标题
        document.title = to.meta.title
    }
    if (to.matched.length === 0) {//匹配不到相对应的路由时，跳转到首页
        to.name ? next({name: to.name}) : next('/')
        return
    }
    //获取Token
    let token = checkToken.getToken()
    //根据字段判断是否路由过滤
    if (token == null) {
        window.location.href = '/index.html#/login'
        return;
    }
    next();
})
export default router;