

/**
 * 路由使用5步
 * 1. npm install vue-router -S
 * 2. main.js Vue.use(VueRouter)
 * 3. 创建一个路由的配置模块，用来配置路由的map的规则
 *    path /a - component A
 * 4. 把这个配置模块注册到viewmodel
 */

import Vue from "vue"
import VueRouter from "vue-router"

import page1 from "../pages/page1"
import page2 from "../pages/page2"
import newsList from "../pages/newsList"
import newsDetail from "../pages/newsDetail"

Vue.use(VueRouter)

//返回的是一个router规则的路由对象
let router = new VueRouter({
    routes:[
        {path:"/",component:page1},
        {path:"/p2",component:page2},
        {path:"/list",component:newsList},
        {path:"/detail",component:newsDetail},
        {path:"/detail/:id",component:newsDetail}
    ]
})

export default router;
