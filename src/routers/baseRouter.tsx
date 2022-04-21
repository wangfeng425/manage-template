import LoadableComponent from './../utils/loadComponents'

const ListManager = LoadableComponent(() => import('@/views/listManager'))
const todolist = LoadableComponent(() => import('@/views/useRedux/todolist'))
const reduxAsync = LoadableComponent(() => import('./../views/useRedux/reduxAsync'))
const Welcome = LoadableComponent(() => import('@/views/welcome/index'))
const chart = LoadableComponent(() => import('@/views/other/chart'))
const loadingDemo = LoadableComponent(() => import('@/views/other/loadingDemo'))
const draft = LoadableComponent(() => import('@/views/other/draft'))

interface RouterType {
  path: string,
  component: any,
  children?: RouterType[],
  exact?: boolean | any,
  value: string
}

const BaseRouter: RouterType[] = [
  {
    path: '/welcome',
    component: Welcome,
    value: 'welcome'
  },
  {
    path: '/listManager',
    component: ListManager,
    value: 'listManager'
  },
  {
    path: '/useRedux/todolist',
    component: todolist,
    value: 'todolist'
  },
  {
    path: '/useRedux/reduxAsync',
    component: reduxAsync,
    value: 'reduxAsync'
  },
  {
    path: '/other/chart',
    component: chart,
    value: 'chart'
  },
  {
    path: '/other/loadingDemo',
    component: loadingDemo,
    value: 'loadingDemo'
  },
  {
    path: '/other/draft',
    component: draft,
    value: 'draft'
  }
]

export { BaseRouter }