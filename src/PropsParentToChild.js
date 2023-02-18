import React from 'react'

const PropsParentToChild = ({name, city}) => {
  return (
    <div>
      <h1>hi {name} , Hope the weather is good here!</h1>
      <button onClick={()=>city('San Francisco')}>Change City</button>
    </div>
  )
}

export default PropsParentToChild;
