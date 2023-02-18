import React, {useReducer} from 'react';

const reducer = (state, action)=>{
    switch(action.type){
        case 'changeName':
            return {name:'Vanisha'}
        case 'changeCity':
            return {city:'Cupertino'}
        }  
}

const UseReducerName = () => {
    const [state, dispatch]= useReducer(reducer, {name:'', city:''});
    
    const changeName = ()=>{
        dispatch({type:'changeName'});
    };
    const changeCity= ()=>{
        dispatch({type:'changeCity'});
    }
  return (
    <div>
      <h4>Hello, my name is {state.name} and I'm from {state.city}</h4>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeCity}>Change City</button>
    </div>
  )
}

export default UseReducerName
