import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Layout from '../src/components/Layout/Layout.jsx'
// //import Home from './components/HomeDash/HomeDash.jsx'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Registeruser from './components/Registeruser/Registeruser.jsx'
// import Loginuser from './components/Loginuser/Loginuser.jsx'
// import HomeDash from './components/HomeDash/HomeDash.jsx'
// import Analytics from './components/Analytics/Analytics.jsx'
// import Settings from './components/Settings/Settings.jsx'

// const user = localStorage.getItem("token");  

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='/HomeDash' element={<HomeDash />} />
//       <Route path='/Analytics' element={<Analytics />} />
//       <Route path='/settings' element={<Settings/>} />
//       <Route path='/register' element={<Registeruser />} />
//       <Route path='/login' element={<Loginuser />} />
//       {/* {user && <Route path='/' element={<Home />} />} */}
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Registeruser/> */}
    {/* <Loginuser/> */}
    {/* <Sidebar/> */}

    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
