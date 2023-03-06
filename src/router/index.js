import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import routes from './routers';
import store from '../store'

let router =  new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
    return { y: 0 }
    },
})

router.beforeEach(async (to, from, next)=>{
    
    let token = store.state.user.token
    let name = store.state.user.userInfo.name

    if(token){
        if(to.path == '/login'|| to.path == '/register'){
            next('/home')
        }else{
            if(name){
                next();
            }else{
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error){
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    }
    else{
        if(to.path == '/trade'|| to.path.indexOf('/pay') != -1 || to.path.indexOf('/center') != -1){
            console.log(to.path);
            next('/login?redirect=' + to.path)
        }else{
            next()
        }
    }
})

export default router