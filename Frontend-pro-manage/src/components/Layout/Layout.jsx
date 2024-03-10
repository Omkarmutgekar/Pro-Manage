import React ,{useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
import Addtodo from '../Addtodo/Addtodo'
import styles from './layout.module.css'  


function Layout() {
  const[openPopup , setOpenPopup] = useState(true);

  const HandlePopup =(e)=>{
    e.preventDefault()
    setOpenPopup(!openPopup)
  }
  const onClose = () => {
    setOpenPopup(false);
  }


  return (
    <div style={{display:"flex"}}>
        <Sidebar />
      {/* { openPopup && <div className={styles.group_tab} onClick={(e) =>HandlePopup(e)}> 
       {openPopup && <Addtodo onClose={onClose}/>}
       </div> 
       } */}
        <Outlet />
    </div>
  )
}

export default Layout