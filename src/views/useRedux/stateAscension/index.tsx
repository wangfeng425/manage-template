import React, { useState } from 'react'
import PublicInput from './../component/publicInput'
import './index.scss'

const stateAscension = () => {
  const [inputA, setInputA] = useState(0)
  const [inputB, setInputB] = useState(0)

  return (
    <div className="form-wrap">
      <PublicInput inputVal={inputA}
        onInputChange={(val: number) => { setInputA(val); setInputB(val * 2) }}
      />
      <PublicInput inputVal={inputB}
        onInputChange={(val: number) => { setInputB(val); setInputA(val / 2) }}
      />
    </div>
  )
}

export default stateAscension