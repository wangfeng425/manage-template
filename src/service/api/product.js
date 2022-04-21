import { request } from '../request'
export function getHotProduct () {
  return request(
    'get',
    '/getHotProduct'
  )
}