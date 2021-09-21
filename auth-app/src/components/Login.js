import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import user from '../assets/avatar.svg'
import './Login.css'

function Login() {
  let history = useHistory()
  
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPasswd, setLoginPasswd] = useState('')
  const [loginError, setLoginError] = useState('')

  const rembrMeRef = useRef(true)

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(rembrMeRef.current.value)
    let userData = JSON.parse(localStorage.getItem("userData"))
    if((loginEmail === userData.email) && (loginPasswd === userData.passwd))
      {
        userData["isLoggedIn"] = true
        localStorage.setItem('userData', JSON.stringify(userData))
        history.push('/')
      }
    else
      setLoginError("Wrong Email Id / Password")  
  }

  return (
    <div class="form">
      <form onSubmit={handleLogin} >
      <div class="imgcontainer">
        <img src={user} alt="icon" class="icon"/>
        <h2>Sign In</h2>
      </div>
      <div class="container">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter email" name="email" id="email" value={loginEmail} onChange={e=>setLoginEmail(e.target.value)} required/>
        <label for="passwd"><b>Password</b></label>
        <input type="password" placeholder="Enter password" name="passwd" id="passwd" value={loginPasswd} onChange={e=>setLoginPasswd(e.target.value)} required/>
        <button id="submit" className="btn btn-success">Login</button>
        <Link id="emailHelp" className="form-text mt-5" to="/Signup" style={{fontSize:16, marginTop:5}}>New user?</Link>
        <div style={{color:'red',fontSize:15,margin:5}}>{loginError}</div>
      </div>
      </form>
    </div>
  )
}

export default Login
