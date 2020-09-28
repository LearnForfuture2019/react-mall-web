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
    console.log(config)
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
export const findBrandById = (id) => {
    return service.get(`/brand/${id}`)
}

//根据id更新指定品牌
export const updateBrandById  = (id,data) =>{
    return service.put(`/brand/update/${id}`,data)
}

//模糊查询品牌