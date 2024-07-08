import React, { useState,useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './css/Login.css';


const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/', { email, password })
        .then(res => {
          if (res.data === "exist") {
            const user = res.data.user;
           
            history("/home");
          } else if (res.data === "not exist") {
            alert("User is not sign up");
          }
        })
        .catch(e => {
          alert("wrong details");
          console.log(e);
        })

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='login-main-container'>
      <div className='login-logo-container'>
        <img src='StreamVault_logo.png' alt='logo' className='logo' /><h1 className='login-heading'>Login</h1>

      </div>
      <form className='login-container' action='POST'>
        <input type='email' id='email' placeholder='EMAIL' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' id='password' placeholder='PASSWORD' onChange={(e) => setpassword(e.target.value)} />
        <button type='submit' className='btn' onClick={handleSubmit}>Login</button>
        <Link to='/signup' className='signup-link' >Don't have an account? Create Now!</Link>
      </form>
    </div>
  )
}

export default Login