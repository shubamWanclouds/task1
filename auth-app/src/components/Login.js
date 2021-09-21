import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import user from '../assets/avatar.svg'
import wave from '../assets/wave.png'
import './Login.css'

function Login() {
  let history = useHistory()
  
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPasswd, setLoginPasswd] = useState('')
  const [loginError, setLoginError] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    let userData = JSON.parse(localStorage.getItem("userData"))
    if(userData)
    {
      if((loginEmail === userData.email) && (loginPasswd === userData.passwd))
      {
        userData["isLoggedIn"] = true
        localStorage.setItem('userData', JSON.stringify(userData))
        history.push('/')
      }
      else
        setLoginError("Wrong Email Id / Password")  
    } else {
      setLoginError("No User Found") 
    }
  }

  return (
    <div className="form" style={{background:`url(${wave})`}}>
      <form onSubmit={handleLogin} >
      <div className="imgcontainer">
        <img src={user} alt="icon" className="icon"/>
        <h2>Sign In</h2>
      </div>
      <div className="container">
        <label htmlFor="email"><b>Email</b></label>
        <input type="text" placeholder="Enter email" name="email" id="email" value={loginEmail} onChange={e=>setLoginEmail(e.target.value)} required/>
        <label htmlFor="passwd"><b>Password</b></label>
        <input type="password" placeholder="Enter password" name="passwd" id="passwd" value={loginPasswd} onChange={e=>setLoginPasswd(e.target.value)} required/>
        <button id="submit" className="btn btn-success">Login</button>
        <Link id="emailHelp" className="form-text mt-5" to="/Signup" style={{fontSize:15, marginTop:5,color:'#000'}}>New user?</Link>
        <div style={{color:'red',fontSize:15,margin:5}}>{loginError}</div>
      </div>
      </form>
    </div>
  )
}

export default Login
