import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Frame from "./components/frame";
import {DashBoard} from './views'
import {adminRouteSecond,adminRouteThird} from './routes'
const menus = adminRouteSecond.filter(route => route.subNav)
export default class App extends React.Component {
    render() {

        return (
            <Frame>
                <Switch>
                    <Route component={DashBoard} path='/admin/dashboard'/>
                    {
                        menus.map(route => {

                            return (
                                <Route path={route.pathname}
                                       key={route.pathname}
                                       component={route.component}
                                />
                            )
                        })
                    }
                    {
                        adminRouteThird.map(route =>{
                            return (
                                <Route path={route.pathname}
                                       component={route.component}
                                       key={route.pathname}/>
                            )
                        })
                    }
                    <Redirect to={adminRouteSecond[0].pathname} from='/admin' exact/>
                    <Redirect to='/admin/item/list' from='/admin/item' exact/>
                    <Redirect to='/admin/order/list' from='/admin/order' exact/>
                    <Redirect to='/admin/marketing/activity' from='/admin/marketing' exact/>
                    <Redirect to='/admin/permission/usr' from='/admin/permission' exact/>
                    {/*访问其它url，返回404*/}
                    {/*<Redirect to='/404'/>*/}
                </Switch>
            </Frame>
        )
    }
}