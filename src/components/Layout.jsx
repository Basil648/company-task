import React from 'react'
import Header from './header'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import '../App.css'

function Layout() {
  return (
    <>
    <Header/>
    <Navbar/>
   <div style={{padding:"50px"}}>
     <Outlet/>
   </div>
    <Footer/>
    </>
  )
}

export default Layout