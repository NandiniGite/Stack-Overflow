import React from 'react'
import { useState } from 'react'
import icon from '../../assets/icon.png'
import AboutAuth from './AboutAuth'
import './Auth.css';
import {signup,login} from '../../actions/auth'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Auth = () => {

const dispatch= useDispatch();
const navigate= useNavigate();

  const[isSignup,setIsSignup]=useState(false)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSwitch=()=>{
        setIsSignup(!isSignup)
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };
  
  return (
    <section className='auth-section'>
        {isSignup && <AboutAuth/>}
        <div className='auth-container-2'>
            
            {!isSignup && <img src={icon} alt='icon' className='login-logo'/>}
            <form onSubmit={handleSubmit}>
                {
                   isSignup && (<label htmlFor='name'><h4>Name</h4>
                   <input type='name' name="name" id="name" onChange={(e)=>setName(e.target.value)}/>
                   </label>
                   
                   ) 
                }

                <label htmlFor='email' ><h4>Email</h4>
                <input type='email' name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                </label>
                <label htmlFor='password' >
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <h4>Password</h4>
                { !isSignup && <p style={{color:"#007ac6" ,fontSize:"13px"}}>forgot password?</p>}
                </div>
                <input type='password' name="password" id="password" onChange={(e)=>setPassword(e.target.value)} />
                {isSignup &&<p style={{color:"#666767" ,fontSize:"13px"}}>Password must contain atleast 8<br/> characters with 1 letter and 1 <br/>number</p>}

                </label>
            
            {
                isSignup &&(
                    <label htmlFor='check'>
                        <input type='checkbox'id='check'/>
                        <p style={{color:"#666767" ,fontSize:"13px"}}>Opt-In to recieve product-updates<br/> ,user research invitations,company<br/> announcements and digests </p>
                    </label>
                )
            }
            {
                isSignup &&(
                    <p style={{color:"#666767", fontSize:"13px"}}>By clicking "SignUp" you agree to our<br/><span style={{color:"#007ac6"}}>Terms and Conditions</span> && <span style={{color:"#007ac6"}}>Company policies</span><br/> && <span style={{color:"#007ac6"}}>Cookies policy</span></p>
                )
            }
                <button  type='Submit' className='auth-btn' onClick={handleSubmit}>{!isSignup? 'Login' :'SignUp'}</button>
                
            </form>
            <p>{isSignup? "Already an account ?" :"Dont  have an account ?"}
            <button className='handle-switch-btn' type='submit' onClick={handleSwitch}>{isSignup? 'Login ':'SignUp'}</button>

            </p>
            
        </div>
    </section>
  )
}

export default Auth
