import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'

const PublicRoute = () => {
  if(! isAuthenticated()){
    return <Outlet/>
  }else{
    return <Navigate to="/"/>
  }
}

export default PublicRoute