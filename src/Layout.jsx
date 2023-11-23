import React from 'react'
import Header from './Componontes/Header/Header'
import Footer from './Componontes/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    {/* header or Footer same rahega or jogh outlet use kiya hai wohh jaa kar change hoga  */}
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
