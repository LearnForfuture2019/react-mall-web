import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {admainRouteFirst} from './routes'
import {HashRouter,Route,Switch,Redirect} from "react-router-dom";


ReactDOM.render(
    <HashRouter>
        <Route path='/admin' component={App}/>
        <Switch>
            {
                admainRouteFirst.map(route =>{
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
  ,
  document.getElementById('root')
);


