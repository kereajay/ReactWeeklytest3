import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Removebg from './Removebg'
// import Fake from './Fake'
import Navbar from './Navbar'
import Body from './Body'
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom'
import Multipleimages from './Multipleimages.jsx'
import Filechange from './Filechange'
import Multipledetail from './Multipledetail.jsx'
import Jpeg from './Jpeg.jsx'
import WEB from './WEB.jsx'
import PNG from './PNG.jsx'
import Footer from './Footer.jsx'

const Mainjs=()=>{
  return(
    <>
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
    
    </>
  )
}


const rotera=createBrowserRouter([
  {
    path:'/',
    element:<Mainjs/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/Body',
        element:<Body/>
      },
      {
        path:'removebg',
        element:<Removebg/>
      },
      {
        path:'Multipleimages',
        element:<Multipleimages/>
      },{
        path:'Filechange',
        element:<Filechange/>
      },{
        path:"Multipledetail/:id",
        element:<Multipledetail/>
      },
      {
        path:'Jpeg',
        element:<Jpeg/>
      },
      {
        path:'WEB',
        element:<WEB/>
      },
      {
        path:'PNG',
        element:<PNG/>
      }
    ]
  }
])
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={rotera}/>)
