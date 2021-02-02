import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Cookies from 'js-cookie'


/*全局  路由的钩子函数*/
// eslint-disable-next-line no-unused-vars
router.beforeEach((to,from,next) => {
    if(to.path === '/') {
        next();
    }else if(to.path === '/about') {
        if (Cookies.get("user")!==undefined){
            next();
        }else {
            next('/test')
        }
    }else {
        next();
    }
})

createApp(App).use(router).mount('#app')
