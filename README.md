## 基于React+Hook+ts+react-router-dom+antd后台模版
* react@17.0.2
* react-router-dom@6.2.1
* antd@4.19.0

基于以上做的一个简易后台模版。

### 项目结构
	|-- src                              // 源码目录
	|   |-- assets                       // 静态文件
    |     |-- images
    |     |-- style                      // 全局样式，项目中采用原子式
    |     |-- const.ts                   // 写死的变量
    |   |-- components                   // 公共组件
    |   |-- router                       // 路由配置
    |   |-- services                     // 请求配置和接口定义
    |   |-- store                        // redux
    |   |-- utils                        // 公用函数
	|   |-- views                   	 // 主要路由页面
	|   |-- App.tsx                      // 页面入口文件
	|   |-- index.tsx                    // 程序入口文件，加载各种公共组件
    |   |-- nprogress.d.ts               // ts对一些依赖的声明
    |-- .env.*                           // 环境变量文件
    |-- .eslintrc.js                     // exlint配置
	|-- .gitignore                       // 忽略的文件
    |-- config-overrides.js              // 项目配置
	|-- public
	|   |-- index.html
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明
	|-- publish.sh                       // publish
	
### 预览地址
http://192.168.1.190/react-test/#/login
账号：admin
密码：123456

### 样式
项目采用了sass，利用函数生成原子式样式。优点：使用起来方便；缺点：类名过长。

### 路由
自定义封装了LoadableComponent方法，在进入页面或刷新是采用进度条代替。

### 项目发布
在publish.sh中配置发布ip和地址，bash publish.sh XXX。例如发布测试环境：bash publish.sh test



项目是抽时间写的，很多ts定义类型不是很正确，日后会继续补充完善。
