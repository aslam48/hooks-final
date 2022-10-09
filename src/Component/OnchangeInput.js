import React, {useState} from 'react'

const OnchangeInput = () => {
    const [input, SetInput] = useState("aslam")

   let onChange = (e) => {
        const change = e.target.value
        SetInput(change)
    }
  return (
    <div>
        {input}
        <input placeholder="write something..." onChange={onChange} />
    </div>
  )
}

export default OnchangeInput