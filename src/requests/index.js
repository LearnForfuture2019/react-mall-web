/*发送 ajax请求*/
import axios from 'axios'

/*这是webpack配置*/
const isDev =process.env.NODE_ENV === 'development'

/*构建axios实例*/
const service = axios.create({
    baseURL:isDev?'http://123.57.51.177:8080':null
})

//request拦截器
service.interceptors.request.use(config =>{
    return config
})

//response拦截器
service.interceptors.response.use(resp =>{
    if (resp.status === 200){
        return resp.data
    }


})

//获取所有品牌列表
export const getBrandList = () => {
    return  service.get('/brand/listAll')
}

//添加品牌
export const createBrand  = (data) =>{
    return service.post('/brand/create',data)
}

//查询指定id品牌
export const findeBrandById = (id) => {
    return service.get(`/brand/${id}`)
}