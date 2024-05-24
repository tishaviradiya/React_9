import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import SignUp from './SignUp'
import Login from './Login'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route  path='/signup' element={<SignUp/>}>SignUp</Route>
            <Route  path='/login' element={<Login/>}>Login</Route>
        </Routes>
    </div>
  )
}
