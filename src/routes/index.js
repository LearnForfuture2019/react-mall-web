import React from "react";
import {
    Login,
    DashBoard,
    NotFound,
    Item,
    Marketing,
    Permission,
    Order
} from '../views'

import {PieChartOutlined} from '@ant-design/icons'

//注册一级路由
export const admainRouteFirst = [
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound
    },
]
//二级目录
export const adminRouteSecond = [
    {
        pathname: '/admin/dashboard',
        component: DashBoard,
        isNav: true,
        title: '首页',
        icon:<PieChartOutlined />
    },
    {
        pathname: '/admin/item',
        component: Item,
        isNav: true,
        title: '商品',
        icon:<PieChartOutlined />
    },
    {
        pathname: '/admin/order',
        component: Order,
        isNav: true,
        title: '订单',
        icon:<PieChartOutlined />
    },
    {
        pathname: '/admin/marketing',
        component: Marketing,
        isNav: true,
        title: '营销',
        icon:<PieChartOutlined />
    },
    {
        pathname: '/admin/permission',
        component: Permission,
        isNav: true,
        title: '权限',
        icon:<PieChartOutlined />
    }
]