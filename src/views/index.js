
/*使用react-loadable实现懒加载*/
import Loading from "../components/Loading";
import Loadable from 'react-loadable'

const NotFound = Loadable({
    loader:() => import('./NotFound'),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import('./Login'),
    loading:Loading
})

const DashBoard =Loadable({
    loader:()=>import('./Admin/DashBoard'),
    loading:Loading
})

const Item =Loadable({
    loader:()=>import('./Admin/Item'),
    loading:Loading
})
const Order =Loadable({
    loader:()=>import('./Admin/order'),
    loading:Loading
})
const Marketing =Loadable({
    loader:()=>import('./Admin/Marketing'),
    loading:Loading
})

const Permission =Loadable({
    loader:()=>import('./Admin/Permission'),
    loading:Loading
})

export {
    NotFound,
    Login,
    DashBoard,
    Item,
    Marketing,
    Permission,
    Order
}
