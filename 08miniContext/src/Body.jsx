import React, { useContext } from 'react'
import userContext from './context/userContext'

function Body() {
    const {user,setUser}=useContext(userContext)
    
  return (
    <div onClick={()=>{setUser("React")}}>{user}</div>
  )
}

export default Body