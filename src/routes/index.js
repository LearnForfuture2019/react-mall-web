import {
    Login,
    DashBoard,
    NotFound,
    Item,
    Marketing,
    Permission,
    Order
} from '../views'

//注册一级路由
export const admainRouteFirst =[
    {
        pathname:'/login',
        component:Login
    },
    {
        pathname:'/404',
        component:NotFound
    },
]
//二级目录
export const adminRouteSecond = [
    {
        pathname:'/admin/dashboard',
        component:DashBoard
    },
    {
        pathname: '/admin/item',
        component: Item
    },
    {
        pathname:'/admin/order',
        component:Order
    },
    {
        pathname:'/admin/marketing',
        component:Marketing
    },
    {
        pathname:'/admin/permission',
        component:Permission
    }
]