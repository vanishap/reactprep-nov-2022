import React, {useState} from 'react'

const UseState = () => {
    const [count,setCount]= useState(0);

  return (
    <div>
        <h4>You have clicked me {count} times</h4>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default UseState