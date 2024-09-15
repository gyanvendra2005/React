import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import App from './App.jsx'
function Layout() {
  return (
    <> <div className='dark:bg-gray-800 dark:border-gray-700'>
    <App />   
    <Header/>
    <Outlet />
    <Footer />
    </div>
    </>
  )
}

export default Layout
