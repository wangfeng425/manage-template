export const menus = [
  {
    key: 6,
    title: '首页',
    path: '/welcome',
    icon: 'icon-shouye'
  },
  {
    key: 1,
    title: 'redux使用',
    path: '/useRedux',
    icon: 'icon-hexin',
    children: [
      {
        key: 3,
        title: 'redux实现TODO',
        path: '/useRedux/todolist'
      },
      {
        key: 4,
        title: 'redux异步',
        path: '/useRedux/reduxAsync'
      }
    ]
  },
  {
    key: 2,
    title: '展示组件',
    path: '/listManager',
    icon: 'icon-shujuzhanshi',
    children: [
      {
        key: 5,
        title: '表格',
        path: '/listManager'
      }
    ]
  },
  {
    key: 10,
    title: '其他',
    path: '/other',
    icon: 'icon-qita',
    children: [
      {
        key: 11,
        title: '图表',
        path: '/other/chart'
      },
      {
        key: 12,
        title: '加载动画',
        path: '/other/loadingDemo'
      },
      {
        key: 13,
        title: '富文本',
        path: '/other/draft'
      }
    ]
  }
]