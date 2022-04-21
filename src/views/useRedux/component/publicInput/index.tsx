import React from 'react';
import { Input } from 'antd'

interface propsType {
  inputVal: number,
  onInputChange: any
}

const PublicInput = (props: propsType) => {
  return (
    <div>
      <Input onChange={(e: any) => props.onInputChange(e.target.value)}
        style={{ width: '200px' }}
        value={props.inputVal}
      />
    </div>
  )
}

export default PublicInput