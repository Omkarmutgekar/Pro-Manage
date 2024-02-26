import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Registeruser from './components/Registeruser/Registeruser.jsx'
import './index.css'
import Loginuser from './components/Loginuser/Loginuser.jsx'

const user = localStorage.getItem("token");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes >
      <Route path='/register' element={<Registeruser />} />
      <Route path='/login' element={<Loginuser />} />
      {user && <Route path='/' element={<Home />} />}
    </Routes>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Registeruser/> */}
    {/* <Loginuser/> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
