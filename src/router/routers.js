import Home from '@/pages/Home/Home.vue'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import Login from '@/pages/Login'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

export default(
[
    {
        path:'/home',
        component:Home,
        meta:{show:true}
    },
    {
        name:'Search',
        path:'/search/:keyword?',
        component:Search,
        meta:{show:true}
    },
    {
        path:'/login',   
        component:Login,
        meta:{show:false}
    },
    {
        path:'/register',
        component:Register,
        meta:{show:false}
    },
    {
        path:'/',
        redirect: '/home',
    },
    {
        path:'/detail/:skuid?',
        component:Detail,
        meta:{show:true}
    },
    {
        path:'/addCartSuccess',
        name:'AddCartSuccess',
        // lazy loading
        component: () =>import( "@/pages/AddCartSuccess"),
        meta:{Show:true}
    },
    {
        path:'/ShopCart',
        name:'ShopCart',
        component:ShopCart,
        meta:{Show:true}
    },
    {
        path:'/trade',
        name:'Trade',
        component:Trade,
        meta:{Show:true},
        beforeEnter: (to, from, next) => {
            if(from.path == '/shopcart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/pay',
        name:'Pay',
        component:Pay,
        meta:{Show:true},
        beforeEnter: (to, from, next) => {
            if(from.path == '/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/paysuccess',
        name:'PaySuccess',
        component:PaySuccess,
        meta:{Show:true},
        
    },
    {   
        path:'/center',
        name:'Center',
        component:Center,
        meta:{Show:true},
        children:[
            {
                path:'myOrder',
                name:'MyOrder',
                component:MyOrder,
            },
            {
                path:'groupOrder',
                name:'GroupOrder',
                component:GroupOrder,
            },
            {
                path:'/center',
                redirect:'/center/myOrder'
            }
        ]
    },
    
    

]
)