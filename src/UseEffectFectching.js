import React, {useState,useEffect} from 'react'

const UseEffectFectching = () => {
    const [users, setUsers]= useState('');
    const url = 'https://api.github.com/users';

    useEffect(()=>{
        const results = fetch(url).then(res=>res.json())
        .then(data=>setUsers(data));
    },[])
  return (
    <div>
      <h4>The list of users from Github are 
        {users && users.map((user)=>{
            return(
            
            <h5>{`${user.id}`}.{`${user.login}`}</h5>    
            
        )
        })}
      </h4>
    </div>
  )
}

export default UseEffectFectching
