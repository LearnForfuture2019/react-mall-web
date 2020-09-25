import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {admainRouteFirst} from './routes'
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN'


ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <HashRouter>
            <Route path='/admin' component={App}/>
            <Switch>
                {
                    admainRouteFirst.map(route => {
                        return (
                            <Route
                                path={route.pathname}
                                key={route.pathname}
                                component={route.component}
                            />
                        )
                    })
                }
                {/*当输入跟路径时，跳转到 /admin*/}
                <Redirect to='/admin' from='/' exact/>
            </Switch>
        </HashRouter>
    </ConfigProvider>
    ,
    document.getElementById('root')
);


