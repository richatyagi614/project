import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from'../Component/User/Featured/HOME'
import Pages from'../Component/User/Featured/PAGES'
import Signup from'../Component/User/Featured/SIGNUP'
import OldSignup from'../Component/User/Featured/OldSignup'
import Login from '../Component/User/Featured/Login'
import Logout from '../Component/User/Featured/Logout'
import MyProfile from '../Component/User/Featured/MyProfile'
import UserModule from '../modules/UserModule'
import AdminModule from '../modules/AdminModule'
import AdminLogin from'../Component/Admin/featured/Login'
import Dashboard from '../Component/Admin/featured/Dashboard'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path=''element={<UserModule/>}>
      <Route path='' element={<Home/>}/>
      <Route path='PAGES' element={<Pages/>}/>
      <Route path='SIGNUP' element={<Signup/>}/>
      <Route path='OldSIGNUP' element={<OldSignup/>}/>
      <Route path='Logout' element={<Logout/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='MyProfile' element={<MyProfile/>}/>
      </Route>
      <Route path='admin' element={<AdminModule/>}>
        <Route path='' element={<AdminLogin/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
  )
}

export default AllRoutes