import Vue from "vue"
import app from "./app"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import router from "./router"


/**
 * 路由使用5步
 * 1. npm install vue-router -S
 * 2. main.js Vue.use(VueRouter)
 * 3. 创建一个路由的配置模块，用来配置路由的map的规则
 * 4. 把这个配置模块注册到viewmodel
 * 5. 在app.vue 中添加路由slot router-view
 */
//创建一个viewmodel
new Vue({
    el:"#app",
    router, //注册路由规则表
    render(h){
        return h(app)
    }
})


// /a = > routes- > Acomponent -> render -> 指定的位置（路由slot router-view）
