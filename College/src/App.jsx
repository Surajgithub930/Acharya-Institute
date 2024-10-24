import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
