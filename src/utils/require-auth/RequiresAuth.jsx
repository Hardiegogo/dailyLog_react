import React from 'react'
import {Navigate} from 'react-router-dom'

const  RequiresAuth=({children,login})=> {
  return login ? children: <Navigate to='/login' replace/>
    
  
}

export default RequiresAuth