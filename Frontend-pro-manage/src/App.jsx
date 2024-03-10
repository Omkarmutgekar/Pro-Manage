import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from '../src/components/Layout/Layout.jsx'
//import Home from './components/HomeDash/HomeDash.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signupuser from './components/Signupuser/Signupuser.jsx'
import Loginuser from './components/Loginuser/Loginuser.jsx'
import AppBoard from './components/AppBoard/AppBoard.jsx'
import Analytics from './components/Analytics/Analytics.jsx'
import Settings from './components/Settings/Settings.jsx'



const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path='/register' element={<Signupuser />} />,
    <Route path='/login' element={<Loginuser />} />,
    <Route path='/' element={<Layout />}>
      <Route path='' element={<AppBoard />} />,
      <Route path='/Analytics' element={<Analytics />} />,
      <Route path='/settings' element={<Settings/>} />,
    </Route>
  ])
)




// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<AppBoard />} />
//       <Route path='/Analytics' element={<Analytics />} />
//       <Route path='/settings' element={<Settings/>} />
//       <Route path='/register' element={<Signupuser />} />
//       <Route path='/login' element={<Loginuser />} />
//       {/* {user && <Route path='/' element={<Home />} />} */}
//     </Route>
//   )
// )

function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App