import axios from 'axios'
import { message } from 'antd'
import { getStorage } from '@/utils/storage'
import { objectToStringHandle, clipObjNull } from '@/utils/formatter'
import hosts from '@/service/host'

interface optionType {
  server: string,
  token: boolean,
  isFormUrlencoded: boolean
}

export function request (method: string, url: string, params?: any, options?: optionType) {
  const {
    server = 'type1',
    token = false,
    isFormUrlencoded = false
  } = options || {}
  const baseURL = hosts[server]
  const headers = {
    token: ''
  }
  if (token) {
    headers.token = getStorage('token') as string
  }
  if (isFormUrlencoded) {
    headers['content-type'] = 'application/x-www-form-urlencoded'
  } else {
    headers['content-type'] = 'application/json'
  }
  method = method.toUpperCase()

  clipObjNull(headers, true)
  const service = axios.create({
    baseURL,
    headers
    // withCredentials: true // 是否需要携带cookie
  })
  let fetchResult
  // 获取到不同请求方式的实例
  if (method === 'GET') {
    fetchResult = service.get(url, {
      params
    })
  } else if (method === 'POST') {
    if (isFormUrlencoded) {
      fetchResult = service({
        url,
        method: 'POST',
        data: objectToStringHandle(params)
      })
    } else {
      fetchResult = service.post(url, params)
    }
  }
  // 对错误的 code 统一处理并且弹框提示
  if (fetchResult) {
    return fetchResult.then((res) => {
      const { status, data } = res

      if (status === 200) {
        const { code, msg } = data
        if (code !== 10000 && code) {
          message.error({
            content: msg || 'Error'
          })
          return Promise.reject(msg)
        } else {
          return Promise.resolve(data)
        }
      } else {
        message.error({
          content: '请求服务端失败'
        })
        return Promise.resolve(data)
      }
    })
  }
}
