import { request } from './request'


export function getHomeAllDate() {
    return request({
        url: '/api/index',
        method: 'get',
    })
}
export function getBanner() {

}