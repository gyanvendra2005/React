import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import Layout from './layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import App from './App.jsx'
import Card from './components/Card/Card.jsx'
import Mygithub from './components/Mygithub/Mygithub.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path: `user`,
        element:<Mygithub/>
      },
      {path: `buy`,
        element:<Card/>}
    ]
      
    
  }
])

createRoot(document.getElementById('root')).render(
    <>
    
    <RouterProvider router={router}/>
    </>

)
