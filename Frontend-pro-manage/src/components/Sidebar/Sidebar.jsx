import React from 'react'
import styles from './sidebar.module.css';
import { NavLink} from 'react-router-dom'
import layout from '../../assets/layout.png'
import db_img from '../../assets/database.png'
import  settings_img  from '../../assets/settings.png'
import logo from '../../assets/codesandbox.png'


function Sidebar() {
    return (
      <div className={styles.sidebar}>
          <div className={styles.header}>
              <img src={logo} alt="" />
              <span className={styles.logo_img}>Pro Manage</span>
          </div>
      <div className={styles.menu_container}>
          <ul className={styles.menu}>
              <li  className={styles.menu_list}>
                  <img src={layout} alt="" />
                  <NavLink className={styles.navlink} to="/"> 
                  Dashboard
                  </NavLink>
              </li>
              <li  className={styles.menu_list}>
                  <img src={db_img} alt="" />
                  <NavLink className={styles.navlink} to="/analytics"> 
                  Analytics
                  </NavLink>
              </li>
              <li  className={styles.menu_list}>
                  <img src={settings_img} alt="" />
                  <NavLink className={styles.navlink} to="/settings"> 
                   Settings
                  </NavLink>
              </li>
              
          </ul>
          </div>
      </div>
    )
}  
export default Sidebar