import Vue from 'vue';

// 使用VueRouter步骤
// 1.引入vue-router
import VueRouter from 'vue-router';//vue-router是安装好的

// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);//使用

// 引入页面组件
import Home from '../pages/Home.vue';
import Cart from '../pages/Cart.vue';
import Reg from '../pages/Reg.vue';
import Login from '../pages/Login.vue';
import NotFound from '../pages/NotFound.vue';
import discover from '../pages/discover.vue';
import mine from '../pages/mine.vue';
import goods from '../pages/goods.vue';

// 3. 实例化router并配置参数
let router = new VueRouter({
    // mode:'hash',
    // 配置参数：不同的 URL 显示不同的内容
    routes: [
        // 首页
        {
            name: 'home',//设置路由名称，方便执行路由跳转
            path: '/home',  //当浏览器地址为/home时，显示Home组件的内容
            component: Home
        },
        {
            path: '/',  //当浏览器地址为/时，显示Home组件的内容
            redirect: '/home'
        },
        // 购物车
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        // 商品
        {
            name: 'goods',
            path: '/goods/:id',//所以商品页必须路径是/goods/id
            component:goods
        },
        //注册
        {
            path: '/reg',
            component: Reg
        },
        //登录
        {
            path: '/login',
            component: Login
        },
        //发现
        {
            path: '/discover',
            component:discover
        },
        //我的
        {
            name:'mine',
            path: '/mine',
            component:mine
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});


// 5.在组件中使用VueRouter

export default router;//在mian.js中引入