import React, {Component} from 'react'

import {Layout, Menu, Breadcrumb} from 'antd';

import logo from '../../assets/imgs/logo.png'
import {adminRouteSecond} from '../../routes'
import {withRouter} from 'react-router-dom'
import './index.css'

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu

const menus = adminRouteSecond.filter(item => item.isNav)
const subMenus = adminRouteSecond.filter(item => item.subNav)

/*映射表，用于完成面包屑功能*/

@withRouter
class Frame extends Component {

    //切换页面
    /*
    * handleNav 操控的是Menu.Item
    * handleSubMenuClick 操控的是第一级目录
    *
    * */


    handleNav = ({item, key, keyPath}) => {
        //获取一级标题与二级标题
        const title = this.getTitle(keyPath[1])
        if (key !== '/admin/dashboard'){
            const subTitle = item.node.innerText
            window.localStorage.setItem('title',title)
            window.localStorage.setItem('subTitle',subTitle)
        }

        this.props.history.replace(key)
    }
    handleSubMenuClick = ({key}) => {
        this.props.history.replace(key)
    }

    getTitle = (pathname)=>{
        if (pathname === '/admin/item'){
            return '商品'
        }else if (pathname === '/admin/order'){
            return '订单'
        }else if(pathname === '/admin/marketing'){
            return '营销'
        }else if (pathname === '/admin/permission'){
            return '权限'
        }
    }



    render() {
        const {pathname} = this.props.location
        const targetPath = pathname === '/admin' ? '/admin/dashboard' : pathname
        const title = window.localStorage.getItem('title')
        const subTitle = window.localStorage.getItem('subTitle')
        console.log({title,subTitle})
        return (
            <Layout>
                <Header className="header">
                    <div className="logo admin-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            selectedKeys={targetPath}
                            style={{height: '100%', borderRight: 0}}
                            onClick={this.handleNav}
                        >
                            {/*单独渲染首页*/}
                            {
                                menus.filter(item => item.title === '首页').map(item => {
                                    return (
                                        <Menu.Item key={item.pathname}
                                                   icon={item.icon}
                                        >
                                            {item.title}
                                        </Menu.Item>
                                    )
                                })
                            }
                            {
                                menus.filter(item => item.title !== '首页').map(item => {
                                    return (
                                        <SubMenu
                                            key={item.pathname}
                                            title={
                                                <span>
                                                    {
                                                        item.icon
                                                    }
                                                    <span>{item.title}</span>
                                                </span>
                                            }
                                            onTitleClick={this.handleSubMenuClick}
                                        >
                                            {/*通过pathname来判断应该渲染哪几个*/}
                                            {
                                                subMenus.filter(subItem => subItem.mainLevel === item.pathname)
                                                    .map(subItem => {
                                                        return (
                                                            <Menu.Item
                                                                key={subItem.pathname}
                                                                icon={subItem.icon}
                                                            >

                                                                {
                                                                    subItem.subTitle
                                                                }
                                                            </Menu.Item>
                                                        )
                                                    })
                                            }
                                        </SubMenu>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            {
                                title?<Breadcrumb.Item>{title}</Breadcrumb.Item>:null
                            }
                            {
                                subTitle?<Breadcrumb.Item>{subTitle}</Breadcrumb.Item>:null
                            }
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 12,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                        <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default Frame