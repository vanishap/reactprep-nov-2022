import React, {useState, useRef} from 'react'

const UseRef = () => {
    const textContainer = useRef(null);
    const ageContainer = useRef(null);

    const formHandler= (e)=>{
        e.preventDefault();
        
        alert('form submitted')
        textContainer.current.value='';
        ageContainer.current.value='';
    }
    const toggleText= ()=>{
        if(textContainer.current.placeholder==='Enter name'){
            textContainer.current.placeholder='Enter firstname'
        }else{
            textContainer.current.placeholder='Enter name'
        }
    }
  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
            <input type ='text'
            placeholder='Enter name'
            onMouseEnter={toggleText}
            onMouseLeave={toggleText}
            ref={textContainer}
            ></input>
        </div>
        <div>
            <input type='number'
            placeholder='Enter age'
            ref={ageContainer}></input>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
        
      </form>
    </div>
  )
}

export default UseRef
