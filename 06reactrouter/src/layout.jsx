import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import App from './App'


function Layout() {
  return (
    <>
      <div className='dark:bg-gray-800 dark:border-gray-700'>
      <App />
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

export default Layout
