import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Frame from "./components/frame";

import {adminRouteSecond} from './routes'
export default class App extends React.Component {
    render() {
        return (
            <Frame>
                <Switch>
                    {
                        adminRouteSecond.map(route => {
                            return (
                                <Route path={route.pathname}
                                       key={route.pathname}
                                       component={route.component}
                                />
                            )
                        })
                    }
                    <Redirect to={adminRouteSecond[0].pathname} from='/admin' exact/>
                    {/*访问其它url，返回404*/}
                    <Redirect to='/404'/>
                </Switch>
            </Frame>
        )
    }
}