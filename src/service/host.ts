// 不同环境请求接口域名配置，注意更换为自己所需要的请求域名
const confs = {
  dev: {
    type1: 'https://dev1.com.cn/',
    type2: 'https://dev2.com.cn/'
  },
  test: {
    type1: 'https://test1.com.cn/',
    type2: 'https://test2.com.cn/'
  },
  prd: {
    type1: 'https://prd1.com.cn/',
    type2: 'https://prd2.com.cn/'
  }
};
console.log(process.env.NODE_ENV)
let env: string = 'dev';
if (process.env.NODE_ENV === 'production') {
  env = 'prd'
} else if (process.env.NODE_ENV === 'test') {
  env = 'test'
}

const hosts = confs[env];
export default hosts;
