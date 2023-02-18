import React, {useReducer} from 'react';

const reducer = (state, action)=>{
    switch (action.type){
        case 'increment':
            return {count:state.count +1};
        case 'decrement':
            return {count:state.count -1};
        default:
            return state;
    }
}

const UseReducer = () => {
    const [state,dispatch] = useReducer(reducer, {count: 0});

    const increment=()=>{
        dispatch({type: 'increment'});
    }
    const decrement = ()=>{
        dispatch({type: 'decrement'});
    }
  return (
    <div>
        <h3>You have clicked the button {state.count} times</h3>
        <button onClick={increment}>+</button>
        <div>{state.count}</div>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default UseReducer
