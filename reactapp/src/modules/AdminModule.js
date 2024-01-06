import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Component/Admin/shared/Header'
import Footer from '../Component/Admin/shared/Footer'

const AdminModule = () => {
  return (
    <>
    <Header/>
    <div className="container" style={{minHeight:"700px"}}>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default AdminModule