import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import Home from '../../pages/Home/Home.jsx'
import { Outlet } from 'react-router-dom'




export default function Layout() {
  return (
    <>
    <Navbar/>

    <div className="mx-auto">
        <Outlet/>
    </div>


    <Footer/>    
    </>
  )
}
