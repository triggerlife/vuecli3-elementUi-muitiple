import Vue from 'vue'
import Router from 'vue-router'
import checkToken from "@/plugins/check-token";
Vue.use(Router)
/**
 * @author by dz-tangpeng 2018/10/11
 *   功能说明
 *   1: PC需要嵌套子路由
 *   2：如果是左侧没有导航栏的页面，需要在name后面加上NoNav
 *   3: 如果是不想在面包屑中显示需要在meta.title里面加上show: false
 */
const router = new Router({
    routes: [
        {
            path: '/',
            component: resolve => require.ensure([], () => resolve(require('../views/Home.vue')), 'Home'),
            meta: {name: 'test', show: true},
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
    // 获取Token
    let token = checkToken.getToken()
    //根据字段判断是否路由过滤
    if (token == null) {
        window.location.href = '/index.html#/login'
        return;
    }
    next();
})
export default router;