import './login.css'
import React, { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom';
// import axios from 'axios'
import art from '../../assets/Art.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'


const Loginuser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, {
        email,
        password,
      });
      localStorage.setItem("token",res.data)
      window.location = "/"
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
  <div className="main-container">

    <div className="art-container">
    <div className="art">
      <img src={art} alt="Art" />
    </div>
    <div className="art-headings">
      <h1>Welcome aboard my friend</h1>
      <p>just a couple of clicks and we start</p>
    </div>
 </div>

    <div className="form-container">
        <div className="form-heading">
            Login
        </div>
    <form onSubmit={handleSubmit}>

        <div className="input">
        <img src={email_icon} alt="" />            
        <input
             placeholder='Email'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         </div>

        <div className="input">
        <img src={password_icon} alt="" />            
             <input
              placeholder='Password'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />            
        </div>
        
    <button class="login-btn" type="submit">Log in</button>
    

    <label >Have no account yet ?</label>
    <Link to='/Registeruser'>
    <button class="register-btn" type="submit">Register</button>
    </Link>

    
  </form> 
    </div>
  </div>
  );
};


export default Loginuser;