import React, {useState} from 'react'

const SimpleComponent = () => {
    const[name,setName]= useState('');
    const[age,setAge]= useState('');
    const[city,setCity]= useState('');
    const[country,setCountry]= useState('');
    
    const submitHandler= (e)=>{
        e.preventDefault();
        setName('');
        setAge('');
        setCity('');
        setCountry('');
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <input required
                placeholder='Enter name'
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}>  
                </input>
            </div>
            <div>
                <input required
                placeholder='Enter age'
                type='number'
                value={age}
                onChange={(e)=>setAge(e.target.value)}>
                </input>
            </div>
            <div>
                <input required
                placeholder='Enter city'
                type='text'
                value={city}
                onChange={(e)=>setCity(e.target.value)}>
                </input>
            </div>
            <div>
                <input required
                placeholder='Enter country'
                type= 'text'
                value={country}
                onChange={(e)=>setCountry(e.target.value)}>
                </input>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      
    </div>
  )
}
export default SimpleComponent
