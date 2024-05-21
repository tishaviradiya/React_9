import React from 'react'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function PrivateRoutes({children}) {
    let isAuth=false
    if(!isAuth){
        return <Navigate to="/login"></Navigate>
    }
  return (
    <div>
        <PrivateRoutes>
            {children}
        </PrivateRoutes>
    </div>
  )
}
