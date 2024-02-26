import './register.css'
import React, { useState } from 'react';
import art from '../../assets/Art.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import person_icon from '../../assets/person.png'


const Registeruser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
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
            Register
        </div>
    <form onSubmit={handleSubmit}>

        <div className="input">
            <img src={person_icon} alt="" />            
             <input
             placeholder='Name'
            type="text"
             id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>

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

    <div className="input">
    <img src={password_icon} alt="" />            
    <input
      placeholder='Confirm Password'
      type="password"
      id="confirmPassword"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />        
    </div>
        
    <button class="submit-btn" type="submit">Register</button>
    <label >Have a account ?</label>
    <Link to='/Loginuser'> 
    <button class="login-btn" type="submit">log in</button>
    </Link>
    
  </form> 
    </div>
  </div>
  );
};


export default Registeruser;