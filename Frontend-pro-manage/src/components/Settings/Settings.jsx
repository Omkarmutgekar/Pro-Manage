import React from 'react'
import styles from './settings.module.css'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useState } from 'react'

function Settings() {

  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth/update";
      const { data: res } = await axios.post(url, {
        username,
        oldPassword,
        newPassword,
      });
      localStorage.setItem("token", res.token);
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.settings_main}>
      <h5 className={styles.settings_title}>Settings</h5>
      <div className={styles.settings}>
        <form onSubmit={handleSubmit} className={styles.settings_form}>
        <div className={styles.input}>
            <img src={email_icon} alt="" />
            <input
              className={styles.user_input}
              placeholder='Username'
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <img src={password_icon} alt="" />
            <input
              className={styles.user_input}
              placeholder='Old Password'
              type="password"
              id="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <img src={password_icon} alt="" />
            <input
              className={styles.user_input}
              placeholder='New Password'
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button className="login-btn" type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Settings