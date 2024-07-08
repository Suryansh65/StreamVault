import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./css/Signup.css";


const Signup = () => {
  const history = useNavigate();
    const [username,setusername] = useState('');
    const [email,setEmail] = useState('');
    const[password,setpassword] = useState('');
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
          await axios.post('http://localhost:3000/signup',{username,email,password}).then(res=>{
            if(res.data === "exist"){
              alert("User already exist");
            }else if(res.data === "not exist"){
              history("/home");
            }
          })
        }catch(err){
          console.log(err);
        }
    }
  return (
    <div className='signup-main-container'>
    <div className='signup-logo-container'>
    <img src='StreamVault_logo.png' alt='logo'/>
    <h1>Sign-up</h1>
    </div>
        
        <form action='POST'>
        <input type='text' placeholder='USERNAME' onChange={(e)=>setusername(e.target.value)} />
            <input type='email' placeholder='EMAIL' onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' placeholder='PASSWORD' onChange={(e)=>setpassword(e.target.value)} />
            <button type='submit' onClick={handleSubmit}>Signup</button>
            <Link className='signup-link' to='/'>Already have an account? Login</Link>
        </form>
        
    </div>
  )
}

export default Signup;