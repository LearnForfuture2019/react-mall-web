import React, {Component} from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';

import logo from '../../assets/imgs/logo.png'
import {adminRouteSecond} from '../../routes'
import {withRouter} from 'react-router-dom'
import './index.css'
const { Header, Content,Footer, Sider } = Layout;

const menus = adminRouteSecond.filter(item =>item.isNav)
@withRouter
class Frame extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        console.log(this.props)
        return (
            <Layout>
                <Header className="header">
                    <div className="logo admin-logo" >
                        <img src={logo} alt="logo"/>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {
                                menus.map(item =>{
                                    return (
                                        <Menu.Item
                                            key={item.pathname}
                                            icon={item.icon}
                                        >
                                            {item.title}
                                        </Menu.Item>

                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default Frame