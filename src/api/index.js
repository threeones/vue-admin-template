// import { showValidator, post, get, put, remove, jsonToUrlQuery } from '@/utils/request'
import { post } from '@/utils/request'

// api调用封装
// 用户登录
export function postLogin(param, successCallback, errorCallback) {
  post('/inner/login', param, successCallback, errorCallback, errorCallback)
}
// 退出登录
export function postLogout(param, successCallback, errorCallback) {
  post('/inner/logout', param, successCallback, errorCallback, errorCallback)
}