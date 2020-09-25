/*发送 ajax请求*/
import axios from 'axios'

/*这是webpack配置*/
const isDev =process.env.NODE_ENV === 'development'

/*构建axios实例*/
const service = axios.create({
    baseURL:'http://rap2api.taobao.org/app/mock/267369'
})

//request拦截器
service.interceptors.request.use(config =>{
    return config
})

//response拦截器
service.interceptors.response.use(resp =>{
    if (resp.data.code === 200){
        return resp.data.data
    }
})

//获取商品列表
export const getItemList = () => {
    return  service.post('/api/v2/item/list')
}