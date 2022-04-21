/**
 * 进入新页面或刷新时用进度条取代刷新
 */
import React, { useEffect } from 'react'
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const LoadingPage = () => {
  useEffect(() => {
    NProgress.start();
    return function cleanup () {
      NProgress.done()
    };
  })

  return (
    <div/>
  )
}

const LoadableComponent = (component: any) => {
  return Loadable({
    loader: component,
    // eslint-disable-next-line react/no-multi-comp
    loading: ()=><LoadingPage/>
  })
}

export default LoadableComponent