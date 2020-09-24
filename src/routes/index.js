import React from "react";
import {
    Login,
    DashBoard,
    NotFound,
    Item,
    ItemAdd,
    ItemClassification,
    ItemType,
    ItemManagement,
    MarketingActivity,
    MarketingCoupon,
    MarketingBrand,
    MarketingPopularity,
    MarketingAdvertising,
    MarketingSpecial,
    MarketingNew,
    PermissionUsr,
    PermissionResource,
    PermissionMenu,
    PermissionRole,
    OrderList,
    OrderSettings,
    OrderReturnRequest,
    OrderReturnReason
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
        isNav: true,
        title: '商品',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/item/list',
        component:Item,
        subNav:true,
        subTitle:'商品列表',
        mainLevel:'/admin/item',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/item/add',
        component:ItemAdd,
        subNav:true,
        subTitle:'添加商品',
        mainLevel:'/admin/item',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/item/classification',
        component:ItemClassification,
        subNav:true,
        subTitle:'商品分类',
        mainLevel:'/admin/item',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/item/type',
        component:ItemType,
        subNav:true,
        subTitle:'商品类型',
        mainLevel:'/admin/item',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/item/management',
        component:ItemManagement,
        subNav:true,
        subTitle:'品牌管理',
        mainLevel:'/admin/item',
        icon:<PieChartOutlined />
    },
    {
        pathname: '/admin/order',
        isNav: true,
        title: '订单',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/order/list',
        component:OrderList,
        subNav:true,
        subTitle:'订单列表',
        mainLevel:'/admin/order',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/order/settings',
        component:OrderSettings,
        subNav:true,
        subTitle:'订单设置',
        mainLevel:'/admin/order',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/order/returnrequest',
        component:OrderReturnRequest,
        subNav:true,
        subTitle:'退货申请处理',
        mainLevel:'/admin/order',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/order/returnreason',
        component:OrderReturnReason,
        subNav:true,
        subTitle:'退货原因设置',
        mainLevel:'/admin/order',
        icon:<PieChartOutlined />
    },
    {
        pathname: '/admin/marketing',
        isNav: true,
        title: '营销',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/marketing/activity',
        component:MarketingActivity,
        subNav:true,
        subTitle:'秒杀活动列表',
        mainLevel:'/admin/marketing',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/marketing/coupon',
        component:MarketingCoupon,
        subNav:true,
        subTitle:'优惠券列表',
        mainLevel:'/admin/marketing',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/marketing/brand',
        component:MarketingBrand,
        subNav:true,
        subTitle:'品牌推荐',
        mainLevel:'/admin/marketing',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/marketing/new',
        component:MarketingNew,
        subNav:true,
        subTitle:'新品推荐',
        mainLevel:'/admin/marketing',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/marketing/popularity',
        component:MarketingPopularity,
        subNav:true,
        subTitle:'人气推荐',
        mainLevel:'/admin/marketing',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/marketing/special',
        component:MarketingSpecial,
        subNav:true,
        subTitle:'专题推荐',
        mainLevel:'/admin/marketing',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/marketing/advertising',
        component:MarketingAdvertising,
        subNav:true,
        subTitle:'广告列表',
        mainLevel:'/admin/marketing',
        icon:<PieChartOutlined />
    },
    {
        pathname: '/admin/permission',
        isNav: true,
        title: '权限',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/permission/usr',
        component:PermissionUsr,
        subNav:true,
        subTitle:'用户列表',
        mainLevel:'/admin/permission',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/permission/role',
        component:PermissionRole,
        subNav:true,
        subTitle:'角色列表',
        mainLevel:'/admin/permission',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/permission/menu',
        component:PermissionMenu,
        subNav:true,
        subTitle:'菜单列表',
        mainLevel:'/admin/permission',
        icon:<PieChartOutlined />
    },
    {
        pathname:'/admin/permission/resource',
        component:PermissionResource,
        subNav:true,
        subTitle:'资源列表',
        mainLevel:'/admin/permission',
        icon:<PieChartOutlined />
    },
]

