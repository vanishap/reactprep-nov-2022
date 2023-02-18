import React, {Component} from 'react';

class ClassDemo extends React.Component{
 constructor(){
    super();
    this.state = {count:0, name:''};
 }
 handleClick=()=>{
    this.setState({count: this.state.count+1})
    this.setState({name:this.state.count%2===0? 'Vanisha':'Madhan'})
 }
 render(){
    return (
        <div>
            <h3>You have clicked me {this.state.count} times {this.state.name}</h3>
            <button onClick={this.handleClick}>Click Me</button>
        </div>
    )
 }
}
export default ClassDemo;