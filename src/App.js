
import React, {useState} from 'react';
import './App.css';
import UseState from './UseState';
import ClassDemo from './ClassComponent';
import UseEffectFectching from './UseEffectFectching';
import UseRef from './UseRef';
import SimpleComponent from './SimpleComponent';
import ComplexComponent from './ComplexComponent';
import PropsParentToChild from './PropsParentToChild';
import UseReducer from './UseReducer';
import UseReducerName from './UseReducerName';



function App() {
  // const [name, setName] = useState('California');
  // const cityChange=(value)=>{
  //   setName(value)
  // }
  
  return (
    <div className="App">
       {/* <PropsParentToChild name={name} city={cityChange}/> */}
       <ComplexComponent />
    </div>
  );
}

export default App;
