import React, {useState} from 'react'

const ComplexComponent = () => {
    const [user, setUser]= useState({name:'',
                            age: '', city:'', country:''});
     const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({name:'',
                            age: '', city:'', country:''})
     }                       
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input placeholder='Enter name'
                type='text'
                value={user.name}
                onChange={(e)=>setUser(e.target.value)}>
                </input>
            </div>
            <div>
                <input placeholder='Enter age'
                type='number'
                value={user.age}
                onChange={(e)=>setUser(e.target.value)}>
                </input>
            </div>
            <div>
                <input placeholder='Enter city'
                type='text'
                value={user.city}
                onChange={(e)=>setUser(e.target.value)}>
                </input>
            </div>
            <div>
                <input placeholder='Enter country'
                type='text'
                value={user.country}
                onChange={(e)=>setUser(e.target.value)}>
                </input>
            </div>
            <div>
                <button type='submit'>
                    submit
                </button>
            </div>
        </form>
      
    </div>
  )
}

export default ComplexComponent
