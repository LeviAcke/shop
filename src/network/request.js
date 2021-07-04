import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 10000
    })

    // 请求拦截
    instance.interceptors.request.use(config => {
        // 如果又一个接口需要认证才可以访问，这里统一设置

        // 直接放行
        return config
    },
        // eslint-disable-next-line no-unused-vars
        err => {

        })

    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data ? res.data : res
    },
        // eslint-disable-next-line no-unused-vars
        err => {
            // 如果有需要授权才可以访问的接口，统一跳转登陆授权

            // 如果又错误，这里会处理，显示错误信息


        })

    return instance(config)
}