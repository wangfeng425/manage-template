import React from 'react';
import './plSearchItem.scss'
interface propsType{
  label?: any,
  content: any,
  isOperation?: boolean
}

const PlSearchItem = (props: propsType) => {
  return (
    <div className={['pl-search-item-component', props.isOperation ? 'pull-right' : ''].join(' ')} >
      <div className="item-label">
        {props.label}
      </div>
      <div className="item-content">
        {props.content}
      </div>
    </div>
  )
}
export default PlSearchItem