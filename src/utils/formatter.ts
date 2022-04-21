/**
* get请求，参数转换成拼接的字符串
* 请求参数都转成'token=FeiXia&name=aa&id=bbb'的形式
*/
export function objectToStringHandle (data: any) {
  let dataStr = '';
  Object.keys(data).forEach(key => {
    dataStr += `${key}=${data[key]}&`;
  });
  if (dataStr !== '') {
    dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
  }
  return dataStr;
}

/* 过滤对象里面的null
  obj_params: 处理的对象
  type：传表示 处理null 和 空字符串
*/
export function clipObjNull (obj_params: any, type: boolean) {
  const obj = obj_params;
  for (const m in obj) {
    if (obj[m] === null) {
      delete obj[m];
    }
    if (type && obj[m] === '') {
      delete obj[m];
    }
  }
  return obj;
}