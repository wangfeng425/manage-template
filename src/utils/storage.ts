/**
 * 设置，添加，删除本地存储
 *obj {name:'id',value:id};
 key:则存储字段名称；
 */
interface storage {
  name: string,
  value: string
}

export function setStorage (obj: storage) {
  window.localStorage.setItem(obj.name, obj.value)
}

export function getStorage (key: string) {
  return localStorage.getItem(key);
}

export function deleteStorage (key: string) {
  window.localStorage.removeItem(key);
}