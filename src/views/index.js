
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
    loader:()=>import('./Admin/Item/list'),
    loading:Loading
})

const ItemAdd =Loadable({
    loader:()=>import('./Admin/Item/add'),
    loading:Loading
})

const ItemClassification =Loadable({
    loader:()=>import('./Admin/Item/classification'),
    loading:Loading
})

const ItemType =Loadable({
    loader:()=>import('./Admin/Item/type'),
    loading:Loading
})
const ItemManagement =Loadable({
    loader:()=>import('./Admin/Item/management'),
    loading:Loading
})
const AddBrand =Loadable({
    loader:()=>import('./Admin/Item/addBrand'),
    loading:Loading
})

const EditBrand = Loadable({
    loader: () =>import('./Admin/Item/editBrand/index'),
    loading:Loading
})


const OrderList =Loadable({
    loader:()=>import('./Admin/order/list'),
    loading:Loading
})

const OrderSettings =Loadable({
    loader:()=>import('./Admin/order/settings'),
    loading:Loading
})
const OrderReturnRequest =Loadable({
    loader:()=>import('./Admin/order/returnquest'),
    loading:Loading
})
const OrderReturnReason =Loadable({
    loader:()=>import('./Admin/order/returnreason'),
    loading:Loading
})
const MarketingActivity =Loadable({
    loader:()=>import('./Admin/Marketing/activity'),
    loading:Loading
})

const MarketingCoupon =Loadable({
    loader:()=>import('./Admin/Marketing/coupon'),
    loading:Loading
})

const MarketingBrand =Loadable({
    loader:()=>import('./Admin/Marketing/brand'),
    loading:Loading
})
const MarketingNew =Loadable({
    loader:()=>import('./Admin/Marketing/new'),
    loading:Loading
})
const MarketingPopularity =Loadable({
    loader:()=>import('./Admin/Marketing/popularity'),
    loading:Loading
})
const MarketingSpecial =Loadable({
    loader:()=>import('./Admin/Marketing/special'),
    loading:Loading
})
const MarketingAdvertising =Loadable({
    loader:()=>import('./Admin/Marketing/advertising'),
    loading:Loading
})
const PermissionUsr =Loadable({
    loader:()=>import('./Admin/Permission/usr'),
    loading:Loading
})
const PermissionRole =Loadable({
    loader:()=>import('./Admin/Permission/role'),
    loading:Loading
})
const PermissionMenu =Loadable({
    loader:()=>import('./Admin/Permission/menu'),
    loading:Loading
})
const PermissionResource =Loadable({
    loader:()=>import('./Admin/Permission/resource'),
    loading:Loading
})
export {
    NotFound,
    Login,
    DashBoard,
    Item,
    ItemAdd,
    ItemClassification,
    ItemType,
    ItemManagement,
    AddBrand,
    EditBrand,
    MarketingActivity,
    MarketingCoupon,
    MarketingBrand,
    MarketingNew,
    MarketingSpecial,
    MarketingAdvertising,
    MarketingPopularity,
    PermissionUsr,
    PermissionRole,
    PermissionMenu,
    PermissionResource,
    OrderList,
    OrderSettings,
    OrderReturnReason,
    OrderReturnRequest
}
