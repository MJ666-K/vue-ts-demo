import axios, { type AxiosRequestConfig, AxiosResponse } from 'axios'
import { IHttp } from './type'

axios.defaults.baseURL = `http://localhost:5173/`;


// 请求拦截器
axios.interceptors.request.use((config: AxiosRequestConfig | any) => config);


// 响应拦截器
axios.interceptors.response.use((res: AxiosResponse) => {
    return res
}, err => {
    return Promise.reject(err)
});


const http: IHttp = {
    request: (method, url, params) =>
        axios({
            method: method,
            url: url,
            data: params,
        })
}

export default http;