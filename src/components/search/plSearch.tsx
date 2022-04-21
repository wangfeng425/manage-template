import React from 'react'
import { Button } from 'antd'
import PlSearchItem from './plSearchItem'
import './plSearch.scss'
interface propsType{
  isShowSearch: boolean,
  children: any,
  footer: any
}

const PlSearch = (props: propsType) => {
  return (
    <div className="pl-search-component">
      <div className="pl-search-content">
        {props.children}
        {
          props.isShowSearch
            ? <PlSearchItem content={<div className="tar">
              <Button type="primary">查 询</Button>
              <Button className="ml10">清 除</Button>
            </div>
            }
            isOperation
            />
            : null
        }
      </div>
      <div className="pl-search-operation">
        {props.footer}
      </div>
    </div>
  )
}

export default PlSearch